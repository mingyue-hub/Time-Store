var that;
var app = getApp()
Page({
  data: {
    content: '',
    content_html: '',
    placeholder: '开始输入...',
    isReadOnly: false,
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'RichText组件'
      }]
    }]
  },
  onLoad() {
    that = this;
  },
  onEditorReady() {
    // 输入~编辑框
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context;
      console.log("初始化成功：" + wx.getStorageSync("content"))
      if (wx.getStorageSync("content")) { // 设置~历史值
        that.editorCtx.insertText(wx.getStorageSync("content")) // 注意：插入的是对象
      }
    }).exec()

  },
  // 获取内容
  onContentChange(e) {
    that.setData({
      content: e.detail,
    })
    wx.setStorageSync("content", e.detail)
  },
  // 显示结果
  clickShowText(e) {
    that.setData({
      nodes: that.data.content.html,
      content_html: that.data.content.html
    })
  },
  time_time:function(){
    app.globalData.m_to_m=false;
    wx.navigateTo({
      url: '../editor/editor?ttot=0',
    })
  },
  time_money:function(){
    app.globalData.m_to_m = true;
    wx.navigateTo({
      url: '../editor/editor?ttot=1',
    })
  }
})