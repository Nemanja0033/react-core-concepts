import React, { useEffect, useState } from 'react'

const UseEffectComponent = () => {
    const [clickCounter, setClickCounter] = useState(Number(localStorage.getItem("clicks")) || 0); // preuzimanje broj pomocu objkta Number

    useEffect(() => {
        localStorage.setItem("clicks", clickCounter) // pri svakom renderovanju stavljamo clickCounter u localStorage
        document.title = `Broj klikova ${clickCounter}`; //prikazujemo ga unutar title-a pomocu template literala
    }, [clickCounter]); // dependecies array koristi clickCounter kao pokazivac kada pokrenuti effect, kad god se clickcCounter stanje promeni

  return (
    <div><button onClick={() => setClickCounter(clickCounter + 1)}>Click me!</button></div>
  )
}

export default UseEffectComponent