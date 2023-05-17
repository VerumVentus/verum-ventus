export default function reader(textFile) {
  'use strict';
  var rawFile = new XMLHttpRequest();
  var allText = '';
  rawFile.open('Get', textFile, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (
        rawFile.status === 200 &&
        !rawFile.responseURL.includes('undefined')
      ) {
        allText = rawFile.responseText;
      }
    }
  };
  rawFile.send(null);
  return allText;
}
