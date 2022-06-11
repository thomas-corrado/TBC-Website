import './App.css';
import './index.css';
import Vids from './components/Vids'; 
import Photos from './components/Photos'; 


function App() {
  return (
    <div className='all'>
        <div className="green-box"> 
            <h1 id="title-header">TBC Guide Services</h1>
        </div>
        <Vids></Vids>
        <div className='buttons'>
            <button id="button-1" type="button">About</button>
            <button id="button-2" type="button">Bookings</button>
            <button id="button-3" type="button">Location</button>
            <button id="button-4" type="button">Photos & Videos</button>
            <button id="button-5" type="button">Testimonials</button>
        </div>
        <div className='welcome'>
            <h4>WELCOME TO THE PREMIER</h4>
            <h4>FISHING EXPERIENCE IN THE UPPER VALLEY</h4>
        </div>
        <div className='grey-box' >
            <h1 id="address-and-number">4 Hunter Lane Hanover, NH 03755 • (828)-246-5616</h1>
        </div>
        <div className='photo-box-home'>
           <Photos></Photos>
        </div>
    </div>
    

  );
}

export default App;
