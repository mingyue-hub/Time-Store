// pages/Myinfo/Myinfo.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{
      uid: "xxxxx",
      nickname: "lv",
      school: "xxxxxx大学",
      faceimg: "../resouce/mystyle.png",
      credit: "100",
      property: "0",
      email: "xxxxxxx@163.com",
      phone: "xxxxxx",
      sex: "x"
    },
    isnull:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人信息',
    })
    if(app.globalData.userInfo!=null){
      this.setData({
        user:userInfo,
        isnull:false
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
    if(this.data.isnull){
      wx.showToast({
        title: '信息获取失败',
        icon:"none",
        duration:4000
      })
    }
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
  changeFace: function () {
    var user = app.globalData.userInfo;
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths[0]);
        var serverurl = app.serverUrl;
        wx.showLoading({
          title: '上传中...',
        })

        wx.uploadFile({
          url: serverurl + '/user/changeimg/'+user.uid,
          filePath: tempFilePaths[0],
          method: "POST",
          name: 'file',
          success(res) {
            wx.hideLoading();
            var data = JSON.parse(res.data);
            //do something
            console.log(data);
            if (data.status == 200) {
              wx.showToast({
                title: '上传成功',
                icon: 'sucees',
                duration: 2000

              })
              that.setData({
                avatarUrl: serverurl + data.data,
              })
              console.log(data.data);
            }
            else if (data.status1 == 500) {
              wx.showToast({
                title: data.msg,
              })
            }

          }
        })
      }
    })
  }
})