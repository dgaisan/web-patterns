
import { useAppDispatch, useAppSelector } from "../../hooks";
import { deleteNote, notesSelectors } from "./notesSlice";

export const NotesList = () => {
  const notes = useAppSelector(notesSelectors.selectAll);
  const dispatch = useAppDispatch();

  return (
    <div className="mt-4">
      <h2 className="text-xl mb-2">Notes</h2>
        {notes.map((n) => (
          <div key={n.id} className="mb-2 border p-2 rounded border-color-gray-700">
            <p className="font-semibold">{n.title}</p>
            <p>{n.content}</p>
            <button
              onClick={() => dispatch(deleteNote(n.id))}
              className="text-sm text-red-600"
            >
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};
