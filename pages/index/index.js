//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    // 轮播图数组
    swiperList: [],
  },
  onLoad: function () {
    wx.request({
      url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
      success: (result) => {
        console.log("轮播图", result);
        this.setData({
          swiperList: result.data.message
        })
      },
    });
  },
});
