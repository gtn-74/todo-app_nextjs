import { http, HttpResponse } from "msw";

export const handlers = [
  // 下のpathなんでも良い
  http.get("http://localhost:3003/get", () => {
    return HttpResponse.json(
      // console.log('a')
      // [{ id: "111", text: "get data" }]
      [
        { id: "111", text: "おはようございます" },
        { id: "222", text: "こんにちは" },
        { id: "333", text: "こんばんは" },
      ]
    );
  }),
  http.post("http://localhost:3003/post", () => {
    return HttpResponse.json(
      // console.log('b')
      [
        // ログで吐かれてる
        [{ message: "post data" }],
      ]
    );
  }),
];
