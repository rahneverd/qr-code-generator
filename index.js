const qrImage = require('qr-image');
 
let q1 = function(textString, type, name) {
  var qr_svg = qrImage.image(textString, { type: type });
  qr_svg.pipe(require('fs').createWriteStream(name+'.'+type));

}

q1('Welcome', 'png', 'welcome')