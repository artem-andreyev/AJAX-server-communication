const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
    const request = new XMLHttpRequest();

    request.open("GET", "js/current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    request.addEventListener("load", () => { // readystatechange
        if (request.status === 200) { // request.readyState === 4 &&
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        }
        else {
            inputUsd.value = "Что-то пошло не так";
        }
    });

    // status
    // statusText
    // response
    // readyState

});
