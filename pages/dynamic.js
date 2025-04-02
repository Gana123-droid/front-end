import Image from "next/image";
import {useEffect, useState} from "react";     
import {useRouter} from "next/router";
export default function Dynamic(){
    const router = useRouter();
    const[color, setColor]= useState("");
    return(
        <div className={`bg-${color}-800 h-screen`}>
            
        <div className="flex justify-center flex-cols gap-5 ml-4 pt-4 ">
        <button className="w-[100px] h-[80px] rounded-lg border-2 border-black dark:border-white absolute left-8 top-10" onClick={() => router.back()}>back</button>
        <div onClick={() => setColor("red")} className="bg-red-800 rounded-lg h-[200px] w-[200px] flex items-center justify-center border border-white">
            <button className="text-white text-2xl font-bold">Red</button>
        </div>
        <div onClick={() => setColor("blue")} className="bg-blue-800 rounded-lg h-[200px] w-[200px] flex items-center justify-center border border-white">
        <button className="text-white text-2xl font-bold">blue</button>
        </div>
        <div onClick={() => setColor("pink")} className="bg-pink-800 rounded-lg h-[200px] w-[200px] flex items-center justify-center border border-white">
        <button className="text-white text-2xl font-bold">pink</button>
        </div>
        <div onClick={() => setColor("white")} className="bg-white rounded-lg h-[200px] w-[200px] flex items-center justify-center border-4 border-black">
        <button className="text-black text-2xl font-bold">clear</button>
        </div>
        </div>
        </div>
     )
}