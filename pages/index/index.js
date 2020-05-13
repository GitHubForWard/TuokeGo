import { request } from "./../../request/index.js";

Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    navList: [],
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
  // 查询导航
  queryNavList: function () {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
    }).then((result) => {
      console.log('导航数据', result);
      this.setData({
        navList: result.data.message
      })
    })
  },
  onLoad: function () {
    this.querySwiperList();
    this.queryNavList();
  },
});
