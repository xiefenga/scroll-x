import { useContext } from 'react'
import ScollXContext from '@/context'

export const useScrollXContext = () => {
  const ctx = useContext(ScollXContext)
  return ctx
}

export const useResetScroll = () => {
  const { reset } = useContext(ScollXContext)
  return reset
}

export const useUpdateScrollState = () => {
  const { updateScrollState } = useContext(ScollXContext)
  return updateScrollState
}