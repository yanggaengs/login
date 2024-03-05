var loginButton = document.querySelector("#loginButton");
console.log(loginButton);

loginButton.addEventListener("click", function () {
  var idInput = document.querySelector("#userId");
  var pwInput = document.querySelector("#userPw");

  if (idInput.value.length === 0 || pwInput.value.length === 0) {
    console.log("ID 또는 PW가 비었습니다. 입력해주세요.");
    return;
  }

  if (idInput.value.length > 12) {
    console.log("id값이 12보다 큽니다!");
    return;
  }

  var regex = /^[0-9a-zA-Z\_]+$/;

  if (!regex.test(idInput.value)) {
    console.log("특수문자가 들어갔습니다!");
    return;
  }

  if (pwInput.value.length > 20) {
    console.log("pw값이 20보다 큽니다!");
    return;
  }

  alert("로그인이 되었습니다.");
});
