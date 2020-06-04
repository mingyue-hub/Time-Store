// pages/playground1/playground1-1/playground1-1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    senderinfo:{
      image:'../../resouce/timestore3.jpg',
      name:'雨先生',
      sex:'男'
    },
    information:{
      'title': '一起来散步聊聊天',
      'context': '最近疫情宅在家心情不大好，想找个同专业的同学聊聊天',
      'tag': "找伙伴",
      'sex':'男',
      'time':'6月6日',
      'sendtime':'2020年6月1日'
    },
  },
  tochat:function(){
    wx.navigateTo({
      url: '../../playground1/plg-chat/plg-chat',
    })
  },
  accept:function(){
    wx.showToast({
      title: '接单成功',
    })
  },
  undo:function(){
    wx.showToast({
      title: '撤单成功',
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})