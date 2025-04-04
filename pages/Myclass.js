import { useState } from "react";
import { useRouter } from 'next/router';

const data = [
    { id: 1, name: "Ariunbayr", nas: 17 },
    { id: 2, name: "Badraa", nas: 17 },
    { id: 3, name: "Bilguntugs", nas: 17 },
    { id: 4, name: "Boldoo", nas: 17 },    
    { id: 5, name: "Gan-Erdene", nas: 17 },
    { id: 6, name: "Gunbileg", nas: 17 },
    { id: 7, name: "Delgermurun", nas: 17 },    
    { id: 8, name: "Jargal", nas: 17 },
    { id: 9, name: "Munkhbaysgalan", nas: 17 },  
    { id: 10, name: "Munkhnaran", nas: 17 },
    { id: 11, name: "Nomindari", nas: 17 },
    { id: 12, name: "Siilen", nas: 17 },
    { id: 13, name: "Tuvshin", nas: 17 },
    { id: 14, name: "Temulan", nas: 17 },
    { id: 15, name: "Temuugei", nas: 17 },
    { id: 16, name: "Undrakh", nas: 17 },
    { id: 17, name: "Khangarid", nas: 17 },
    { id: 18, name: "Chinbiligt", nas: 17 },
    { id: 19, name: "Erdene-Jargal", nas: 17 },
    
    
    
];

export default function Sfilter() {
    const [search, setSearch] = useState("");
    const [grid, setGrid] = useState(false);
    const router = useRouter();

    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.nas.toString().includes(search)
    );

    return (
        <div className="w-full min-h-screen bg-black px-80 flex flex-col">
            <button
                className="absolute top-5 left-5 border-2 border-white text-white p-4 rounded-md hover:bg-purple-200 shadow-white shadow-md"
                onClick={() => router.back()}>Back</button>

            <button
                className="fixed top-5 right-5 px-6 py-2 text-black bg-white shadow-md shadow-white rounded-md"
                onClick={() => setGrid(!grid)}
            >
                {grid ? "Ungrid me" : "Grid me"}
            </button>

            <div className="w-full h-[100px] flex items-center flex-col gap-3 pt-3 ">
                <p className="font-bold text-xl text-white shadow-sm">11Б</p>
                <input
                    className="text-black border flex border-white shadow-white shadow-md pl-1 py-1  w-full shadow-lg"
                    type="search"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className={`mt-8 flex flex-col gap-4 ${grid ? "grid grid-cols-2 gap-8 " : ""}`}>
                {filteredData.length > 0 ? (
                    filteredData.map((data) => (
                        <div
                            key={data.id}
                            className="w-full h-[120px] rounded-lg border border-white mt-4 shadow-md hover:scale-110 hover:shadow-lg hover:shadow-purple-100 duration-300 flex items-center justify-center flex-col shadow-white"
                        >
                            <p className="text-xl text-white font-bold text-opacity-80 pl-2">
                                {data.name}
                            </p>
                            <p className="text-lg text-white font-bold text-opacity-80 pl-2">
                                nas: {data.nas}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="text-white text-lg">No result for: {search}</div>
                )}
            </div>
        </div>
    );
}
