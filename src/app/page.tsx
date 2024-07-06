import AddTask from "./components/addTask";
import TodoList from "./components/todoList";
import { MswGetAllFn } from "@/mockApi";
import { getAllTodos } from "@/api";


if (process.env.NODE_ENV === "development") {
  if (typeof window === "undefined") {
    const { server } = require("../mocks/server");
    server.listen();
  } else {
    const { worker } = require("../mocks/browser");
    worker.start();
  }
}
// MswGetAllFn()

// 非同期通信のため、await必須。そのため、Homeにasyncをつける必要あり
export default async function Home() {
  // 本番API
  const todos = await getAllTodos();

  // mockAPI
  // const todos = await MswGetAllFn();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Next 13 Todo App
      </h1>
      <div className="w-full max-w-xl items-center justify-center mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoList todos={todos} />
        </div>
      </div>
    </main>
  );
}
/*
サーバーコンポーネントの場合: ターミナルで表示される


*/
