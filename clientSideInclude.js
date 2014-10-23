﻿function clientSideInclude(url,callFn) {
    var req = false;

    // Safari, Firefox, 及其他非微软浏览器
    if (window.XMLHttpRequest) {
        try {
            req = new XMLHttpRequest();
        } catch(e) {
            req = false;
        }
    } else if (window.ActiveXObject) {

        // For Internet Explorer on Windows
        try {
            req = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                req = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                req = false;
            }
        }
    }
    if (req) {
        // 同步请求，等待收到全部内容
        req.open('GET', url, false);
        req.send(null);
        callFn(req.responseText);
    } else {
        alert("对不起，你的浏览器不支持" + "XMLHTTPRequest 对象。这个网页的显示要求" + "Internet Explorer 5 以上版本, " + "或 Firefox 或 Safari 浏览器，也可能会有其他可兼容的浏览器存在。");
    }
}