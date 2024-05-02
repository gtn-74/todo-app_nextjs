import { http, HttpResponse } from "msw";

const allPosts = new Map();

export const handlers = [
  // 下のpathなんでも良い
  http.get("http://localhost:3002", () => {
    return HttpResponse.json(
      // Array.from(allPosts.values())
      [
        {
          id: "0ae3dd46-4404-4eb4-bd40-d21aa9fbdd11",
          text: "理解",
        },
        {
          id: "0ae3dd46-4404-4eb4-bd40-d21aa9fbdd89",
          text: "した",
        },
        {
          id: "0ae3dd46-4404-4eb4-bd40-d21aa9fbdd99",
          text: "と思う",
        },
      ]
    );
  }),
  http.post("http://localhost:3002/post", async () => {
    // request
    // Read the intercepted request body as JSON.
    // const newPost = await request.json()

    // console.log(newPost)
    // Push the new post to the map of all posts.
    // allPosts.set(newPost.id, newPost)

    // Don't forget to declare a semantic "201 Created"
    // response and send back the newly created post!
    // return HttpResponse.json(newPost, { status: 201 })
    return HttpResponse.json([
      {
        id: "0ae3dd46-4404-4eb4-bd40-d21aa9fbdd99",
        text: "と思う",
      },
    ]);
  }),
];
