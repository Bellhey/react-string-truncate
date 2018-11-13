# StringTruncate - 文本截取组件

文本截取组件根据用户指定的高度或者宽度限制，对指定元素的文本节点内容进行截取，并可以添加自定义的省略符号。

[**项目主页**](https://github.com/Bellhey/react-string-truncate)

## 适用范围

在需要限制文本高度或者单行文本宽度的元素节点处，通过chilidren模式使用该组件：

![文本截取组件截图](https://i.loli.net/2018/11/13/5bea7f6391185.png)
![文本截取组件截图](https://i.loli.net/2018/11/13/5bea7f6403eda.png)

## 代码演示

```jsx
import StringTruncate from 'react-string-truncate';

...

<StringTruncate maxHeight={60} ellipsisSymbol={'~~~'}>
  这是一个根据最大高度或者最大宽度进行文本截取的工具，可以自定义省略符号。
  这是一个根据最大高度或者最大宽度进行文本截取的工具，可以自定义省略符号。
  这是一个根据最大高度或者最大宽度进行文本截取的工具，可以自定义省略符号。
  这是一个根据最大高度或者最大宽度进行文本截取的工具，可以自定义省略符号。
</StringTruncate>
```

## API

|属性|说明|类型|默认值|
|:--|:--|:--:|:--:|
|maxHeight|高度阀值（px）|`number`|`undefined`|
|maxWidth|宽度阀值（px）|`number`|`undefined`|
|ellipsisSymbol|省略符号|`sting\react.element`|`...`|
|truncateTargetSelector|需要截取文本的子元素节点选择器,若不传默认为children整体|`string`|`undefined`|
|overflowHandler|文本溢出回调|`function`|`undefined`|
