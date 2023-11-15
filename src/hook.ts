import { useContext } from 'react'
import ScrollXContext from '@/context'

export const useScrollXContext = () => {
  const ctx = useContext(ScrollXContext)
  return ctx
}

export const useResetScroll = () => {
  const { reset } = useContext(ScrollXContext)
  return reset
}

export const useUpdateScrollState = () => {
  const { updateScrollState } = useContext(ScrollXContext)
  return updateScrollState
}