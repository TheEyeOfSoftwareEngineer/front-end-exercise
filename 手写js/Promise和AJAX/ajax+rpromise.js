// 用ajax包promise

function getJson(url) {
  const promise = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
      if(xhr.readystate !== 4) return;
      if(xhr.statusCode === 200 || xhr.statusCode === 304) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    }

    xhr.onerror = function() {
      reject(new Error(this.statusText));
    }
    xhr.responseType = "json";
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send(null);
  })
  return promise;
}