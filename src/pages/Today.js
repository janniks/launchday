import React, { useState, useEffect } from 'react'

import { Result } from 'antd'
import moment from 'moment-timezone'

import DataService from 'services/DataService'
import ChartWrapper from 'components/ChartWrapper'

const Today = () => {
  const [error, setError] = useState(false)
  const [status, setStatus] = useState('Fetching data...')
  const [datasets, setDatasets] = useState(false)

  useEffect(() => {
    DataService.getToday({ setDatasets, setStatus, setError })
  }, [])

  if (error) {
    return <Result status="warning" title="Error" subTitle={error} />
  }

  return (
    <div>
      <p>
        It's currently{' '}
        {moment()
          .tz('America/Los_Angeles')
          .format('hh:mm A')}{' '}
        at ProductHunt!
      </p>
      <ChartWrapper datasets={datasets} status={status} />
    </div>
  )
}

export default Today
