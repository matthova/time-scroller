import React from 'react'
import { withSiteData } from 'react-static'

import { AppWrapper, Body, Footer, Header } from '../design-system'

export default withSiteData(() => (
  <AppWrapper>
    <Header />
    <Body />
    <Footer />
  </AppWrapper>
))
