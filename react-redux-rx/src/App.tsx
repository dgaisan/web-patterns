import { Counter } from "./features/counter/Counter";
import { Notes } from "./features/notes";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <Counter />
      <Notes />
    </div>
  );
}

export default App;
