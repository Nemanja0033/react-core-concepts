import React, { useCallback, useMemo, useState } from 'react'

const UseCallbackComponent = () => {
    const [count, setCount] = useState(0);
    const [renderTester, setRenderTester] = useState(false); //adding tester state for testing if memoized func works

    console.log("This component is renderd. . ."); // loging to see when is this component are renderd
    const calc = () => {
        console.log('calc are rendered')
        return count + 2;
    }

    const memoizedCalc = useCallback(() => calc(), [count]); // memoizing func
 
    const result = useMemo(() => memoizedCalc(), [memoizedCalc]); // memoizing result
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setRenderTester(!renderTester)}>Test</button>
        <p>{result}</p>
    </div>
  )
}

export default UseCallbackComponent