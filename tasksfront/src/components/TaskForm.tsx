import { ChangeEvent, FormEvent, useState } from "react";
import { createTaskRequest } from "../api/tasks";

export default function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });

  function handleChange(e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) {
    
    setTask({...task, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    const res = await createTaskRequest(task)
    const data = await res.json()
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="title"
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block  w-full my-2"
          placeholder="write a title"
          onChange={handleChange}
        ></input>

        <textarea
          name="description"
          placeholder="write a description"
          rows={3}
          className="border-2 border-gray-700 p-2 rounded-lg bg-zinc-800 block  w-full my-2"
          onChange={handleChange}
        ></textarea>

        <label className="inline-flex items-center gap-x-2" htmlFor="">
          <input className="h-5 w-5 text-indigo-600" type="checkbox" 
          onChange={() => setTask({ ...task, done: !task.done})}
          ></input>
          <span>Done</span>
        </label>

        <button className="bg-indigo-500 px-3 block py-2 w-full" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
