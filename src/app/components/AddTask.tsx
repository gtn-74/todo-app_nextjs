// hooksを使う場合、use clientの記述が必要
"use client";
import { addTodos } from "@/api";
import { useRouter } from "next/navigation";
// import  Router  from "next/router";
import React, { ChangeEvent, FormEvent } from "react";
import { v4 as uuid4 } from "uuid";

const AddTask = () => {
  const router = useRouter();
  const [taskTitle, setTaskTitle] = React.useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTodos({ id: uuid4(), text: taskTitle });

    setTaskTitle("");

    // useRouterを用いた画面リフレッシュ
    router.refresh();

    // クライアント側でしか使えない？
    // Router.push('/')
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