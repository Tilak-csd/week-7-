import React, { useState } from 'react'
import { CountAtom } from './store/atom/count'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

export default function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  )
}
function Count() {
  return <div>
    <CountRender />
    <Button />
  </div>

}

function CountRender() {
  const count = useRecoilValue(CountAtom)
  return <div>
    <p>Count is {count}</p>
    <CountEvenRender />
  </div>
}

function CountEvenRender(){
  const count = useRecoilValue(CountAtom)
  return <div>
    {count % 2 == 0 ? "It is Even." : null}
  </div>
}

// This will re-render when ever button is clicked since the count value is changed
// function Button() {
//   console.log("re-render");

//   const [count, setCount] = useRecoilState(CountAtom)
//   return <div>
//     <button onClick={() => setCount(count + 1)}>
//       Increase
//     </button>
//     <button onClick={() => setCount(count - 1)}> Decrease</button>
//   </div>
// } 

// setCount(count => count +/- 1) prevents from re-render.
function Button() {
  const setCount = useSetRecoilState(CountAtom)
  console.log("re-button re-render");
  return <div>
    <button onClick={() => setCount(count => count + 1)}>
      Increase
    </button>
    <button onClick={() => setCount(count => count - 1)}> Decrease</button>
  </div>
} 