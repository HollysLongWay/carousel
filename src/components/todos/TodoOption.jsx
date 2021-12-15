import React, { useRef } from "react";
import { useCallback } from "react";

export default function TodoOption({ todos, setShowType }) {
  const showAll = useRef();
  const showActive = useRef();
  const showCom = useRef();

  const showAllTodos = useCallback(() => {
    setShowType("all");
  }, []);

  const showActiveTodos = useCallback(() => {
    setShowType("active");
  }, []);

  const showComTodos = useCallback(() => {
    setShowType("complete");
  }, []);

  return (
    <section className="todo--footer">
      <span className="todo--footer--text">{todos.length} item left</span>
      <div className="todo--footer--btnWrap">
        <button ref={showAll} onClick={showAllTodos}>
          All
        </button>
        <button ref={showActive} onClick={showActiveTodos}>
          Active
        </button>
        <button ref={showCom} onClick={showComTodos}>
          Completed
        </button>
      </div>
    </section>
  );
}
