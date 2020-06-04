// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: '../resouce/user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    isMe:true
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
    this.setData({
      avatarUrl:app.globalData.userInfo.faceimage,
      userInfo: app.globalData.userInfo,
    })
    console.log(this.data.userInfo);
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
  logout:function(){
    var user = app.globalData.userInfo;
    console.log(user);
    var serverurl = app.serverUrl;
    wx.request({
      url: serverurl + '/logout?userId='+user.id,
      method: "POST",
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res.data);
        var status = res.data.status;
        if (status == 200) {
          wx.showToast({
            title: '注销成功',
            icon: 'none',
            duration: 3000
          }),
            app.globalData.userInfo = null;
          
        } 
        wx.navigateTo({
          url: '/pages/userLogin/userLogin'
        })
      }
    })
  },
  changeFace:function(){
    var user = app.globalData.userInfo;
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: [ 'compressed'],
      sourceType: ['album'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        console.log(tempFilePaths[0]);
        var serverurl = app.serverUrl;
        wx.showLoading({
          title: '上传中...',
        })
        
        wx.uploadFile({
          url: serverurl + '/user/uploaduimg/'+1, 
          filePath: tempFilePaths[0],
          method: "POST",
          name: 'file',
          success(res) {
            wx.hideLoading();
            var data = JSON.parse(res.data);
            //do something
            console.log(data);
            if(data.status==200){
              wx.showToast({
                title: '上传成功',
                icon: 'sucees',
                duration: 2000
                
              })
              that.setData({
                avatarUrl: serverurl +data.data,
              })
              console.log(data.data);
            }
            else if(data.status1==500){
              wx.showToast({
                title: data.msg,
              })
            }
            
         }
       })
      }
    })
  },
  uploadfile:function(){
    var serverurl = app.serverUrl;
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFiles[0];
        console.log("1",tempFilePaths['path']);
        console.log("2",tempFilePaths['name'])
        console.log(serverurl);
        wx.uploadFile({
          url: serverurl +'/org/uploadconfile/'+1,
          filePath: tempFilePaths['path'],
          name: 'file',
          data:{
            "filename": tempFilePaths['name'],
          },
          success(res){
            console.log(res);
          }
        })
      }
    })
  }

})