// ==UserScript==
// @name         Facebook Spam
// @namespace    http://pegabyte.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @include      https://www.facebook.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  "use strict";
  document.addEventListener('DOMContentLoaded', () => setTimeout(() => {
    var followBtns;
    var addEveryMs = 400;
    function getNextPage() {
      followBtns = [].slice.call(document.querySelectorAll('.UFILikeLink'), 1);
      followBtns.map((button, index) => setTimeout(() => button.click(), index * 1500) + 200);
      setTimeout(() => {
        document.body.scrollTop = document.body.scrollHeight;
        getNextPage();
      }, followBtns.length * 1500 + 200);
    }
    getNextPage();
  }, 2500), false);
})();