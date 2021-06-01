var numberToChinese = function() {
  var chnNumChar = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"],
      chnUnitSection = ["", "万", "亿", "万亿", "亿亿"],
      chnUnitChar = ["", "十", "百", "千"];

  function sectionToChinese(section) {
      var strIns = '',
          chnStr = '',
          unitPos = 0,
          zero = true,
          v;
      while (section > 0) {
          v = section % 10;
          if (v === 0) {
              if (!zero) {
                  zero = true;
                  chnStr = chnNumChar[v] + chnStr;
              }
          } else {
              zero = false;
              strIns = chnNumChar[v];
              strIns += chnUnitChar[unitPos];
              chnStr = strIns + chnStr;
          }
          unitPos++;
          section = Math.floor(section / 10);
      }
      return chnStr;
  }

  return function (num) {
      var unitPos = 0,
          strIns = '',
          chnStr = '',
          needZero = false,
          section;

      num = parseInt(num);

      if (num === 0) {
          return chnNumChar[0];
      }
      while (num > 0) {
          section = num % 10000;
          if (needZero) {
              chnStr = chnNumChar[0] + chnStr;
          }
          strIns = sectionToChinese(section);
          strIns += (section !== 0) ? chnUnitSection[unitPos] : chnUnitSection[0];
          chnStr = strIns + chnStr;
          needZero = (section < 1000) && (section > 0);
          num = Math.floor(num / 10000);
          unitPos++;
      }
      return chnStr;
  }
}();
//console.log(numberToChinese(201000));;

function SectionToChinese(section){
  var chnNumChar = ["零","一","二","三","四","五","六","七","八","九"];
  var chnUnitChar = ["","十","百","千","万","亿","万亿","亿亿"];
  var strIns = '', chnStr = '';
  var unitPos = 0;
  var zero = true;
  // 1234
  // 2010
  while(section > 0){
      var v = section % 10;
      if(v === 0){
          if(!zero) {
            zero = true;
            chnStr = chnNumChar[v] + chnStr;
            console.log("v===0" + chnStr);
          }
      }else{
            zero = false;
            strIns = chnNumChar[v];
            strIns += chnUnitChar[unitPos];            
            chnStr = strIns + chnStr;            
      }
      unitPos++;
      section = Math.floor(section / 10);
   }
   return chnStr;
}
console.log(SectionToChinese(2010));

function toChinese(num) {
  let chs = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
  let units = ["", "十", "百", "千", "万", "十万", "千万", "亿", "十亿", "千亿"];
  let temp = "", res = "";
  let unitPos = 0;
  let needZero = true;
  while(num > 0) {
    let v = num % 10;
    if(v === 0) {
      if(!needZero) {
        needZero = true;
        res = chs[v] + res;
      } 
    } else {
      needZero = false;
      temp = units[unitPos];
      temp = chs[v] + temp;
      res = temp + res;  
    }
    unitPos ++;
    num = Math.floor(num/10);
  }
  return res;
}

console.log(toChinese(2010))