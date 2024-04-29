 export type Task = {
  id: string;
  text: string;
};

export const getAllTodos = async (): Promise<Task[]> => {
    // SSR:{ cache: "no-store" }
  const res = await fetch("http://localhost:3001/task", { cache: "no-store" });
  const todos = res.json();

  return todos;
};

/*
SSR:初回表示が早い
CSR：
*/
