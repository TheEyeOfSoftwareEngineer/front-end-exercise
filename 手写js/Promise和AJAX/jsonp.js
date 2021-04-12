// jsonp

const jsonp = ({url, params, callback}) => {
  const generateUrl = () => {
    let dataSrc = "";
    for(let key in params) {
      if(params.hasOwnProperty(key)) {
        dataSrc += `${key}=${params[key]}`;
      }
    }
    dataSrc += `callback=${callback}`;
    return `${url}?${dataSrc}`;    
  }

  return new Promise((resolve, reject) => {
    const scriptElement = document.createElement('script');
    scriptElement.src = generateUrl();
    scriptElement.type = "text/javascript";
    document.body.appendChild(scriptElement);
    window[callback] = data => {
      resolve(data);
      document.removeChild(scriptElement);
    }
  })
}