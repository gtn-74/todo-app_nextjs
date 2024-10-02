import { http, HttpResponse } from "msw";

let todos = [
  { id: "111", text: "おはようございます" },
  { id: "222", text: "こんにちは" },
  { id: "333", text: "こんばんは" },
];

export const handlers = [
  // 下のpathなんでも良い
  http.get("http://localhost:3003/get", ({request}) => {
   const url = new URL (request.url)
    return HttpResponse.json(
      // console.log('a')
      // 初期値
      todos
    );
  }),
  http.post("http://localhost:3003/post", (req) => {
    // return HttpResponse.json(
      const newTodo =  req.request.text();
      console.log('',newTodo)
      // todos.push(newTodo)
      // [
      //   // ログで吐かれてる
      //   [{ message: "post data" }],
      // ]
    // );
    return HttpResponse.json(newTodo)
  }),
];
