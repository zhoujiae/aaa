var app = getApp();
var con = require("../../../utils/data.js");
// home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    gettype: [],
    photogroup:[],
    prelist: [],
    articallist: [],
    videoList: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo();
    //幻灯片
    wx.request({
      url: con.hospital_getslide,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        that.setData({
          list: res.data.info
        })
        console.log(res.data.info);
      }
    });
    //商家分类     
    wx.request({
      url: con.hospital_gettype,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          gettype: res.data.info
        })
        console.log(res.data.info);
      }
    });
    // 预约
    wx.request({
      url: con.hospital_getprelist,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          prelist: res.data.info
        })
        console.log(res.data.info);
      }
    });
    //文章列表
    wx.request({

      url: con.gettarticallist,
      data: { wxappid: con.wyy_user_wxappid, count: 1},
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        that.setData({
          articallist: res.data.info
        })
        console.log(res.data.info);
        console.log(options.id)
      }
    });
    that.getVideoHttp();
  },

  // 视频列表页面
  goMoreVideo: function (e) {
    wx.navigateTo({
      url: 'video/video',
    })
  },
  getVideoHttp: function () {
    var that = this;
    wx.request({
      url: con.getvideo,
      data: { wxappid: con.wyy_user_wxappid, count: 4 },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          videoList: res.data
        })
        console.log(111, res.data);
      }
    });
  },
  // 跳转文章详情
  goDetial_articallist: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'detail/artical/artical?id=' + id,
    })
  },
  // 跳转首页文章列表
  go_homearticallist: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'detail/homearticallist/homearticallist?id=' + id,
    })
  },
  // 跳转预约
  gopre: function (e) {
    var id = e.currentTarget.dataset.id
    wx.switchTab({
      url: '../pre/pre?id=' + id,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})