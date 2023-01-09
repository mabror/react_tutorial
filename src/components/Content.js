import React from 'react'
import { useState } from 'react';




const Content = () => {
    const [name, setName] = useState('Abror')
    const [count, setCount] = useState(0)

    const handleNameChnge = () => {
      
        const names = ['bob', 'Kdb', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }

    const handlecLICK = () =>{
        setCount(count+1)
        console.log(count)
      }
    const handlecLICK2 = (name) =>{
        console.log(`${name} was clicked`)
      }
    const handlecLICK3 = (e) =>{
        console.log(e.target)
      }
  return (
    <main>
        <p>
            Hello {name}
        </p>
        <button onClick={handleNameChnge}>CHange name</button>
        <button onClick={handlecLICK}>Count</button>

        <button onClick={() => handlecLICK2('Dave')}>Click it2</button>
        <button onClick={(e) => handlecLICK3(e)}>Click it3</button>
    </main>
  )
}

export default Content