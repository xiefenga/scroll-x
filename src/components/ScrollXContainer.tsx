import styled, { css } from 'styled-components'
import { ScrollXContainerProp } from '@/types/component'

const ScrollXContainer = styled.div<ScrollXContainerProp>`
  .scroll-x {
    display: flex;
  }

  .pre-button, .next-button {
    cursor: pointer;
    user-select: none;
  }
  
  .pre-button {
    margin-right: ${props => props.gap}px;
    ${props => !props.preVisible && css`display: none;`}
  }

  .next-button {
    margin-left: ${props => props.gap}px;
    ${props => !props.nextVisible && css`display: none;`}
  }

  .list-wrapper {
    overflow: hidden;
    flex-grow: 1;
  }

  .scroll-list {
    transition: transform .3s;
  }
`

export default ScrollXContainer
