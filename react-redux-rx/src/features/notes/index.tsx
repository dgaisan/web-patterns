import { AddNoteForm } from "./AddNoteForm";
import { NotesList } from "./NotesList";

export const Notes = () => (
  <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Realtime Notes</h1>
    <AddNoteForm />
    <NotesList />
  </div>
);
