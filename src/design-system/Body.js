import React from 'react'
import styled from 'styled-components'

const BodyStyle = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
`

export const Body = ({ children }) => (
  <BodyStyle>{children}</BodyStyle>
)
