import React from 'react'
import { useRef, useState, useEffect } from 'react'

import ScrollXContext from '@/context'
import { EnhanceProps } from '@/types/util'
import { ScrollXProps } from '@/types/component'
import ScrollXContainer from '@/components/ScrollXContainer'

type ScrollXEnhancedProps = EnhanceProps<ScrollXProps>

const ScrollX: React.FC<ScrollXEnhancedProps> = (props) => {

  const {
    gap = 0,
    style = {},
    blockWith,
    children,
    leftArrow: leftArrow,
    rightArrow: rightArrow,
    className = '',
  } = props

  const [offset, setOffset] = useState(0)

  const listRef = useRef<HTMLDivElement>(null)

  const [preVisible, setPreVisible] = useState(false)

  const [nextVisible, setNextVisible] = useState(true)

  const updateScrollState = () => {
    if (listRef.current) {
      const listDOM = listRef.current
      setPreVisible(offset > 0)
      setNextVisible(offset + listDOM.clientWidth < listDOM.scrollWidth)
      listDOM.style.transform = `translateX(-${offset}px)`
    }
  }

  useEffect(() => {
    updateScrollState()
  }, [offset])

  useEffect(() => {
    window.addEventListener('resize', updateScrollState)
    return () => {
      window.removeEventListener('resize', updateScrollState)
    }
  }, [offset])

  const scrollPrev = () => {
    if (listRef.current) {
      const listDOM = listRef.current
      const x = Math.floor(listDOM.clientWidth / blockWith)
      const scrollWidth = x * blockWith
      setOffset(offset => Math.max(offset - scrollWidth, 0))
    }
  }

  const scrollNext = () => {
    if (listRef.current) {
      const listDOM = listRef.current
      const x = Math.floor(listDOM.clientWidth / blockWith)
      const scrollWidth = x * blockWith
      const maxOffsetX = listDOM.scrollWidth - listDOM.clientWidth
      setOffset(offset => Math.min(offset + scrollWidth, maxOffsetX))
    }
  }

  const contextValue = {
    updateScrollState,
    reset: () => setOffset(0),
  }

  const containerProps = {
    gap,
    preVisible,
    nextVisible,
  }

  // TODO: add Resize Observer
  return (
    <ScrollXContext.Provider value={contextValue}>
      <ScrollXContainer style={style} className={className} {...containerProps}>
        <div className='scroll-x'>
          <div className='pre-button' onClick={scrollPrev}>
            {leftArrow}
          </div>
          <div className='list-wrapper'>
            <div ref={listRef} className='scroll-list'>
              {children}
            </div>
          </div>
          <div className='next-button' onClick={scrollNext}>
            {rightArrow}
          </div>
        </div>
      </ScrollXContainer>
    </ScrollXContext.Provider>
  )
}

export default ScrollX