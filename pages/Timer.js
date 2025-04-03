import { useEffect, useState } from "react";
import { useRouter } from "next/router";
export default function Index() {
  const [time, setTime] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const Timer = (Time) => {
      if (Time < 10) {
        setTimeout(() => {
          setTime(Time + 1);
          Timer(Time + 1);
        }, 1000);
      } 
    };

    Timer(0);
  }, []);

  return(
    <div className="flex items-center justify-center h-screen">
      <button className="w-[100px] h-[80px] rounded-lg border-2 border-black dark:border-white absolute left-8 top-10" onClick={() => router.back()}>back</button>
    <button className="border border-white shadow-md shadow-white w-[100px] h-[50px] text-center rounded-lg">
    Timer: {time}
    </button>
    </div>
  )
}