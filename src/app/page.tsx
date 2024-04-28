import Image from "next/image";
import AddTask from "./components/AddTask";
import TodoList from "./components/todoList";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <h1 className="text-4xl font-bold text-gray-700 -mt-32">
        Next 13 Todo App
      </h1>
      <div className="w-full max-w-xl items-center justify-center mt-5">
        <div className="w-full px-8 py-6 bg-white shadow-md rounded-lg">
          <AddTask />
          <TodoList  />
        </div>
      </div>
    </main>
  );
}
/*
ファイル名は小文字でも大丈夫
コンポーネントファイルの中身と、インポート先のファイルは同じ名前じゃないとダメっぽい
*/
