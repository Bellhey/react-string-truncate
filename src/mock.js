/**
 * @description mock数据
 */

export default {
  "menu": [
    {
      "key": "comprehensive",
      "id": "ANAM01"
    },
    {
      "key": "news",
      "id": "ANAM02"
    },
    {
      "key": "data",
      "id": "ANAM03"
    },
    {
      "key": "notice",
      "id": "ANAM04"
    },
    {
      "key": "report",
      "id": "ANAM05"
    },
    {
      "key": "mystock",
      "id": "ANAM06"
    },
    {
      "key": "other",
      "id": "ANAM07"
    },
    {
      "key": "vc",
      "id": "ANAM08"
    }
  ],
  "permission": {
    "showItmes": [
      "ANAM01",
      "ANAM02",
      "ANAM03",
      "ANAM04",
      "ANAM05",
      "ANAM06",
      "ANAM07",
      "ANAM08"
    ]
  },
  "opmenu": {
    "opMenu": [
      {
        "id": 4,
        "title": "研报",
        "permission": "ANAM05",
        "icon": "http://abc-search-share.oss-cn-hangzhou.aliyuncs.com/menu/icon-report.svg",
        "url": "https://report.analyst.ai/",
        "sort": 1,
        "state": 1
      },
      {
        "id": 3,
        "title": "公告",
        "permission": "ANAM04",
        "icon": "http://abc-search-share.oss-cn-hangzhou.aliyuncs.com/menu/icon-notice.svg",
        "url": "https://filing.analyst.ai/",
        "sort": 2,
        "state": 1
      },
      {
        "id": 1,
        "title": "资讯",
        "permission": "ANAM02",
        "icon": "http://abc-search-share.oss-cn-hangzhou.aliyuncs.com/menu/icon-news.svg",
        "url": "https://news.analyst.ai/",
        "sort": 3,
        "state": 1
      },
      {
        "id": 2,
        "title": "数据",
        "permission": "ANAM03",
        "icon": "http://abc-search-share.oss-cn-hangzhou.aliyuncs.com/menu/icon-data.svg",
        "url": "https://data.analyst.ai/",
        "sort": 4,
        "state": 1
      },
      {
        "id": 5,
        "title": "自选股",
        "permission": "ANAM06",
        "icon": "http://abc-search-share.oss-cn-hangzhou.aliyuncs.com/menu/icon-mystock.svg",
        "url": "https://mystock.analyst.ai/",
        "sort": 5,
        "state": 1
      },
      {
        "id": 7,
        "title": "创投数据",
        "permission": "ANAM08",
        "icon": "http://abc-search-share.oss-cn-hangzhou.aliyuncs.com/menu/icon-vc.svg",
        "url": "https://data.analyst.ai/vc",
        "sort": 6,
        "state": 1
      },
      {
        "id": 6,
        "title": "其他",
        "permission": "ANAM07",
        "icon": "http://abc-search-share.oss-cn-hangzhou.aliyuncs.com/menu/icon-other.svg",
        "url": "https://v1.analyst.ai/ai-stocks/index",
        "sort": 7,
        "state": 1
      }
    ]
  }
};