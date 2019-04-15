// ==UserScript==
// @name         百度文库文字提取器
// @namespace    *
// @version      1.0
// @description  打开百度文库的word页面，点击获取【文档内容】即可
// @author       KyleBing <kylebing@163.com>
// @match        https://wenku.baidu.com/view/*
// @grant        All
// ==/UserScript==


(function() {
    'use strict';

    var pclass = 'reader-word-layer';
    var pparts = [];
    var pdoc = '';

    function getDoc() {
        pdoc = '';
        pparts = document.querySelectorAll('.'+pclass);
        pparts.forEach(function (item) {
            pdoc += item.innerHTML
        });
        pdoc = pdoc.replace(/<.*?>/g,'').replace(/&nbsp;/g,' ');
        var win = window.open();
        win.document.write("<pre>"+pdoc+"</pre>");
    }

    var style = "  -webkit-user-select: none;\n" +
        "  -moz-user-select: none;\n" +
        "  -ms-user-select: none;\n" +
        "  user-select: none;\n" +
        "  -webkit-box-shadow: 1px 2px 10px #00000022;\n" +
        "  -moz-box-shadow: 1px 2px 10px #00000022;\n" +
        "  box-shadow: 1px 2px 10px #00000022;\n" +
        "  outline: none;\n" +
        "  padding: 0 30px;\n" +
        "  border-radius: 15px;\n" +
        "  z-index: 9999;\n" +
        "  position: fixed;\n" +
        "  top: 30px;\n" +
        "  left: 30px;\n" +
        "  border: 5px solid #78C941;\n" +
        "  line-height: 4rem;\n" +
        "  font-size: 2rem;\n" +
        "  font-weight: bold;\n" +
        "  text-align: center;\n" +
        "  background-color: #fff;";
    var href = "data:text/plain;charset=utf-8," + encodeURIComponent(pdoc);
    var downA = document.createElement('button');
    var downText = document.createTextNode('新标签页中打开文档');
    downA.setAttribute('onclick', 'getDoc()');
    downA.setAttribute('style', style);

    downA.appendChild(downText);
    document.body.appendChild(downA);

})();



