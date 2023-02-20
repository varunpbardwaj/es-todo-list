import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type State = {
  todo: string[];
  setTodos: (payload: string[]) => void;
};

const blacklist = [""];

const useStore = create<State>()(
  devtools(
    persist(
      immer((set) => ({
        todo: ["Learn JavaScript", "Learn React", "Learn support libraries"],
        setTodos: (payload: string[]) =>
          set(
            (state: State) => {
              state.todo = payload;
            },
            false,
            "SET_TODOS"
          ),
      })),
      {
        name: "zustand:app",
        partialize: (state) =>
          Object.fromEntries(
            Object.entries(state).filter(([key]) => !blacklist.includes(key))
          ),
      }
    )
  )
);

export default useStore;
