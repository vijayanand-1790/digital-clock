import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000);
    return ()=> clearInterval(timer)
  }, [])

  const convertTo12 = (hour) => {
    return hour === 12 ? 12 : hour > 12 ? hour - 12 : hour
  }

  const AddZeroinFront = (num) => {
    return num < 10 ? "0" + num : num;
  }

  const formatDate = (date) => {
    const option = { weekday: "long", month: "long", year: "numeric", day: "numeric" }
    return date.toLocaleDateString(undefined, option);
  }

  return (
    <>
      <div className='digital-clock'>
        <h2>Digital Clock</h2>
        <div className='time'>
          {AddZeroinFront(convertTo12(currentTime.getHours()))} : {AddZeroinFront(currentTime.getMinutes())} : {AddZeroinFront(currentTime.getSeconds())} <span>{currentTime.getHours() >= 12 ? "PM" : "AM"}</span>
        </div>
        <div className='date'> {formatDate(currentTime)} </div>
      </div>
    </>
  )
}

export default App