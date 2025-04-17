import { useState , useEffect } from 'react'
import './App.css'

function App() {

  const [currentTime,setcurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setcurrentTime(new Date())  
    }, 1000);
  
    return () => clearInterval(timer)
    
  }, [])

  const HourFormatter = (hour)=>{
    return hour=== 0?12 : hour > 12 ? hour-12 : hour; 
  }

  const PreZero = (num)=>{
    return num<10? "0"+ num : num;
  }

  // below function (formatDate) seems little different. we have to keep memory of it
  const formatDate = (date)=>{
    const option = {weekday: "long", month: "long", year: "numeric", day:"numeric"}
    return date.toLocaleDateString(undefined, option);
  }

  return (
    <>
    <div className="digital-clock">
      <h2>Digital Clock</h2>
      <div className="time">{PreZero(HourFormatter(currentTime.getHours()))} : {PreZero(currentTime.getMinutes())} : {PreZero(currentTime.getSeconds())}{currentTime.getHours()>=12 ? " PM":" AM"}</div>
      <div className="date">{formatDate(currentTime)}</div>
    </div>
    </>
  )
}

export default App
