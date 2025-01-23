import React, { useEffect, useRef } from 'react';

const UseRef = () => {
    const inputRef = useRef(null);
    const colourRef = useRef(null);
    const videoRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    
    useEffect(() => {
        colourRef.current.style.background = "skyBlue"
    }, [])

    const handleplay =()=>{
        videoRef.current.play()
    }

    const handlePause =()=>{
        videoRef.current.pause()
    }

    return (
        <>  
            <div className='text-2xl font-bold text-lime-400 underline underline-offset-3 justify-center'>UseRef</div>
            <div className='my-5'>
                <input ref={inputRef} placeholder='this is input'className='px-6 py-1' /><br/>
                <input ref={colourRef}  placeholder='this is coloured ' className='px-6 py-1 my-3 rounded'/>
            </div>
            <div className="my-5">
                 <video ref={videoRef} controls width={500} height={200} className='mx-80 border border-blue-600 border-double rounded-3xl'><source src='..\src\assets\video demo.mp4'/></video>
                 <button onClick={handleplay} className='my-5 mx-3 border border-black py-2 px-4 rounded bg-green-500'>Play</button>
                 <button onClick={handlePause} className='my-5 border border-black py-2 px-4 rounded bg-green-500'>Pause</button>
            </div>
            
           
        </>
    );
}

export default UseRef;
