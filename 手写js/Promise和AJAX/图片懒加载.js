// 图片懒加载

let imgList = [...document.querySelectorAll("img")];
let length = imgList.length;

const imgLazyload = function() {
  let count = 0;
  return function() {
    let deleteIndexList = [];
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect();
      if(rect.top < window.innnerHeight) {
        img.src = img.dataset.src;
        deleteIndexList.push(index);
        count ++;
        if(count === length) {
          document.removeEventListener("scroll", imgLazyload);
        }
      }
    })
    imgList = img.filter((img, index) => {
      !deleteIndexList.includes(index);
    })
  }
}

// 加上防抖
document.addEventListener("scroll", imgLazyload);