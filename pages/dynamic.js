import { useState } from "react";
import { useRouter } from "next/router";

export default function Dynamic() {
    const router = useRouter();
    const [color, setColor] = useState("");

    return (
        <div className={`bg-${color}-800 h-screen flex flex-col items-center justify-center`}>
            <button 
                className="w-[100px] h-[80px] rounded-lg border-2 border-black dark:border-white absolute left-8 top-10" 
                onClick={() => router.back()}> Back
            </button>
            <div className="flex flex-wrap justify-center items-center gap-5">
                <div onClick={() => setColor("red")} className="bg-red-800 rounded-lg h-[200px] w-[200px] flex items-center justify-center border border-white">
                    <button className="text-white text-2xl font-bold">Red</button>
                </div>
                <div onClick={() => setColor("blue")} className="bg-blue-800 rounded-lg h-[200px] w-[200px] flex items-center justify-center border border-white">
                    <button className="text-white text-2xl font-bold">Blue</button>
                </div>
                <div onClick={() => setColor("pink")} className="bg-pink-800 rounded-lg h-[200px] w-[200px] flex items-center justify-center border border-white">
                    <button className="text-white text-2xl font-bold">Pink</button>
                </div>
                <div onClick={() => setColor("white")} className="bg-white rounded-lg h-[200px] w-[200px] flex items-center justify-center border-4 border-black">
                    <button className="text-black text-2xl font-bold">Clear</button>
                </div>
            </div>
        </div>
    );
}
