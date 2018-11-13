import React, { Component, Fragment, } from 'react';
import ReactDOM from 'react-dom';
import sizeMe from 'react-sizeme';
import PropTypes from 'prop-types';
import _ from 'lodash';

@withSizeChangeAware
@sizeMe({
  monitorWidth: true,
  monitorHeight: true,
})
class StringTruncate extends Component {
  static defaultProps = {
    ellipsisSymbol: '...'
  }

  render() {
    const {wrapRef, ...props} = this.props;
    return (
      <div {...this.props} ref={wrapRef}>
        {
          props.children
        }
      </div>
    )
  }
}


function withSizeChangeAware(WrappedComponent) {
  class ExtendedComponent extends Component {

    ref = React.createRef();

    onSize = (size) => {
      const { maxHeight, maxWidth, } = this.props;
      const { height, width } = size;

      if (!this.tobeEllipseEl) {
        const { truncateTargetSelector } = this.props;
        const wrapEl = this.ref.current;
        if (wrapEl) {
          const targetEl = truncateTargetSelector && wrapEl.querySelector(truncateTargetSelector);
          this.wrapEl = wrapEl;
          this.tobeEllipseEl = targetEl || wrapEl;
          this.originString = this.tobeEllipseEl.innerText;
        }
      }

      //检测是否超过限高或限宽
      if (!_.isUndefined(maxHeight)) {
        if (height >= maxHeight) {
          this.overFlowHandler('height', height, maxHeight);
        }
      }

      //检测是否超过限宽
      if (!_.isUndefined(maxHeight)) {
        if (width >= maxWidth) {
          this.overFlowHandler('width', width, maxWidth);
        }
      }
    }

    overFlowHandler = (type, curSize, limitSize) => {
      const {overFlowHandler, ellipsisSymbol} = this.props;
      this.truncateString(this.tobeEllipseEl, this.originString, type, limitSize, ellipsisSymbol);
      this.truncated = true;
      if (_.isFunction(overFlowHandler)) {
        overFlowHandler(type, curSize, this.originString);
      }
    }

    truncateString(el, originText, type, limitSize, ellipsisSymbol,) {
      const style = el.style;
      const textProp = el.textContent === undefined ? 'innerText' : 'textContent'

      // 暂时性移除尺寸计算样式
      const typeStyle = style[type];
      style[type] = 'auto';
      const maxTypeStyle = style[`max${_.capitalize(type)}`];
      style[`max${_.capitalize(type)}`] = 'none';


      //二分查找多少字符能够适应允许的尺寸
      let max = originText.length - 1;
      // let min = 0;
      let pivot = max;
      let slicedText;
      while (el.getBoundingClientRect()[type] > limitSize) {
        --pivot;
        slicedText = `${originText.slice(0, pivot)}`;
        this.updateContent(el, slicedText, textProp, ellipsisSymbol,);
      }

      //回复原有尺寸计算样式
      style[type] = typeStyle;
      style[`max${_.capitalize(type)}`] = maxTypeStyle;
    }

    //更新目标元素内容
    updateContent = (el, slicedText, textProp, ellipsisSymbol) => {
      if (typeof ellipsisSymbol === 'string') {
        el[textProp] = `${slicedText}${ellipsisSymbol}`;
      }
      if (React.isValidElement(ellipsisSymbol)) {
        ReactDOM.render((<Fragment>{slicedText}<ellipsisSymbol /></Fragment>), document.getElementById('root'));
      }
    }

    render() {
      return <WrappedComponent wrapRef={this.ref} onSize={this.onSize} {...this.props} />;
    }
  }

  return ExtendedComponent;
}

StringTruncate.propTypes = {
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  overFlowHandler: PropTypes.func,
  truncateTargetSelector: PropTypes.string,
  ellipsisSymbol: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
}

StringTruncate.defaultProps = {
  ellipsisSymbol: '...'
}

export default StringTruncate;

