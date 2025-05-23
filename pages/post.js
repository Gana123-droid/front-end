import { useState } from "react";
import axios from "axios";

export default function Post() {
  const [create, setCreate] = useState(false);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [ovog, setOvog] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  console.log(name);

  const handleSubmit = () => {
    // axios.get --> data awchrah
    // axios.post --> data uusgeh
    // axios.patch --> data shinechleh
    // axios.delete --> data ustgeh
    axios.post("http://localhost:8080/createUsers", {
      first_name: name,
      last_name: ovog,
      email: email,
      age: age,
    });
  };

  return (
    <div className="p-4 ">
      {/* deed heseg */}
      <div className="flex items-center space-x-4">
        <p className="text-3xl font-bold">Post page:</p>
        <button
          onClick={() => setCreate((e) => !e)}
          className="bg-blue-400 rounded-lg cursor-pointer p-4 text-white text-xl"
        >
          Create account
        </button>
      </div>

      {/* dood heseg */}
      {create === true && (
        <div className="m-4 space-y-4 ">
          <div>
            <label className="text-3xl font-semibold ">Нэр:</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className="bg-white rounded-lg border  p-4 ml-4 text-2xl text-black"
              placeholder="Нэр оруулна уу"
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">Овог:</label>
            <input
              type="text"
              onChange={(e) => setOvog(e.target.value)}
              className="bg-white rounded-lg border  p-4 ml-4 text-2xl text-black"
              placeholder="Овог оруулна уу"
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">Email:</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-lg border  p-4 ml-4 text-2xl text-black"
              placeholder="Email оруулна уу"
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">Нас:</label>
            <input
              type="text"
              onChange={(e) => setAge(e.target.value)}
              className="bg-white rounded-lg border  p-4 ml-4 text-2xl text-black"
              placeholder="Насаа оруулна уу"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-red-400 rounded-2xl p-3 text-white text-2xl"
          >
            Хадгалах
          </button>
        </div>
      )}
      <div>
        <div className="flex items-center space-x-4 mt-2">
          <p className="text-3xl font-bold">Show data:</p>
          <button
          onClick={() => setShow((e) => !e)}
          className="bg-blue-400 rounded-lg cursor-pointer p-4 text-white text-xl"
        >Data Haruulah</button>
        </div>
      {show === true && (
        <div className="m-4 space-y-4 ">
          <div>
            <label className="text-3xl font-semibold ">Нэр:</label>
          </div>
          <div>
            <label className="text-3xl font-semibold">Овог:</label>
          </div>
          <div>
            <label className="text-3xl font-semibold">Email:</label>
          </div>
          <div>
            <label className="text-3xl font-semibold">Нас:</label>
          </div>
        </div>
      )}
        </div>
    </div>
  );
}