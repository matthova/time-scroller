import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.div`
  flex: 0 0 100px;
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Header = () => (
  <HeaderStyle>Header</HeaderStyle>
)
