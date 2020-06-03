// pages/Feedback/Feedback.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 0 ,
    information: null //反馈意见的内容
    
  },

  click:function(){
    wx.showToast({
      title: "提交成功",
      icon: 'success',
      duration: 1000
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '意见反馈',
      })
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
  getDataBindTap: function(e){
    var infor = e.detail.value;
    var value = e.detail.value.length;
    var that = this;
    that.setData({
      num:value ,
      information: infor
    })
    
  },
  addimage:function(){
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths

        that.setData({
          imgAddress:tempFilePaths[0]
        })

      }
    })
  }
})