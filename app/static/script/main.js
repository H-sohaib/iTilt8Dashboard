let reqURL = `${window.location.href}`;
let temValue = document.querySelector(".tem > h1")
console.log(temValue);
let denValue = document.querySelector(".den > h1");
console.log(denValue);
let interval = 1000;


setInterval(() => {
  // start fitch 
  fetch(reqURL, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify({}),
    cache: "no-cache",
    headers: new Headers({
      "content-type": "application/json"
    }),
  }).then((response) => {
    response.json().then((data) => {
      // 
      temValue.innerHTML = data.tem;
      denValue.innerHTML = data.den;
    })

  }) // End Reponse 
  // end fitch

}, interval);