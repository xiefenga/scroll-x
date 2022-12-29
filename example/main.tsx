import React from 'react'
import styled from 'styled-components'
import { createRoot } from 'react-dom/client'
import ScrollX from '../'

const CardBox = styled.div`
  width: 100px;
  height: 200px;
  font-size: 20px;
  text-align: center;
  border: 1px solid;
  line-height: 200px;
  box-sizing: border-box;
  flex-shrink: 0;
`

const Card: React.FC<{title: string}> = (props) => {
  return (
    <CardBox>
      {props.title}
    </CardBox>
  )
}

const App: React.FC = () => {
  const renderList = () => {
    return [...new Array(100).keys()].map(i => (
      <Card key={i} title={i.toString()} />
    ))
  }
  return (
    <ScrollX
      gap={5}
      blockWith={100}
      leftArraw={'prev'}
      rightArraw={'next'}
    >
      <div style={{display: 'flex'}}>
        {renderList()}
      </div>
    </ScrollX>
  )
}

createRoot(
    document.getElementById('root') as HTMLDivElement
).render(
  <App />
)
