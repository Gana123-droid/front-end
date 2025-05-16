import { useRouter } from "next/router";
export default function Toki(){
        return (
            <div className="bg-black w-full min-h-screen">
                <div className="bg-white w-full h-[86px] px-52 flex flex-row items-center justify-between sticky top-0 z-50 shadow-sm">
                    <img className="w-[132px] h-[52px]" src="https://www.toki.mn/wp-content/uploads/2022/08/Asset-1@3x.png" alt="logo" />
                    <div className="grid grid-cols-4 gap-8 text-black font-medium">
                        <p>Үйлчилгээ</p>
                        <p>Давуу тал</p>
                        <p>Мэдээ</p>
                        <p>Хамтран ажиллах</p>
                    </div>
                </div>
    
                <div className="flex justify-center bg-pink-200 flex-row w-full h-[820px] relative">
                    <p className="absolute top-20 text-black text-4xl">Хэрэгцээт үйлчилгээг нэг дороос...</p>
                    <img src="https://www.toki.mn/wp-content/uploads/2020/06/Artboard-1-2.png" alt="hero" />
                </div>

                <div className="w-full h-screen bg-white"></div>
            </div>
        );
}