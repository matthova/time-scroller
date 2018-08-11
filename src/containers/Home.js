import React from 'react'
import { withSiteData } from 'react-static'

import { AppWrapper, Footer, Header } from '../design-system'
import TimeScroller from '../components/TimeScroller'

export default withSiteData(() => (
  <AppWrapper>
    <Header />
    <TimeScroller />
    <Footer />
  </AppWrapper>
))
