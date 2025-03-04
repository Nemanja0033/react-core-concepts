import React, { useState } from 'react'

const UseState = () => {

  const [counter, setCounter] = useState(0); // state za brojac
  const [isLightOn, setIsLightOn] = useState(false); // state za prekidac
  const [textInput, setTextInput] = useState("");

  return (
    <div className={`${isLightOn ? 'bg-white' : 'bg-black text-white'}`}>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1 )}>-</button>
      <h1>Svetlo: {isLightOn ? 'Ukljuceno' : 'Iskljuceno'} </h1>
      <button onClick={() => setIsLightOn(!isLightOn)}>Prekidac za svetlo</button>
      <br />
      {/*dinamicki unos teksta i pirkaz istog  */}
      <input onChange={(e) => setTextInput(e.target.value)} type="text" placeholder='enter some text. . .' />
      <h1>unet tekst: {textInput}</h1>
    </div>
  )
}

export default UseState