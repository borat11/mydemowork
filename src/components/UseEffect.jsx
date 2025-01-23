import React, { useEffect, useState } from 'react'

const UseEffect = () => {

  const [count,setCount] = useState(0)
  const [counts,setCounts] = useState(0)

  useEffect(()=>{
    console.log("this is using useeffect")
  },[counts])
  return (
    <>
        <h1 className='text-2xl font-bold text-lime-400 underline underline-offset-3 justify-center'>UseEffect</h1>
        <div className="my-5">
           <button className='border border-blue-300 rounded py-1 px-2 font-bold text-amber-900 text-center mx-3 bg-neutral-400 hover:bg-red-400 hover:text-black' onClick={()=>setCount((count)=>count+1)}>Click 1</button>
           <button className='border border-blue-300 rounded py-1 px-2 font-bold text-amber-900 text-center bg-neutral-400 hover:bg-red-400 hover:text-black' onClick={()=>setCounts((counts)=>counts+1)}>Click 2</button>
        </div>
    </>
  )
}

export default UseEffect