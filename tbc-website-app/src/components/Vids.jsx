import React from 'react'; 
import videoBG from '../videos/DJI_0596.MOV.mp4'


const Vids = () => {
    return (
        <div className='vids'>
            <div className='overlay'></div>
            <video src={videoBG} autoPlay loop muted/>
        </div>
    )
}

export default Vids