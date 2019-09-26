// 控制扩展程序的js，比如点击插件开始按钮
let bg = chrome.extension.getBackgroundPage();
$(function () {
    $("#btn").click(function () {
        bg && bg.sendMessageToContentScript({cmd: 'msg', value: '发送返回顶部命令！'}, res => {
            console.log('来自content的回复：' + res);
        });
    });
});
