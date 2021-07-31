import React, { useState } from 'react'


export default function HeyNow(){
    const [words, setWords] = useState('words')

    function updateWords() {
        setWords('These are the NEW words!')
    }

    return(
        <div>
             <h1>Hey Now!</h1>
             <button onClick={updateWords}>This is the button to do stuff!</button>
             <p>{words}</p>
        </div>
    )
}