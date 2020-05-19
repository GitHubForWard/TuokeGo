import {
  request
} from "./../../request/index.js";

// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftMenuList: [],
    rightContent: [],
    // 被点击的左侧菜单
    currentIndex: 0,
    scrollTop: 0
  },

  cateList: [],

  // 查询分类数据
  queryCateList() {
    request({
      url: "categories"
    }).then(result => {
      console.log("分类数据", result);
      this.cateList = result.data.message;
      wx.setStorageSync('cates', {
        time: Date.now(),
        data: this.cateList
      });
      this.setData({
        leftMenuList: this.cateList.map(v => v.cat_name),
        rightContent: this.cateList[0].children
      })
    })
  },

  handleItemTap(e) {
    console.log(e);
    const {
      index
    } = e.currentTarget.dataset;
    this.setData({
      scrollTop: 0,
      currentIndex: index,
      rightContent: this.cateList[index].children
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const Cates = wx.getStorageSync('cates');
    if (!Cates) {
      this.queryCateList();
    } else {
      if (Date.now() - Cates.time > 1000 * 60 * 5) {
        this.queryCateList();
      } else {
        this.cateList = Cates.data;
        const leftMenuList = this.cateList.map(v => v.cat_name);
        const rightContent = this.cateList[0].children;
        this.setData({
          leftMenuList,
          rightContent
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})