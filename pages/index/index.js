import { request } from "./../../request/index.js";

Page({
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航数组
    navList: [],
    // 楼层数组
    floorList: []
  },
  // 查询轮播图
  querySwiperList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
    }).then((result) => {
      this.setData({
        swiperList: result.data.message,
      });
    });
  },
  // 查询导航
  queryNavList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems",
    }).then((result) => {
      console.log('导航数据', result);
      this.setData({
        navList: result.data.message
      })
    })
  },
  // 获取楼层数据
  queryFloorList() {
    request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata",
    }).then((result) => {
      console.log('楼层数据', result);
      this.setData({
        floorList: result.data.message
      })
    })
  },
  onLoad() {
    this.querySwiperList();
    this.queryNavList();
    this.queryFloorList();
  },
});
