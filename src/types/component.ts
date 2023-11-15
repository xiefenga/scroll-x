import React from 'react'
import { ReactNode } from 'react'
import { Fn } from '@/types/util'

export interface ScrollXContextValue {
  reset: Fn
  updateScrollState: Fn
}

export interface ScrollXProps {
  blockWith: number
  style?: React.CSSProperties
  gap?: number
  leftArrow: ReactNode
  rightArrow: ReactNode
}

export interface ScrollXContainerProp {
  gap: number
  preVisible: boolean
  nextVisible: boolean
}