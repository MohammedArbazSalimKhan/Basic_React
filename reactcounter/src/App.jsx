import { useState } from 'react'
import './index.css'
function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
      console.log('Value after Adding is ', { counter });
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
      console.log('Value after Removing is ', { counter });
    }
  }
  return (
    <>
      <div className="bg-green-500 mt-20">

        <h1 className='bg-green-200 text-black p-4'>Hello ,Arbaz | Here We are Learing Hooks in React.</h1>
        <h2>Counter App {counter}</h2>
        <button onClick={addValue}> Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
      </div>
      <div className="flex h-screen items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Tailwind CSS + Vite + React ✅
        </h1>
      </div>

    </>
  )
}

export default App
