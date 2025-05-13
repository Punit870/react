import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("olive")

  return (
    
    <div className='w-full h-screen duration-200' style={{
    backgroundColor: color}}>

        <div className='fixed flex flex-wrap  bottom-12 inset-x-0 px-2 justify-center' >

          <div className='flex flex-wrap
             gap-3 shadow-lg bg-white px-3 py-1 rounded-full justify-center'>
           
            <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red",  }}>red</button>

            <button onClick={()=>setColor("green")}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"green",  }}>green</button>

             <button  onClick={()=>setColor("lavender")} className='outline-none px-4 py-1  rounded-full text-white shadow-lg' style={{backgroundColor:"lavender",  }}>lavender</button>

            <button onClick={()=>setColor("blue")}  className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue",  }}>blue</button>

            
          </div>
        </div>


    </div>
     
    
  )
}

export default App
