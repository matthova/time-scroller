import React, { PureComponent } from 'react'
import ReactDOM from 'react-dom'
import { range } from 'lodash'
import styled from 'styled-components'

import { Body } from '../design-system'

// background: ${props => `hsl(${props.index / 24 * 360}, 30%, 75%)`};
const TimeScrollerItem = styled.div`
  background: ${props => `hsl(${(props.index * 137.5) % 360}, 30%, 75%)`};
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const N_DAYS = 14

const currentHour = new Date().getHours() + N_DAYS * 12 // Get the halfway point

class TimeScroller extends PureComponent {
  state = {
    hours: range(N_DAYS * 24),
  }
  hourRefs = {};

  componentDidMount () {
    const currentHourNode = ReactDOM.findDOMNode(this.hourRefs[currentHour])
    const container = ReactDOM.findDOMNode(this.body)
    container.scrollTop = currentHourNode.offsetTop // add half of window height
  }
  hourToAMPM (hour) {
    return (((hour + 1) % 24) / 12) < 1 ? 'AM' : 'PM'
  }
  render () {
    console.log(this.hourRefs)
    return (
      <Body ref={ref => { this.body = ref }}>
        {this.state.hours.map(hour => (
          <TimeScrollerItem
            key={hour}
            index={hour}
            ref={ref => { this.hourRefs[hour] = ref }}
          >
            {hour % 12 + 1}:00 {this.hourToAMPM(hour)}
          </TimeScrollerItem>
        ))}
      </Body>
    )
  }
}

export default TimeScroller
