import { PropsWithChildren } from 'react'

export type Fn = () => void

export type PropsWithClassName<P = unknown> = P & { className?: string }

export type EnhanceProps<P = unknown> = PropsWithChildren<PropsWithClassName<P>>