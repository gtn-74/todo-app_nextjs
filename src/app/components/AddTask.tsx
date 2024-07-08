// hooksを使う場合、use clientの記述が必要
"use client";
import {  Task, addTodos } from "@/api";
import {  MswGetAllFn, MswPostAllFn } from "@/mockApi";
import { useRouter } from "next/navigation";
// import { Router } from "next/router";
// import  Router  from "next/router";
import React, { ChangeEvent, FormEvent } from "react";
import { v4 as uuid4 } from "uuid";

if (process.env.NODE_ENV === "development") {
  if (typeof window === "undefined") {
    const { server } = require("../../mocks/server");
    server.listen();
  } else {
    const { worker } = require("../../mocks/browser");
    worker.start();
  }
}

const AddTask = () => {
  const router = useRouter();
  const [taskTitle, setTaskTitle] = React.useState("");

  // mockPostAPI :Promise<Task[]>

  const handleSubmit = async (e: FormEvent)=> {
    e.preventDefault();

    await addTodos({ id: uuid4(), text: taskTitle });
    // await MswPostAllFn({ id: uuid4(), text: taskTitle });
    // await MswGetAllFn()
    setTaskTitle("");

    // useRouterを用いた画面リフレッシュ
    router.refresh();

    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook
    // クライアント側でしか使えない
    // Router.push('/')

    // https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#redirect-function
    // サーバー側でページ遷移させる場合、redirectを使う
    // redirect('/')

  };

  return (
    <form className="mb-4 space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400"
        // inputに入力した値がチェンジする度、更新関数に保存
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTaskTitle(e.target.value)
        }
        value={taskTitle}
      />
      <button className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover: bg-blue-400 hover:scale-95 duration-200">
        Add task
      </button>
    </form>
  );
};

export default AddTask;
//[router リフレッシュ] https://zenn.dev/nishiurahiroki/articles/9275209b157345
