import React, { useState } from 'react'

const UseState = () => {
    const [count,setCount] = useState(0)
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const handleCount =()=>{
        setCount((count)=> count + 1)
    }

    const handleName =(event)=>{
        setName(event.target.value)
    }

    const handleEmail=(event)=>{
        setEmail(event.target.value)
    }
  return (
    <>
    <h1 className='text-2xl font-bold text-lime-400 underline underline-offset-3 justify-center'>Use State </h1>
    <div className='flex justify-center my-4'>
          <button onClick={handleCount} className='rounded px-3 py-2 text-center text-black bg-slate-400 '>click here </button>
          <h1 className='mx-4 my-2 font-bold'> {count} </h1>
    </div>
    <div className='my-6 '>
        <input name='name' placeholder='Enter your name' onChange={handleName} className='border border-sky-500 py-1 px-4 rounded-lg placeholder-emerald-400'/>
        <h1 className='my-3'>User name:{name}</h1>
        <input name='email' type='email' placeholder='Enter email' onChange={handleEmail} className='border border-sky-500 py-1 px-4 rounded-lg placeholder-emerald-400'/>
        <h1 className='my-3'>User Email :{email}</h1>
    </div>
    </>
  )
}

export default UseState