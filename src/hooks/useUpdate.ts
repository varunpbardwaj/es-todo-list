import useStore from "../states/store";
import { useAtom } from "jotai";
import newTodo from "../atoms/newTodo";
import currentTodo from "../atoms/currentTodo";

const useUpdate = () => {
  const todos: string[] = useStore((state) => state.todo);
  const setTodos: (payload: string[]) => void = useStore(
    (state) => state.setTodos
  );
  const [getNewTodo, setNewTodo] = useAtom(newTodo);
  const [_, setCurrentTodo] = useAtom(currentTodo);

  const onUpdate = (i: number) => {
    const getTodos = [...todos];
    getNewTodo.trim() === "" && (getTodos[i] = "new-todo");
    getNewTodo.trim() !== "" && (getTodos[i] = getNewTodo);
    setTodos(getTodos);
    setNewTodo("");
    setCurrentTodo(-1);
  };

  return [onUpdate];
};

export default useUpdate;
