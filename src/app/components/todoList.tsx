import React from "react";
import Todo from "./todo";
import { Task } from "@/api";

type TodoListProps = {
  todos: Task[];
};

const TodoList = (props: TodoListProps) => {
  return (
    <ul className="space-y-3">
      {props.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
