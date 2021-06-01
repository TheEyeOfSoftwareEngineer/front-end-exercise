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

// Access-Control-Allow-Origin
// Access-Control-Allow-Methods
// Access-Control-Allow-Headers
// Access-Control-Allow-Credentials
// Access-Control-Allow-MAX-Age

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
axios.withCredentials = true;

{/* <script>
  var script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = 'http://www.domain2.com:8080/login?user=admin&callback=handleCallback'
  document.head.appendChild(script)
  function handleCallback(res) {
    ...
  }
</script> */}

