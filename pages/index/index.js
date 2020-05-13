import { request } from "./../../request/index.js";

Page({
  data: {
    // 轮播图数组
    swiperList: [],
  },
  // 查询轮播图
  querySwiperList: function () {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
    }).then((result) => {
      this.setData({
        swiperList: result.data.message,
      });
    });
  },
  onLoad: function () {
    this.querySwiperList();
  },
});
