import { Task } from "./api";

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





// getMock : Promise<Task[]>
export const MswGetAllFn = async () => {
  const res =  fetch("http://localhost:3003/get");
  const data = await (await res).json();
  return data;
};



export const mockGenerateCatMessageTooManyRequestsErrorResponseBody: ResponseResolver =
  () => {
    return HttpResponse.json(
      { type: 'TOO_MANY_REQUESTS', title: 'Too Many Requests' },
      { status: 429, statusText: 'Too Many Requests' },
    );
  };