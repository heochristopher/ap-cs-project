var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://random-d.uk/api/v2/random", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));