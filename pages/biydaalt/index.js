import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
     const router = useRouter()
  return (
    <div className="min-h-screen flex bg-white">
      <div className="w-1/2 flex flex-col justify-start px-20 pt-10 relative">
        <div className="flex items-center mb-12">
          <img src="/unaa.png" alt="unaa.mn logo" className="h-10 mr-2" />
          <span className="text-2xl font-semibold text-red-700">unaa.mn</span>
        </div>

        <div className="mx-40 pt-10">
          <h2 className="text-xl font-semibold text-center text-red-800 mb-8">Нэвтрэх</h2>
        
          <input
            type="text"
            placeholder="Утасны дугаар"
            className="w-full mb-4 px-4 py-3 border-2 border-cyan-200 rounded-md text-black focus:border-cyan-300 focus:bg-blue-100 focus:outline-none text-sm"
/>


          <input
            type="password"
            placeholder="Нууц үг"
             className="w-full mb-4 px-4 py-3 border-2 border-cyan-200 rounded-md text-black focus:border-cyan-300 focus:bg-blue-100 focus:outline-none text-sm"
          />

          <div className="flex justify-between text-xs text-gray-600 mb-4">
            <span className="cursor-pointer">Нэвтэрсэн байх</span>
            <span className="cursor-pointer">Нууц үгээ мартсан</span>
          </div>

          <div className="text-sm text-center text-black mb-2">И-мэйлээр нэвтрэх</div>

          <button className="w-full h-[60px] flex justify-start items-center gap-2 mb-3 px-4 py-2 border-2 border-black rounded-md bg-white text-sm text-black">
  <img src="/google.png" alt="Google icon" className="w-5 h-5" />
  Google-ээр нэвтрэх
</button>
          <button className="w-full h-[60px] flex justify-start items-center gap-2 mb-3 px-4 py-2 border-2 border-black rounded-md bg-white text-sm text-black">
  <img src="/facebook.png" alt="Google icon" className="w-5 h-5" />
  Facebook-ээр нэвтрэх
</button>


          <button className="w-full px-4 py-2 border border-black rounded-md bg-white text-sm text-black">
            Нэвтрэх
          </button>

          <div className="text-center mt-4 text-sm text-gray-700">
            <span>Бүртгэл байхгүй юу? </span>
            <span className="underline cursor-pointer text-red-700"
              onClick={() => router.push("/biydaalt/page2")}>Бүртгүүлэх</span>
          </div>
        </div>
      </div>

      <div className="w-[1px] h-[500px] flex mt-[150px] bg-black opacity-100"></div>

      <div className="w-1/2 flex items-center justify-center bg-white">
        <Image src="/talking.png" alt="Login illustration" width={450} height={450} />
      </div>
    </div>
  );
}
