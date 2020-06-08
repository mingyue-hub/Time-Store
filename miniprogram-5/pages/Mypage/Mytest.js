// pages/mytest/Mytest.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    trueName: "愣子",
    school: "华南师范大学",

    user: null,
    items: [{
      'image': "../resouce/timestore1.jpg",
      'title': '如何看待华南师大期末考试？',
      'context': '如何看待华南师大期末考试',
      'tag': "找伙伴",
      'type': "80%",
      "time": "2020-10-20",

    },
    {
      'image': "../resouce/timestore2.jpg",
      'title': '关于陶园新菜系',
      'context': '想找一个一起锻炼的小姐姐（本人女）跑步瑜伽都可',
      'tag': "锻炼",
      'type': "50%",
      "time": "2020-10-20",
    },
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心',
    })
    // if (app.globalData.token==null){
    //   wx.showToast({
    //     title: '尚未登录',
    //     icon: 'none',
    //     duration: 8000
    //   })
    //   wx.navigateTo({
    //     url: '../userLogin/userLogin',
    //   })
    // }
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
  tofeedback: function () {
    wx.navigateTo({
      url: '../Feedback/Feedback',
    })
  },
  tomine: function () {
    wx.navigateTo({
      url: '../Myinfo/Myinfo',
    })
  }
})