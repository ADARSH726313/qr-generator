var QRCode = require('qrcode')






QRCode.toString('kya bolti company',{type:'terminal'}, function (err, url) {
  console.log(url)
}) ;