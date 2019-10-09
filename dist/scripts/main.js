(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

/**
 * Dynamit Code Day Punk API
 */
// Punk API endpoint
var API_ENDPOINT = 'https://api.punkapi.com/v2/beers';
var MAIN = document.getElementById('main');
var BUTTON = document.getElementById('load-btn');
var BEERS = document.getElementById('beers');
var LOADING = document.getElementById('loading');

function buildDOM(array) {
  return array.map(function (item) {
    return "\n\t\t\t<div class=\"item\">\n\t\t\t\t<div class=\"image\">\n\t\t\t\t\t<img src=\"".concat(item.image_url, "\" alt=\"").concat(item.name, "\" height=\"145px\" width=\"145px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"name\">").concat(item.name, "</div>\n\t\t\t\t<div class=\"abv\">").concat(item.abv, "%</div>\n\t\t\t</div>\n\t\t");
  });
}

function applyDOM(domArray) {
  LOADING.classList.add('hidden');
  BEERS.innerHTML = domArray.join('\n');
  BEERS.classList.remove('hidden');
}

function processBeers(json) {
  if (json && json.length) {
    MAIN.classList.remove('vertical-center');
    var dom = buildDOM(json);
    applyDOM(dom);
  } else {
    MAIN.classList.add('vertical-center');
  }
}

function fetchBeers() {
  BUTTON.classList.add('hidden');
  LOADING.classList.remove('hidden');
  var req = fetch("".concat(API_ENDPOINT, "?per_page=80"), {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrer: 'no-referrer'
  });
  req.then(function (res) {
    return res.json();
  }).then(processBeers)["catch"](function (err) {
    console.error(err);
    BUTTON.classList.remove('hidden');
    LOADING.classList.add('hidden');
    BEERS.classList.add('hidden');
  });
}

BUTTON.addEventListener('click', fetchBeers);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXNzZXRzL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7OztBQUlBO0FBQ0EsSUFBTSxZQUFZLEdBQUcsa0NBQXJCO0FBQ0EsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFDQSxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixPQUF4QixDQUFkO0FBQ0EsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7O0FBRUEsU0FBUyxRQUFULENBQWtCLEtBQWxCLEVBQXlCO0FBQ3hCLFNBQU8sS0FBSyxDQUFDLEdBQU4sQ0FBVSxVQUFDLElBQUQ7QUFBQSx1R0FHRCxJQUFJLENBQUMsU0FISixzQkFHdUIsSUFBSSxDQUFDLElBSDVCLCtGQUtNLElBQUksQ0FBQyxJQUxYLGdEQU1LLElBQUksQ0FBQyxHQU5WO0FBQUEsR0FBVixDQUFQO0FBU0E7O0FBRUQsU0FBUyxRQUFULENBQWtCLFFBQWxCLEVBQTRCO0FBQzNCLEVBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFFQSxFQUFBLEtBQUssQ0FBQyxTQUFOLEdBQWtCLFFBQVEsQ0FBQyxJQUFULENBQWMsSUFBZCxDQUFsQjtBQUNBLEVBQUEsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsUUFBdkI7QUFDQTs7QUFFRCxTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEI7QUFDM0IsTUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQWpCLEVBQXlCO0FBQ3hCLElBQUEsSUFBSSxDQUFDLFNBQUwsQ0FBZSxNQUFmLENBQXNCLGlCQUF0QjtBQUVBLFFBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxJQUFELENBQXBCO0FBRUEsSUFBQSxRQUFRLENBQUMsR0FBRCxDQUFSO0FBQ0EsR0FORCxNQU1PO0FBQ04sSUFBQSxJQUFJLENBQUMsU0FBTCxDQUFlLEdBQWYsQ0FBbUIsaUJBQW5CO0FBQ0E7QUFDRDs7QUFFRCxTQUFTLFVBQVQsR0FBc0I7QUFDckIsRUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixHQUFqQixDQUFxQixRQUFyQjtBQUNBLEVBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsTUFBbEIsQ0FBeUIsUUFBekI7QUFFQSxNQUFNLEdBQUcsR0FBRyxLQUFLLFdBQUksWUFBSixtQkFBZ0M7QUFDaEQsSUFBQSxNQUFNLEVBQUUsS0FEd0M7QUFFaEQsSUFBQSxJQUFJLEVBQUUsTUFGMEM7QUFHaEQsSUFBQSxPQUFPLEVBQUU7QUFDUixzQkFBZ0I7QUFEUixLQUh1QztBQU1oRCxJQUFBLFFBQVEsRUFBRSxRQU5zQztBQU9oRCxJQUFBLFFBQVEsRUFBRTtBQVBzQyxHQUFoQyxDQUFqQjtBQVVBLEVBQUEsR0FBRyxDQUNELElBREYsQ0FDTyxVQUFDLEdBQUQ7QUFBQSxXQUFTLEdBQUcsQ0FBQyxJQUFKLEVBQVQ7QUFBQSxHQURQLEVBRUUsSUFGRixDQUVPLFlBRlAsV0FHUSxVQUFDLEdBQUQsRUFBUztBQUNmLElBQUEsT0FBTyxDQUFDLEtBQVIsQ0FBYyxHQUFkO0FBRUEsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixNQUFqQixDQUF3QixRQUF4QjtBQUNBLElBQUEsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDQSxJQUFBLEtBQUssQ0FBQyxTQUFOLENBQWdCLEdBQWhCLENBQW9CLFFBQXBCO0FBQ0EsR0FURjtBQVVBOztBQUVELE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFqQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qKlxuICogRHluYW1pdCBDb2RlIERheSBQdW5rIEFQSVxuICovXG5cbi8vIFB1bmsgQVBJIGVuZHBvaW50XG5jb25zdCBBUElfRU5EUE9JTlQgPSAnaHR0cHM6Ly9hcGkucHVua2FwaS5jb20vdjIvYmVlcnMnO1xuY29uc3QgTUFJTiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5jb25zdCBCVVRUT04gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZC1idG4nKTtcbmNvbnN0IEJFRVJTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JlZXJzJyk7XG5jb25zdCBMT0FESU5HID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRpbmcnKTtcblxuZnVuY3Rpb24gYnVpbGRET00oYXJyYXkpIHtcblx0cmV0dXJuIGFycmF5Lm1hcCgoaXRlbSkgPT4gYFxuXHRcdFx0PGRpdiBjbGFzcz1cIml0ZW1cIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImltYWdlXCI+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIke2l0ZW0uaW1hZ2VfdXJsfVwiIGFsdD1cIiR7aXRlbS5uYW1lfVwiIGhlaWdodD1cIjE0NXB4XCIgd2lkdGg9XCIxNDVweFwiPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cIm5hbWVcIj4ke2l0ZW0ubmFtZX08L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImFidlwiPiR7aXRlbS5hYnZ9JTwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5RE9NKGRvbUFycmF5KSB7XG5cdExPQURJTkcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cblx0QkVFUlMuaW5uZXJIVE1MID0gZG9tQXJyYXkuam9pbignXFxuJyk7XG5cdEJFRVJTLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiBwcm9jZXNzQmVlcnMoanNvbikge1xuXHRpZiAoanNvbiAmJiBqc29uLmxlbmd0aCkge1xuXHRcdE1BSU4uY2xhc3NMaXN0LnJlbW92ZSgndmVydGljYWwtY2VudGVyJyk7XG5cblx0XHRjb25zdCBkb20gPSBidWlsZERPTShqc29uKTtcblxuXHRcdGFwcGx5RE9NKGRvbSk7XG5cdH0gZWxzZSB7XG5cdFx0TUFJTi5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbC1jZW50ZXInKTtcblx0fVxufVxuXG5mdW5jdGlvbiBmZXRjaEJlZXJzKCkge1xuXHRCVVRUT04uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdExPQURJTkcuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cblx0Y29uc3QgcmVxID0gZmV0Y2goYCR7QVBJX0VORFBPSU5UfT9wZXJfcGFnZT04MGAsIHtcblx0XHRtZXRob2Q6ICdHRVQnLFxuXHRcdG1vZGU6ICdjb3JzJyxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdH0sXG5cdFx0cmVkaXJlY3Q6ICdmb2xsb3cnLFxuXHRcdHJlZmVycmVyOiAnbm8tcmVmZXJyZXInLFxuXHR9KTtcblxuXHRyZXFcblx0XHQudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXHRcdC50aGVuKHByb2Nlc3NCZWVycylcblx0XHQuY2F0Y2goKGVycikgPT4ge1xuXHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXG5cdFx0XHRCVVRUT04uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG5cdFx0XHRMT0FESU5HLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXHRcdFx0QkVFUlMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cdFx0fSk7XG59XG5cbkJVVFRPTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZldGNoQmVlcnMpO1xuIl19
