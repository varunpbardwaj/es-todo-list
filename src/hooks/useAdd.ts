import useStore from "../states/store";

const useAdd = (): [setState: () => void] => {
  const todos: string[] = useStore((state) => state.todo);
  const setTodos: (payload: string[]) => void = useStore(
    (state) => state.setTodos
  );

  const onAdd = () => {
    const getTodos = [...todos];
    getTodos.push("new-todo");
    setTodos(getTodos);
  };

  return [onAdd];
};

export default useAdd;
