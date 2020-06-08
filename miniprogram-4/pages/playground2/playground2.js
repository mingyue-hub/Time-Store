// pages/playground1/playground1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: 0,
    currentTab: 0,
    currentSelect: 1,
    items: [{
      'image': "../resouce/timestore1.jpg",
      'title': '互联网+寻找队友',
      'context': '诚意寻找互联网+创新创业比赛队友',
      'tag': "找队友",
      'type': "80%",
      "bit": 30

    },
    {
      'image': "../resouce/timestore2.jpg",
      'title': '来一个学霸',
      'context': '有计机的朋友嘛？帮忙解一道算法题！加急',
      'tag': '约学习',
      'type': "99%",
      "bit": 10
    },
    {
      'image': "../resouce/timestore3.jpg",
      'title': '帮忙取个快递',
      'context': '能来个热心的朋友帮我取快递到东十九楼下放到大爷那吗？',
      'tag': '取快递',
      'type': "90%",
      "bit": 30
    }
      ,
    {
      'image': "../resouce/timestore3.jpg",
      'title': '帮忙打个饭',
      'context': '回东十九的朋友帮忙从陶园打个饭送到东十九3xx吗？',
      'tag': '取快递',
      'type': "99%",
      "bit": 30
    }
      ,
    {
      'image': "../resouce/timestore2.jpg",
      'title': '图书馆约吗？',
      'context': '想找一个能监督我一起学习的小姐姐（本人女）',
      'tag': '约学习',
      'type': "50%",
      "bit": 30
    }

    ]
  },

  toinformation:function(){
    wx.navigateTo({
      url: '../playground1/playground1-1/playground1-1',
    })
  },
  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }
    }),
      wx.setNavigationBarTitle({
        title: '时间换金钱',
      })

  },

  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})