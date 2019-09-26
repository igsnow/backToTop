chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd === 'msg') {
        if (!request.value) return;
        handleCopy();
        sendResponse('已返回顶部！');
    }
});

function handleCopy() {
    document.body.scrollTop = 0
}






