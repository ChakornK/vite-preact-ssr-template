import { useState } from "preact/hooks";

import "./style.css";

export function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 p-8">
      <h1 className="bg-linear-to-r from-ctp-red-400 to-ctp-mauve-400 bg-clip-text text-6xl font-medium text-transparent">
        Hello world!
      </h1>
      <p className="text-2xl">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className={
          "bg-ctp-surface0 px-4 py-2 flex items-center justify-center gap-2 rounded-lg cursor-pointer hover:bg-ctp-surface1 transition-all duration-150 hover:scale-105 active:scale-95 active:bg-ctp-surface0"
        }
      >
        Click me!!
      </button>
    </main>
  );
}
