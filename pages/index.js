
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className="bg-white dark:bg-black w-full h-screen">
     <h1 className="text-4xl font-serif text-black dark:text-violet-300 text-center pt-3">My front-end career</h1>
     <button className=" ml-2 text-border rounded-lg text-3xl font-bold w-[250px] h-[150px] text-center flex items-center justify-center shadow-lg dark:shadow-green-400 shadow-blue-100 " onClick={()=> router.push("/dynamic")}>Dynamic colors</button>
    </div>
  );
}
