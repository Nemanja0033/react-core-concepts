import React, { useContext } from 'react'
import UseState from './useState/UseStateComponent'
import UseEffectComponent from './useEffect/UseEffectComponent'
import { ThemeContext } from './useContext/UseContextComponent'
import UseCallbackComponent from './useCallback/useMemoComponent'

export const App = () => {
  // const { isDark, toggleTheme} = useContext(ThemeContext);

  return (
    <div>
      {/* <UseState /> */}
      {/* <UseEffectComponent /> */}
      {/* <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>Theme: {isDark ? 'Dark' : 'Light'}</h1> */}
      <UseCallbackComponent />
    </div>
  )
}

export default App
