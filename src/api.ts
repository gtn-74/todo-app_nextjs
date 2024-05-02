export type Task = {
  id: string;
  text: string;
};
// GetAPI
export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch("http://localhost:3001/task", { cache: "no-store" }); //キャッシュへのdata保存をしない
  const todos = res.json();
  return todos;
};

// POSTAPI
export const addTodos = async (todo: Task): Promise<Task> => {
  const res = await fetch("http://localhost:3001/task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id:'text',text:'text'}),
  });
  const newTodo = res.json();
  return newTodo;
};



// PUTAPI
export const editTodos = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/task/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodo = res.json();
  return updatedTodo;
};

// deleteAPI
export const deleteTodos = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/task/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  const deleteTodo = res.json();
  return deleteTodo;
};

/*
SSR:初回表示が早い
CSR：
*/
