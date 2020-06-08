// pages/mytest/Mytest.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trueName:"xxxxx",
    school:"xxxxx大学",
    user:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心',
    })
    if (app.globalData.token == null) {
      wx.showToast({
        title: '尚未登录',
        icon: 'none',
        duration: 8000
      })
      wx.navigateTo({
        url: '../userLogin/userLogin',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tofeedback:function(){
    wx.navigateTo({
      url: '../Feedback/Feedback',
    })
  },
  tomine:function(){
    wx.navigateTo({
      url: '../Myinfo/Myinfo',
    })
  }
})