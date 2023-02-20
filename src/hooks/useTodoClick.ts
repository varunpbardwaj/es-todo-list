import { useAtom } from "jotai";
import currentTodo from "../atoms/currentTodo";

const useTodoClick = () => {
  const [_, setCurrentTodo] = useAtom(currentTodo);

  const onTodoClick = (i: number) => {
    setCurrentTodo(i);
  };

  return [onTodoClick];
};

export default useTodoClick;
