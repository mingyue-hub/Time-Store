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
      'title': '一起来散步聊聊天',
      'context': '最近疫情宅在家心情不大好，想找个同专业的同学聊聊天',
      'tag': "找伙伴",
      'type':"80%",
  

    },
    {
      'image': "../resouce/timestore2.jpg",
      'title': '一起锻炼嘛？',
      'context': '想找一个一起锻炼的小姐姐（本人女）跑步瑜伽都可',
      'tag': "锻炼",
      'type': "50%",

    },
    {
      'image': "../resouce/timestore3.jpg",
      'title': '一起图书馆学习？',
      'context': '去图书馆学习总是情不自禁看手机，有一样烦恼的小伙伴嘛？我们互相监督？',
      'tag': '学习',
      'type': "99%",
    }
      ,
      {
        'image': "../resouce/timestore3.jpg",
        'title': '一起云看电影嘛？',
        'context': '疫情在家好无聊，想找热爱漫威的朋友一起回顾漫威电影',
        'tag': '取快递',
        'type': "99%",
      }
      ,
      {
        'image': "../resouce/timestore2.jpg",
        'title': '图书馆约吗？',
        'context': '想找一个能监督我一起学习的小姐姐（本人女）',
        'tag': '约学习',
        'type': "50%",
      }

    ]
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
        title: '时间换时间',
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