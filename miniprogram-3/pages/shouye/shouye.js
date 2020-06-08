// pages/shouye/shouye.js
Page({

  data: {
    items: [{
      'image': "https://img.51miz.com/Element/00/71/25/04/6c448236_E712504_a41b4297.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/63",
      'title': '一起来散步聊聊天',
      'context': '最近疫情宅在家心情不大好，想找个同专业的同学聊聊天',
      'tag': "找伙伴",
      'type': "80%",
      "time":"2020-10-20",

    },
    {
      'image': "https://img.51miz.com/Element/00/71/25/04/6c448236_E712504_a41b4297.jpg!/quality/90/unsharp/true/compress/true/format/jpg/fh/630",
      'title': '一起锻炼嘛？',
      'context': '想找一个一起锻炼的小姐姐（本人女）跑步瑜伽都可',
      'tag': "锻炼",
      'type': "50%",
      "time": "2020-10-20",
    }
    

    ]
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

  },
  toplay1:function(){
    wx.navigateTo({
      url: '../playground1/playground1',
    })
  },
  toplay2: function () {
    wx.navigateTo({
      url: '../playground2/playground2',
    })
  }
})