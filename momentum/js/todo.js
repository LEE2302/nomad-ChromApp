const toDoForm = document.querySelector("#todo_form");
const toDoForm_input = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo_list");

let localStorage_json = [];

//1. 할일 목록 인풋창
function handleToDoSubmit(event) {
  //기본 동작 정지
  event.preventDefault();
  //인풋의 밸류 값을 변수에 저장
  const inputValue = toDoForm_input.value;
  //저장후 인풋창 빈문자열로 초기화
  toDoForm_input.value = "";
  //인풋밸류와 아이디 설정
  let inputValue_id = {
    text: inputValue,
    id: Date.now(),
  };
  //로컨스토리지_제이슨 변수에 인풋값을 푸쉬추가
  localStorage_json.push(inputValue_id);
  //list_todo함수 실행 인자로 인풋의 밸류 값 보냄.
  list_todo(inputValue_id);
  //로컬스토리지에 저장하는 함수
  saveTodo();
}

//할일 목록창
//2. 할일 목록 인풋창에서 인풋 밸류(inputValue)를 받아옴.
function list_todo(inputValue) {
  //li태그 생성
  const li = document.createElement("li");
  li.id = inputValue.id;
  //span태그 생성
  const span = document.createElement("span");
  //스팬태그에 이너텍스트 밸류값으로 할당
  span.innerText = inputValue.text;
  //버튼 태그 생성
  const button = document.createElement("button");
  //버튼 태그 이너텍스트 이모티콘 할당
  button.innerText = "⚽️";
  //button 클릭 이벤트//클릭하면 삭제되는 함수호출
  button.addEventListener("click", deleteButton);

  //ul의 자식으로 li태그
  toDoList.appendChild(li);
  //li의 자식으로 span태그
  li.appendChild(span);
  //li의 자식으로 button태그
  li.appendChild(button);
}

//3. 버튼누르면 삭제되는 함수
function deleteButton(event) {
  //버튼이 어디있는지 찾기위해
  //event 프로퍼티중 타겟과 파렌트엘리먼트를 통해 위치를 button이 들어가있는 부모li를 찾고
  const li = event.target.parentElement;
  //부모 li를 리무브로 삭제
  li.remove();
  localStorage_json = localStorage_json.filter(
    (item) => item.id !== parseInt(li.id)
  );
  saveTodo();
}

//4. 할일 목록을 로컬스토리지에 저장해주는 함수
function saveTodo() {
  //로컬스토리지에 인풋값을 저장
  localStorage.setItem("todos", JSON.stringify(localStorage_json));
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodo = localStorage.getItem("todos");

if (savedTodo !== null) {
  const parseTodo = JSON.parse(savedTodo);
  localStorage_json = parseTodo;
  parseTodo.forEach(list_todo);
}
