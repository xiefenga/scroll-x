import { createContext } from 'react'
import { ScollXContextValue } from '@/types/component'

const NOOP = () => { }

const ScollXContext = createContext<ScollXContextValue>({
  reset: NOOP,
  updateScrollState: NOOP,
})

export default ScollXContext