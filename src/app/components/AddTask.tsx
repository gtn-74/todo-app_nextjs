// hooksを使う場合、use clientの記述が必要
"use client";
import { addTodos } from "@/api";
import React, { ChangeEvent, FormEvent } from "react";

const AddTask = () => {
  const [taskTitle, setTaskTitle] = React.useState("");
  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    await addTodos({ id: "4", text: taskTitle });

    setTaskTitle("");
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
