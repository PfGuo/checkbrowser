import {global} from './global'

(function () {
  var browser = window.navigator
  var Ajax = {
    get: function (url, fn) {
      var _result = {}
      var obj = new XMLHttpRequest()
      obj.open('GET', url, true)
      obj.onreadystatechange = function () {
        if (obj.readyState === 4 && obj.status === 200 || obj.status === 304) {
          _result = JSON.parse(obj.response)
          if (browser.userAgent.indexOf('Chrome') > 0 && browser.userAgent) {
            var strStart = browser.userAgent.indexOf('Chrome')
            var strStop = browser.userAgent.indexOf(' Safari')
            var _version = browser.userAgent.substring(strStart, strStop)
            if (_version !== _result.result.version) {
              console.log(_result.result.downloadUrl)
            } else {
              console.log(true)
            }
            console.log(global.AJAX_BASE_URL)
          }
        }
      }
      obj.send()
    }
  }

//   Ajax.get(`${global.AJAX_BASE_URL}/system/get_browser_version`)
  Ajax.get(`http://rap.ctsp.kedacom.com/mockjs/5/system/get_browser_version`)
})()
