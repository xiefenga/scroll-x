import { createContext } from 'react'
import { ScrollXContextValue } from '@/types/component'

const NOOP = () => { }

const ScrollXContext = createContext<ScrollXContextValue>({
  reset: NOOP,
  updateScrollState: NOOP,
})

export default ScrollXContext