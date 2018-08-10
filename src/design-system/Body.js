import React from 'react'
import styled from 'styled-components'

const BodyStyle = styled.div`
  flex: 1 1 auto;
  background: hsl(30, 50%, 50%);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
`

export const Body = () => (
  <BodyStyle>Body</BodyStyle>
)
