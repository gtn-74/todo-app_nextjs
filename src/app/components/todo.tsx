"use client";
import { Task, deleteTodos, editTodos } from "@/api";
import React from "react";

type TodoProps = {
  todo: Task;
};

const Todo = ({ todo }: TodoProps) => {
  // 入力値を更新する
  const [idSaving, setIdSaving] = React.useState(todo.text);

  // editボタン
  const [idEditing, setIdEditing] = React.useState(false);
  const handleEdit = async () => {
    setIdEditing(true);
  };

  // saveボタン
  const handleSave = async () => {
    await editTodos(todo.id, idSaving);
    setIdEditing(false);
  };

  // html属性にアクセスできるhooks
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (idEditing) {
      // null許容のため、オプショナルチェーンで回避
      ref.current?.focus();
    }
  }, [idEditing]);

  // deleteボタン
  const handleDelete = async () => {
    await deleteTodos(todo.id);
  };
  return (
    <li
      key={todo.id}
      className="mb-4 flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow"
    >
      {/* inputフォームとテキストが、editのbooleanでスイッチする */}
      {idEditing ? (
        <input
          ref={ref}
          type="text"
          className="mr-2 py-1 px-2 rounded border-gray-400 border"
          value={idSaving}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setIdSaving(e.target.value);
          }}
        />
      ) : (
        <span className="text-gray-700">{todo.text}</span>
      )}

      <div>
        {/* inputフォームとテキストが、editのbooleanでスイッチする */}
        {idEditing ? (
          <button className="text-green-500 mr-3" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="text-green-500 mr-3" onClick={handleEdit}>
            Edit
          </button>
        )}
        <button className="text-red-500" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Todo;
