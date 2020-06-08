// pages/feedback/feedback.js
const app = getApp()
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid:"",
    password:"",
    user:[],
    time:null,
  },
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
  },
 //注册
  regist:function(){
    var serverurl = app.serverUrl;
    var user={
      "uid":"20182132023",
      "password":"123456",
      "nickname":"lincx_py",
      "school":"华南师范大学",
      "sex":1,
      "phone":"13691927212",
      "email":"495572661@qq.com",
      "credit":100
    }
    wx.request({
      url: serverurl+"/user/regist",
      method:"post",
      data:user,
      header: {
        'content-type': 'application/json'//默认值
      },
      success:function(res){
        console.log(res)
      }
    })
  },
  //登录
  uidinput:function(e){
    this.setData({
      uid:e.detail.value
    })
  },
  passinput:function(e){
    this.setData({
      password:e.detail.value
    })
  },
  login:function(){
    var severurl= app.serverUrl;
    wx.request({
      url: severurl+'/user/login',
      method:"post",
      data:{
        "uid":this.data.uid,
        "password":this.data.password
      },
      header:{
        "content-type":"application/json"
      },
      success:function(res){
        console.log(res)
        if(res.statusCode==200){
          app.globalData.userInfo = res.data.data;
          app.globalData.token = res.data.token;
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'warn',
            duration: 2000
          })
        }
      }
    })
  },
  getallusers:function(){
    var severurl = app.serverUrl;
    var self=this;
    wx.request({
      url: severurl+'/user/getallusers',
      method:"get",
      success:function(res){
        console.log(res)
        if (res.statusCode == 200){
          self.setData({
            user:res.data.data
          })
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        }
      }
    })
  },
  updateuser:function(){
    var severurl = app.serverUrl;
    var user = {
      "uid": "20182132023",
      "password": "12345678",
      "nickname": "lincx_py",
      "school": "华南师范大学",
      "sex": 2,
      "phone": "13691927212",
      "email": "495572661@qq.com",
      "credit": 98
    }
    wx.request({
      url: severurl + "/user/updateuser",
      method: "put",
      data: user,
      header: {
        'content-type': 'application/json'//默认值
      },
      success: function (res) {
        console.log(res)
        if(res.statusCode==200){
          app.globalData.userInfo = res.data.data;
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        }
        else{
          wx.showToast({
            title: res.data.msg,
            icon: 'warn',
            duration: 2000
          })
        }
      }
  })
  },
  deleteuser:function(){
    var severurl = app.serverUrl;
    wx.request({
      url: severurl+'/user/deleteuser/'+20182132023,
      method:"delete",
      success:function(res){
        if(res.statusCode==200){
          wx.showToast({
            title: res.data.msg,
            icon: "success",
            duration: 2000
          })
        }
        else{
          wx.showToast({
            title: res.data.msg,
            icon: "warn",
            duration: 2000
          })
        }
        
      }
    })
  },
  getuserbyid:function(){
    var severurl = app.serverUrl;
    wx.request({
      url: severurl+'/user/getuser/'+20182132023,
      method:"get",
      success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          wx.showToast({
            title: res.data.msg,
            icon: "success",
            duration: 2000
          })
          
        }
        else {
          wx.showToast({
            title: res.data.msg,
            icon: "warn",
            duration: 2000
          })
        }
      }
    })
  },
  postinssue:function(){
    var severurl = app.serverUrl;
    var time = util.formatTime(new Date());
    var user = app.globalData.userInfo;
    console.log(user)
    var info={
      "uid":app.globalData.userInfo.uid,
      "rtitle":"招募队友",
      "info":"招募一名计算机编程比较厉害的队友，参加2020微信小程序设计大赛，有意者私聊我哦",
      "tag":"计算机",
      "status":"1",
      "rdate":time,
      "reid":"",
    }
    console.log(info);
    wx.request({
      url: severurl+'/info/inssue',
      method:"post",
      data:info,
      success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        }else{
          wx.showToast({
            title: res.data.msg,
            icon: 'warn',
            duration: 2000
          })
        }
      }      
    })
  },
  aditinssue:function(){
    var severurl = app.serverUrl;
    var time = util.formatTime(new Date());
    var user = app.globalData.userInfo;
    console.log(user)
    var info = {
      "rid":1,
      "uid": "20182132023",
      "rtitle": "招募队友",
      "info": "招募一名计算机编程比较厉害的队友，参加2020微信小程序设计大赛，有意者私聊我哦",
      "tag": "计算机",
      "status": "2",
      "rdate": time,
      "reid": "",
    }
    wx.request({
      url: severurl + '/info/aditinfo',
      method: "put",
      data: info,
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        console.log(res)
        if (res.statusCode == 200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'warn',
            duration: 2000
          })
        }
      }
    })
  },
  deleteinfo:function(){
    var severurl = app.serverUrl;
    wx.request({
      url: severurl +'/info/delinfo/'+1,
      method:"delete",
      success:function(res){
        if (res.statusCode == 200) {
          wx.showToast({
            title: res.data.msg,
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'warn',
            duration: 2000
          })
        } 
      }
    }) 
  }
})