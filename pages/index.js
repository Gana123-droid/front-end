import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const buttons = [
    { name: "Dynamic colors", path: "/dynamic" },
    { name: "Timer", path: "/Timer" },
    { name: "Homepage", path: "/homepage" },
    { name: "Mongol-api", path: "/11b" },
    { name: "MyClass", path: "/Myclass" },
    { name: "Search", path: "/search  " },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 dark:from-gray-900 dark:to-black w-full min-h-screen flex flex-col items-center justify-center gap-8 px-5">
      
      <h1 
        className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-red-500 to-pink-500 text-5xl sm:text-6xl md:text-7xl font-extrabold cursor-pointer transition-transform hover:scale-110 mb-6 px-6 py-3 text-center animate-pulse drop-shadow-[0_0_25px_rgba(255,165,0,0.8)] hover:drop-shadow-[0_0_40px_rgba(255,165,0,1)]"
        onClick={() => router.push("/cs")}>Taniltsuulga
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl px-4">
        {buttons.map(({ name, path }, index) => (
          <button
            key={index}
            className="text-white dark:text-gray-200 bg-blue-500 dark:bg-green-500 rounded-lg text-xl sm:text-2xl font-bold w-full h-[70px] sm:h-[80px] flex items-center justify-center shadow-xl transition-all transform hover:scale-105 hover:bg-blue-600 dark:hover:bg-green-600 active:scale-95 text-center"
            onClick={() => router.push(path)}
          >{name}
          </button>
        ))}
      </div>
    </div>
  );
}
