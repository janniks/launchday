import React, { useState, useEffect } from 'react'

import moment from 'moment-timezone'

const PHTimeTick = () => {
  const [tick, setTick] = useState(-1)

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTick(tick + 1)
    }, 30000)
    return () => {
      clearInterval(intervalID)
    }
  })

  return (
    <div>
      <p>
        It's currently{' '}
        {moment()
          .tz('America/Los_Angeles')
          .format('hh:mm A')}{' '}
        at ProductHunt!
      </p>
    </div>
  )
}

export default PHTimeTick
