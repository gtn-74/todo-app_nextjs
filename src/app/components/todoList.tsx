import React from "react";
import Todo from "./todo";
import { Task } from "@/api";

type TodoListProps = {
  todos: Task[];
};

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <>
      {/* listが増えていく */}
      <ul className="space-y-3">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
