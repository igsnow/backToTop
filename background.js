// 常驻页面，存放一些全局的通用方法
window.data = [];

// 获取当前选项卡ID
function getCurrentTabId(callback) {
    if (!window.data.length) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            if (callback) callback(tabs.length ? tabs[0].id : null);
        });
    }
}

// 给content.js发送消息
function sendMessageToContentScript(message, callback) {
    getCurrentTabId((tabId) => {
        window.data.push(tabId)
        console.log(window.data);
        chrome.tabs.sendMessage(window.data && window.data[0], message, function (response) {
            if (callback) callback(response);
        });
        clearData()
    });
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    sendResponse('OK!');
});

// 清空data
function clearData() {
    window.data = []
}















