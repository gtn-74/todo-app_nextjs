import { Task } from "./api";

// getMock : Promise<Task[]>
export const MswGetAllFn = async () => {
  const res = await fetch("http://localhost:3003/get");
  const data = await res.json();
  return data;
};

//
export const MswPostAllFn = async (todo: Task): Promise<Task> => {
  const res = await fetch("http://localhost:3003/post", {
    headers: { "Content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(todo),
  });
  const data = await res.json();
  console.log(data);
  return data;
};