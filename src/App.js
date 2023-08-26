import React ,{useState,useEffect} from 'react';
import './App.css';

function App() {

  const [days , setDays] = useState(0);
  const [Hours , setHours] = useState(0)
  const [minutes , setMinutes] = useState(0);
  const [seconds , setSeconds] = useState(0);


  const endDate =new Date("28 Aug 2023 06:00 PM");
  useEffect(() => {
    function updateCountdown() {
      const now = new Date().getTime();
      const diff = (endDate - now) / 1000;
      setDays(Math.floor(diff / 3600 / 24));
      setHours(Math.floor(diff / 3600) % 24);
      setMinutes(Math.floor(diff / 60) % 60);
      setSeconds(Math.floor(diff) % 60);
    }
  
    updateCountdown(); // Call once to initialize
  
    const interval = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main">
        <div className="overlay">
          <div className="title">We are coming soon</div>
          <div className="title" id='end-date'>{endDate.toLocaleString()}</div>
          <div className="col">
            <div>
              <input type="text" readOnly value={days} />
              <br/>
              <label >Days</label>
            </div>
            <div>
              <input type="text" readOnly value={Hours} />
              <br/>
              <label >Hours</label>
            </div>
            <div>
              <input type="text" readOnly value={minutes}/>
              <br/>
              <label >Minutes</label>
            </div>
            <div>
              <input type="text" readOnly value={seconds}/>
              <br/>
              <label >Second</label>
            </div>
        </div>
        </div>
        
    </div>
  );
}

export default App;
