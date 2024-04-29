export type Task = {
  id: string;
  text: string;
};

export const getAllTodos = async (): Promise<Task[]> => {
  // SSR:{ cache: "no-store" }
  const res = await fetch("http://localhost:3001/task", { cache: "no-store" }); //キャッシュへのdata保存をしない
  const todos = res.json();

  return todos;
};

export const addTodos = async (todo:Task): Promise<Task> => {
  const res = await fetch("http://localhost:3001/task", {
    method: "POST",
    headers: { "Content-Type": "application/json" },body:JSON.stringify(todo)
  });
  const newTodo = res.json();

  return newTodo;
};

/*
SSR:初回表示が早い
CSR：
*/
