import React, { useState } from 'react'
import { CountAtom } from './store/atom/count'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'

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
  </div>

}

function CountRender() {
  const count = useRecoilValue(CountAtom)
  return <div>
    <p>Count is {count}</p>
    <Button></Button>
  </div>
}

function Button() {
  const [count, setCount] = useRecoilState(CountAtom)
  return <div>
    <button onClick={() => setCount(count + 1)}>
      Increase
    </button>
    <button onClick={() => setCount(count - 1)}> Decrease</button>
  </div>
} 