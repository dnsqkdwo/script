// 요소 가져오기
const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

// 엔터키로 추가
todoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && todoInput.value.trim() !== '') {
        addTodo();
    }
});

// 버튼 클릭으로 추가
addBtn.addEventListener('click', function() {
    if (todoInput.value.trim() !== '') {
        addTodo();
    }
});

// 할 일 추가 함수
function addTodo() {
    const li = document.createElement('li'); // 새로운 li 만들기
    const span = document.createElement('span'); // 할 일 텍스트 넣을 span
    const deleteBtn = document.createElement('button'); // 삭제 버튼

    span.textContent = todoInput.value; // 입력한 값을 span에 넣기
    deleteBtn.textContent = '삭제'; // 버튼 텍스트
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(span); // li에 span 추가
    li.appendChild(deleteBtn); // li에 버튼 추가

    todoList.appendChild(li); // ul에 li 추가

    todoInput.value = ''; // 입력창 비우기
}
