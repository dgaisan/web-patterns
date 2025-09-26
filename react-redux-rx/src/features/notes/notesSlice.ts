import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

type Note = {
  id: string;
  title: string;
  content: string;
  updatedAt: string;
};

const notesAdapter = createEntityAdapter<Note>({
  sortComparer: (a, b) => b.updatedAt.localeCompare(a.updatedAt),
});

const notesSlice = createSlice({
  name: "notes",
  initialState: notesAdapter.getInitialState(),
  reducers: {
    addNote: {
        reducer: notesAdapter.addOne,
        prepare: (title: string, content: string) => {
            const id = crypto.randomUUID();
            const updatedAt = new Date().toISOString();
            return { payload: { id, title, content, updatedAt } as Note };
        }
    },
    updateNote: notesAdapter.updateOne,
    deleteNote: notesAdapter.removeOne,
  },
});

export const { addNote, updateNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;

export type StateType = {notes: ReturnType<typeof notesSlice.reducer>};

export const notesSelectors = notesAdapter
    .getSelectors<StateType>(
        (state) => state.notes
);
