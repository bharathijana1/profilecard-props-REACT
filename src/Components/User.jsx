import React from 'react'

export default function User( {uname, place, alt, destination, skills, uimg, online } ) {
  return (
    <div className='mx-auto w-full  '>
        <div className='bg-blue-900 text-white py-7 w-full ' style={{height:"550px"}}>
          
        <div className='ps-6'>
        <h1 className={`${online ? "bg-green-700" : "bg-yellow-700"} w-24 h-8 capitalize flex justify-center items-center`}>
        {online ? "Online" : "Offline"}
        </h1>
        </div>
        <div className='flex flex-col items-center gap-2 justify-center'>
        <img src={uimg} alt={alt} className='border border-white rounded-full h-24 w-24 p-1'  /> 
        </div>

        <div className='flex justify-center items-center flex-col gap-2'>
        <h1 className='capitalize text-xl pt-3 md:text-2xl font-medium'>{uname}</h1>
        <h1 className='capitalize text-lg'>{place}</h1>
        <h1 className='capitalize text-lg text-gray-300'>{destination}</h1>
        <div>
        <button className='border border-white bg-blue-700 hover:bg-blue-800 p-1 px-4 capitalize m-2'>following</button>
        <button className='border-2 border-blue-700 hover:bg-blue-800 p-1 px-4 capitalize m-2'>message</button>
        </div>
            
        </div>

        
        
        <h1 className='capitalize text-lg font-medium p-2 ps-8'>skills</h1>
        <ul className='flex gap-2 flex-wrap justify-center'>
            {
                skills.map((li, index) => (
                    <li className='border border-gray-300 p-1 px-4 capitalize text-gray-300' key={index}>{li}</li>
    
                ))
            }
        </ul>

        </div>
        

        
      
    </div>
  )
}
