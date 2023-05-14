const form = document.getElementById("todo-list-form")
const todoList = document.querySelector(".todo-list")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  const todo = document.getElementById("todo")
  // liを作成してtodoListに追加する
  const li = document.createElement("li")
  const taskname = document.createElement("span")
  // liの中身にタスク名を追加する
  taskname.textContent = todo.value
  li.appendChild(taskname)
  todoList.appendChild(li)
  //liの中身に削除ボタンを追加
  const button = document.createElement("button")
  button.textContent = "削除"
  li.appendChild(button)

  //liの中身に完了チェックボックスを追加
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  li.appendChild(checkbox)

  todo.value = ""

  //削除ボタンを押したらliを削除する
  button.addEventListener("click", (e) => {
    e.preventDefault()
    e.target.parentNode.remove()
  })

  //チェックボックスにチェックを入れたらliの文字に下線を引く
  checkbox.addEventListener("change", (e) => {
    e.preventDefault()
    if (e.target.checked) {
      e.target.parentNode.style.textDecoration = "line-through"
    } else {
      e.target.parentNode.style.textDecoration = "none"
    }
  })

  taskname.addEventListener("click", (e) => {
    // li要素内のテキストを非表示にする
    e.target.style.display = "none"

    // テキスト編集用のinput要素を作成する
    const input = document.createElement("input")
    input.type = "text"
    input.value = taskname.textContent
    e.target.parentNode.insertBefore(input, e.target)
    input.focus()

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault()
        taskname.textContent = input.value
        input.remove()
        taskname.style.display = "inline"
      }
    })

    input.addEventListener("blur", (e) => {
      taskname.textContent = input.value
      taskname.style.display = "inline"
      input.remove()
    })
  })
})
