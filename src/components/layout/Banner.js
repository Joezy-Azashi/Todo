import React from 'react'

function Banner() {  
    return (
        <div>
            <div className="flex items-center justify-center h-32 md:h-60 bg-no-repeat bg-cover bg-[url('https://images.pexels.com/photos/1072179/pexels-photo-1072179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]">
                <h1 className='text-white text-5xl font-bold'>Todo</h1>
            </div>
        </div>
    )
}

export default Banner