const text = document.querySelector("#affirmation")
const button = document.querySelector("#refresh")

text.textContent = "test success!"

const apiUrl = 'https://www.affirmations.dev';

function refresh() {
    var requestOptions = {
        method: 'POST',
        headers: {'Access-Control-Allow-Origin':'*'},
        mode: 'cors',
        credentials: 'include',
        redirect: 'follow',
      };
      
      fetch("https://www.affirmations.dev", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}

refresh()
refresh()
