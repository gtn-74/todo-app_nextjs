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
// msw2.0
// https://zenn.dev/keitakn/scraps/2ca70305a71847
// https://qiita.com/eito_katagiri-litalico/items/9704229de4b1eee86715
// https://zenn.dev/keitakn/scraps/2ca70305a71847
// https://zenn.dev/ryo_kawamata/articles/mock-api-server-with-msw
// https://qiita.com/KokiSakano/items/62180f334a6137d429b5#deplay
// https://mswjs.io/blog/introducing-msw-2.0/
// https://v1.mswjs.io/docs/getting-started/mocks/rest-api


// jest mockを使わずに非同期リクエストてストを書く
// https://zenn.dev/ryo_kawamata/articles/introduce-mock-service-worker
// https://mswjs.io/docs/migrations/1.x-to-2.x/

// msw1.3.2
// https://zenn.dev/collabostyle/articles/136b117d2893c0