import useStore from "../states/store";

import { useAtom } from "jotai";
import newTodo from "../atoms/newTodo";
import currentTodo from "../atoms/currentTodo";

import { FaTrash, FaCheck, FaPlus } from "react-icons/fa";

import Button from "../components/Button";
import Input from "../components/Input";
import Icon from "../components/Icon";

import useAdd from "../hooks/useAdd";
import useRemove from "../hooks/useRemove";
import useUpdate from "../hooks/useUpdate";
import useTodoChange from "../hooks/useTodoChange";
import useTodoClick from "../hooks/useTodoClick";

const Todo = () => {
  const renderTodos = () => {
    const todos: string[] = useStore((state) => state.todo);

    const [getCurrentTodo] = useAtom(currentTodo);
    const [getNewTodo] = useAtom(newTodo);

    const [setTodoClick] = useTodoClick();
    const [setTodoChange] = useTodoChange();
    const [setUpdate] = useUpdate();
    const [setRemove] = useRemove();

    return (
      todos.length > 0 &&
      todos.map((todo: string, i: number) => {
        const currentKey = `${todo}-${i}`;
        return (
          <div
            id={`${i}`}
            key={currentKey}
            className="flex justify-between text-xl font-semibold my-5"
          >
            {getCurrentTodo !== i && (
              <div className="cursor-pointer" onClick={() => setTodoClick(i)}>
                {todo}
              </div>
            )}
            {getCurrentTodo === i && (
              <Input value={getNewTodo} onChange={setTodoChange} />
            )}
            <div className="flex items-center">
              {getCurrentTodo === i && (
                <Icon onClick={() => setUpdate(i)}>
                  <FaCheck className="text-green-fg cursor-pointer mx-5" />
                </Icon>
              )}
              <Icon onClick={() => setRemove(i)}>
                <FaTrash className="text-red-fg cursor-pointer" />
              </Icon>
            </div>
          </div>
        );
      })
    );
  };

  const renderDefault = () => {
    const todos: string[] = useStore((state) => state.todo);

    return (
      !todos.length && (
        <div className="text-xl font-semibold">No todos found!</div>
      )
    );
  };

  const renderButton = () => {
    const [setAdd] = useAdd();

    return (
      <Button onClick={() => setAdd()}>
        <FaPlus />
      </Button>
    );
  };

  return (
    <div className="flex flex-col items-center pt-5">
      <span className="my-10 text-2xl font-semibold">Todo App</span>
      <div className="bg-dark-bg text-light-bg w-1/2 px-8 py-4 min-h-fit rounded">
        {renderTodos()}
        {renderDefault()}
      </div>
      {renderButton()}
    </div>
  );
};

export default Todo;
