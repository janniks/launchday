import React, { useState, useEffect } from 'react'

import { Result } from 'antd'

import DataService from 'services/DataService'
import ChartWrapper from 'components/ChartWrapper'
import TimeTick from 'components/TimeTick'

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
      <TimeTick />
      <ChartWrapper datasets={datasets} status={status} />
    </div>
  )
}

export default Today
