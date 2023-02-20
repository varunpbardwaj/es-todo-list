import useStore from "../states/store";

const useRemove = () => {
  const todos: string[] = useStore((state) => state.todo);
  const setTodos: (payload: string[]) => void = useStore(
    (state) => state.setTodos
  );

  const onRemove = (i: number) => {
    const getTodos = [...todos];
    getTodos.splice(i, 1);
    setTodos(getTodos);
  };

  return [onRemove];
};

export default useRemove;
