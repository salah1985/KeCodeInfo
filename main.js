let result = document.getElementById("result");
let key = document.getElementById("key");
let keyCode = document.getElementById("keyCode");
let code = document.getElementById("code");

window.addEventListener('keydown', function (e) {
    key.innerHTML = e.key;
    keyCode.innerHTML = e.keyCode;
    code.innerHTML = e.code;
    result.innerHTML = e.keyCode;
})