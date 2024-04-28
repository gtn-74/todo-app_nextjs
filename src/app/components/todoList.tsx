import React from "react";

const TodoList = () => {
  return (
    <>
      {/* listが増えていく */}
      <ul className="space-y-3">
        <li className="mb-4 flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow">
          <span className="text-gray-700">Task 1</span>
          <div>
            <button className="text-green-500 mr-3">Edit</button>
            <button className="text-red-500 ">Delete</button>
          </div>
        </li>
      </ul>
    </>
  );
};

export default TodoList;
