import Image from "next/image";


export default function Home() {
  return (
    <div className="bg-white dark:bg-black w-full h-screen">
     <h1 className="text-3xl font-serif text-violet-300 text-center pt-3">My front-end career</h1>
     <button className=" ml-2 text-border rounded-lg shadow-md dark:shadow-white text-2xl text-green-400 w-[200px] h-[100px] text-center flex items-center justify-center ">Dynamic colors</button>
    </div>
  );
}
