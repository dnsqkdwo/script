const modal = document.getElementById("modal");
const btn = document.getElementById("modalBtn");
const close = document.getElementById("close");
const inner = document.getElementById("minner");

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function () {
    modal.style.display = "none";
}

modal.onclick = function () {
    modal.style.display = "none";
}

inner.onclick = function(event) {
    event.stopPropagation();
}
