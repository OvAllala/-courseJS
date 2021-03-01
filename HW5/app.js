//1. По нажатию на кнопку `"btn-msg"` должен появиться алерт с тем текстом который находится в атрибуте `data-text` у кнопки.

const button = document.getElementById("btn-msg");
const text = button.getAttribute("data-text");
button.addEventListener("click", function() {
  alert(text);
});

//2. При наведении указателя мыши на `"btn-msg"`, кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета. Цвет менять можно через добавление класса.

const color = document.getElementById("btn-msg");
color.onmouseover = function() {
  this.style.backgroundColor = "red";
};
color.onmouseout = function() {
  this.style.backgroundColor = "";
};
// 3. При нажатии на любой узел документа показать в элементе с `id=tag` имя тега нажатого элемента.

document.body.onclick = function(element) {
  document.getElementById("tag").textContent = "Tag: " + element.target.tagName;
};
let user_id

user_id=fetch("https://instagram47.p.rapidapi.com/get_user_id?username=hell_rize", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1320eb993emsh9a746df34d5f513p1076dajsn7db3c17e2f33",
		"x-rapidapi-host": "instagram47.p.rapidapi.com"
	}
})
.then(response => {
  console.log(response);
  
})
.catch(err => {
	console.error(err);
});console.log(user_id)
//4. При нажатии на кнопку `btn-generate` добавлять в список `ul` элемент списка `Li` с текстом `Item` + порядковый номер `Li` по списку, т.е `Item 3`, `Item 4` и т.д
const generate = document.getElementById("btn-generate");
function NewItem() {
  let dd = document.querySelectorAll("li");
  var li = document.createElement("li");
  var i = 0;
  while (i <= dd.length) {
    dd[i] = ++i;
  }
  li.textContent = "Item " + [i];
  document.querySelector("ul").appendChild(li);
}
generate.addEventListener("click", function() {
  let item = new NewItem();
});
