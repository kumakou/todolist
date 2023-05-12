const form = document.getElementById("todo-list-form")
const todoList = document.querySelector(".todo-list")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  todo = document.getElementById("todo")
  li = document.createElement("li")
  li.textContent = todo.value
  todoList.appendChild(li)
  //liの中身にbuttonタグを追加
  button = document.createElement("button")
  button.textContent = "削除"
  li.appendChild(button)
  todo.value = ""

  //削除ボタンを押したらliを削除する
  button.addEventListener("click", (e) => {
    e.preventDefault()
    e.target.parentNode.remove()
    //todoの中身を空にする
  })
})
