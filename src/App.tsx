import { useState } from "react"
import ImageHeader from "./components/ImageHeader";

type Items={
  title: string,
  id: string,
};

function App() {
  const [items, setItems] = useState<Items[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setItems((prev) => [...prev, {title: inputValue, id:Date.now().toString()}]);
    setInputValue("");
  }

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((data) => data.id !== id));
  };
  
  return (
     <div className="bg-black h-screen flex flex-col items-center pt-32" >
      
      <ImageHeader />
      <h1 className="text-white text-2xl font-bold mb-5">To-Do App</h1>
      <div className="w-[350px]" >
        <form className="mb-5" onSubmit={handleSubmit}>
          <input 
          type="text" 
          value={inputValue}
          className="w-full p-2 rounded-sm mb-2" 
          onChange={(event)=> setInputValue(event.target.value)}/>
          <button type="submit" className="bg-red-700 w-full p-2 text-white">+ Add</button>
        </form>
        {items.map((data) => (
          <div  key={data.id}
          className="h-53 overflow-y-auto border border-gray-300 rounded-md p-4 flex justify-between items-center">
            <p className="text-white">{data.title}</p>

            <button
             onClick={()=>handleDelete(data.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
              aria-label="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
