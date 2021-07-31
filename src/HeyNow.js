import React, { useState } from 'react'


export default function HeyNow(){
    const [words, setWords] = useState('words')

    return(
        <div>
             <h1>Hey Now!</h1>
             <button onClick={() => alert('Hey Now!')}>This is the button to do stuff!</button>
             <p>{words}</p>
        </div>
    )
}