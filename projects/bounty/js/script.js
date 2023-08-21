/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/


window.addEventListener('DOMContentLoaded', () => {
  const name = document.querySelectorAll('.rating__input-name'),
    score = document.querySelectorAll('.rating__input');
  const data = new Promise((resolve, reject) => {
    fetch('./db.json').then(response => response.json()).then(result => resolve(result)).catch(err => console.log(err));
  });
  data.then(res => {
    let readyData = sortData(res.data);
    recordValue(readyData);
    name.forEach(item => {
      item.addEventListener('focus', e => {
        const oldValue = e.target.textContent;
        e.target.addEventListener('blur', event => {
          if (!(oldValue === event.target.textContent.toUpperCase())) {
            loop1: for (let i = 0; i < readyData.length; i++) {
              if (readyData[i].includes(event.target.textContent.toUpperCase())) {
                break loop1;
              } else if (readyData[i].includes(oldValue)) {
                readyData[i][0] = event.target.textContent.toUpperCase();
                sendData(readyData);
                break loop1;
              }
            }
          }
        });
      });
    });
    score.forEach(item => {
      item.addEventListener('focus', e => {
        const oldValue = e.target.textContent;
        e.target.addEventListener('blur', event => {
          if (event.target.textContent.search(/\D/) !== -1) {
            event.target.textContent = 0;
          }
          if (!(oldValue === event.target.textContent)) {
            for (let i = 0; i < readyData.length; i++) {
              if (readyData[i].includes(e.target.parentElement.previousSibling.firstChild.textContent)) {
                readyData[i][1] = event.target.textContent;
                readyData = sortData(readyData);
                recordValue(readyData);
                sendData(readyData);
              }
            }
          }
        });
      });
    });
  });
  function sortData(dataArr) {
    let sortArr = [];
    while (dataArr.length !== 0) {
      let max = dataArr[0];
      dataArr.forEach(item => {
        if (+item[1] > +max[1]) {
          max = item;
        }
      });
      sortArr.push(max);
      dataArr.splice(dataArr.indexOf(max), 1);
    }
    return sortArr;
  }
  function recordValue(mainData) {
    mainData.forEach((item, i) => {
      name[i].textContent = item[0];
      score[i].textContent = item[1];
    });
  }
  async function sendData(info) {
    const dataObj = {
      data: info
    };
    const res = await fetch('php/update.php', {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(dataObj)
    }).then(res => res.text()).then(resp => console.log(resp)).catch(err => console.log(err));
  }
});
/******/ })()
;
//# sourceMappingURL=script.js.map