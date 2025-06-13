const enter = document.getElementById("enter");
const enter2 = document.getElementById("enter2");

if (enter) {
    enter.addEventListener('click', function() {
        window.location.href = '2enter.html';
        alert('두번째 창으로 이동합니다.');
    });
} else {
    enter2.onclick = function() {
        window.location.href = 'enter.html';
        alert('첫번째 창으로 이동합니다.');
    };
}

