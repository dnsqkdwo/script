const openBtn = document.getElementById("openBtn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");
const lgn = document.getElementById("lgn");
const login = document.querySelector('.login');

openBtn.onclick = function() {
    modal.style.display = "block";
}

lgn.onclick = function() {
    modal.style.display = "none";
    alert("로그인이 완료되었습니다!");
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

modal.onclick = function() {
    modal.style.display = "none"
}

login.onclick = function(event) {
    event.stopPropagation();
}