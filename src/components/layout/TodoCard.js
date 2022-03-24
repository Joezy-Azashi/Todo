import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react';
import { v4 } from "uuid";

function TodoCard() {

    const [input, setInput] = useState("")
    const [data, setData] = useState(JSON.parse(localStorage.getItem("newData")) || [])

    const addTodo = () => {
        let updatedTodo = [
            ...data,
            {
                id: v4(),
                title: input
            }
        ]
        localStorage.setItem("newData", JSON.stringify(updatedTodo))
        window.location.reload()
    }

    const deleteRecord = (id) => {

        for (var i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                data.splice(i, 1)
                localStorage.setItem("newData", JSON.stringify(data))
                window.location.reload()
            }
        }
    }
    return (
        <div className='flex justify-center drop-shadow-2xl mt-[-20px] md:mt-[-55px]'>
            <div className='w-[80%] md:w-[60%] min-h-[70vh] bg-white rounded-md py-5 px-3 md:py-6 md:px-12 mb-5'>
                <div className='grid grid-cols-1 sm:flex md:flex lg:flex gap-4'>
                    <input type="text" value={input} placeholder='What do you have to do' className="w-full sm:w-full md:w-80 lg:w-full p-2 rounded-2xl drop-shadow- border-2 border-slate-300" onChange={(e) => setInput(e.target.value)} />
                    <button className='bg-blue-500 p-2 rounded text-white w-full sm:w-32 md:w-32 text-sm' onClick={addTodo} disabled={input === ""}>Add</button>
                </div>

                <div className="mt-10">
                    {data?.map((data) => {
                        return (
                            <div key={data?.id}>
                                <div className='flex justify-between'>
                                    <p className='text-gray-500 text-lg mb-1'>{data?.title}</p>
                                    <div className='flex items-center ml-6'><FeatherIcon icon="trash-2" size="20" className="cursor-pointer" onClick={() => deleteRecord(data?.id)} /></div>
                                </div>
                                <hr className='mb-3' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TodoCard