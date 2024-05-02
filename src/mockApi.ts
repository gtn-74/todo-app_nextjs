import { Task } from "./api";

// getMock 
export const MswGetAllFn = async (): Promise<Task[]> => {
  const res = await fetch("http://localhost:3002");
  const data = await res.json();
  // console.log(data)
  return data;
};

// 
export const MswPostAllFn = async ():Promise<Task[]> => {
  const res = await fetch("http://localhost:3002/post", {
    headers: { "Content-type": "application/json" },
    method: "POST",
    body: JSON.stringify([{  }]),
  });
  const data = await res.json();
  console.log(data)
  return data;
};

// export const MswAddTodos = async (todo: Task): Promise<Task> => {
//   const res = await fetch("http://localhost:3002/post", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ id: "test", text: "test" }),
//   });
//   const newTodo = res.json();
//   console.log(newTodo);
//   return newTodo;
// };