import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = {
      products: [
        {
          id: 1,
          title: "Laptop Pro",
          description: "Powerful laptop for professionals",
          price: 1299,
          thumbnail:
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=150&q=80",
        },
        {
          id: 2,
          title: "Smartphone X",
          description: "Latest generation smartphone",
          price: 999,
          thumbnail:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=150&q=80",
        },
        {
          id: 3,
          title: "Wireless Earbuds",
          description: "Noise-cancelling wireless earbuds",
          price: 199,
          thumbnail:
            "https://m.media-amazon.com/images/I/61hf2tu4IvL.jpg",
        },
        {
          id: 4,
          title: "Gaming Monitor",
          description: "High refresh rate gaming monitor",
          price: 349,
          thumbnail:
            "https://www.gigabyte.com/FileUpload/Global/KeyFeature/1530/innergigabyteimages/bg1.png",
        },
        {
          id: 5,
          title: "Mechanical Keyboard",
          description: "RGB backlit mechanical keyboard",
          price: 129,
          thumbnail:
            "https://media.wired.com/photos/65b0438c22aa647640de5c75/1:1/w_1800,h_1800,c_limit/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623.jpg",
        },
        {
          id: 6,
          title: "Smartwatch",
          description: "Fitness-focused smartwatch",
          price: 249,
          thumbnail:
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=150&q=80",
        },
        {
          id: 7,
          title: "Bluetooth Speaker",
          description: "Portable Bluetooth speaker",
          price: 89,
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s",
        },
        {
          id: 8,
          title: "Drone Camera",
          description: "4K drone with stabilized camera",
          price: 599,
          thumbnail:
            "https://cdn.thewirecutter.com/wp-content/media/2023/08/drones-2048px-0718.jpg",
        },
        {
          id: 9,
          title: "Tablet S",
          description: "High-performance tablet device",
          price: 699,
          thumbnail:
            "https://m.media-amazon.com/images/I/81+1f1FWEAL.jpg",
        },
        {
          id: 10,
          title: "External SSD",
          description: "Fast and compact external SSD",
          price: 149,
          thumbnail:
            "https://m.media-amazon.com/images/I/71bBCTIvIIL._AC_UF1000,1000_QL80_.jpg",
        },
      ],
    };

    setProducts(data.products.slice(0, 10));
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-row">
      <div className="w-1/6 h-screen bg-white flex flex-col items-center gap-4">
        <img
          className="w-32 mt-10"
          src="https://nhs.edu.mn/favicon.ico"
          alt="Your Image"
        />
        <p className="text-blue-600 font-bold text-2xl flex items-center ml-5">
          Nest Education IT School
        </p>
        <p className="text-black font-sans text-xl flex items-center">
          Undrakhtamir Gan-Erdene
        </p>
        <p className="text-black font-bold text-lg flex items-center">Class 11b</p>

        <button className="bg-blue-700 text-white w-4/5 h-10 rounded-lg">
          Go to lab 1
        </button>
        <button className="bg-blue-700 text-white w-4/5 h-10 rounded-lg">
          Go to Lab 2
        </button>
      </div>
      <div className="w-4/5 h-full bg-slate-200 shadow-xl">
        <div className="w-full h-24 bg-slate-200 flex flex-row">
          <div className="h-24 w-1/2 flex flex-row gap-4 items-center">
            <button className="bg-black text-white w-36 h-10 rounded-md ml-10">
              Харилцагчид
            </button>
            <button className="bg-white w-72 h-10 rounded-md text-black shadow-lg px-4 flex items-center">
              Search
            </button>
          </div>
          <div className="h-24 w-1/2 flex flex-row gap-4 items-center justify-end">
            <button className="bg-orange-400 w-36 h-10 rounded-md mr-10 text-white">
              Барааг бүртгэх
            </button>
          </div>
        </div>
        <div className="max-w-[1445px] bg-slate-200 flex flex-col gap-8 items-center justify-start ml-8 rounded-md px-4 pt-8">
          <table className="table-auto w-full bg-white rounded-lg shadow-lg overflow-hidden">
            <thead className="bg-blue-100">
              <tr>
                <th className="px-4 py-2 text-left text-black">Зураг</th>
                <th className="px-4 py-2 text-left text-black">Нэр</th>
                <th className="px-4 py-2 text-left text-black">Тайлбар</th>
                <th className="px-4 py-2 text-left text-black">Үнэ ($)</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-2">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2 font-semibold">{product.title}</td>
                  <td className="px-4 py-2 text-sm text-gray-700">
                    {product.description}
                  </td>
                  <td className="px-4 py-2 text-black font-bold">
                    ${product.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}