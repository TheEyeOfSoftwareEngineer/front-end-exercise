// promise 异步加载

let imgAsync = (url) => {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = url;
    img.onload = () => {
      resolve(img);
    }
    img.onerror = (error) => {
      reject(error);
    }
  })
}

imgAsync(url).then(() => {
  console.log("加载成功");
}).catch((err) => {
  console.log("加载失败: " + err);
})