// ambient.js
var app = getApp();
var con = require("../../../utils/data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photogroup: []
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    app.getUserInfo();
    //图库
    wx.request({
      url: con.homegetphotogroup,
      data: { wxappid: con.wyy_user_wxappid },
      method: 'GET',
      header: {
        "Content-Type": 'application/json'
      },
      success: function (res) {
        // console.log(res.data.info);
        that.setData({
          photogroup: res.data.info
        })
        console.log(res.data.info);
      }
    });
  },

  // 跳转图库
  goDetial_photo: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: 'detail/photo/photo?id=' + id,
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})