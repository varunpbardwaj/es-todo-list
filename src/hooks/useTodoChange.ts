import { useAtom } from "jotai";
import newTodo from "../atoms/newTodo";

const useTodoChange = () => {
  const [_, setNewTodo] = useAtom(newTodo);

  const onTodoChange = (text: string) => {
    setNewTodo(text);
  };

  return [onTodoChange];
};

export default useTodoChange;
