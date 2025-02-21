import React from 'react'

const EventHandling = () => {
    const handleMouseEnter = (e:React.MouseEvent<HTMLDivElement>) => { 
        console.log('Mouse Entered',e.currentTarget);
    }

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => { 
        console.log('Button Clicked!',e.currentTarget);
    }
  return (
    <div onMouseEnter={handleMouseEnter}>
        <h1 >Handling Events With typescript</h1>
        <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}

export default EventHandling