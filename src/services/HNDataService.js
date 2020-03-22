import axios from 'axios'

import generateColors from 'distinct-colors'
import { sortBy } from 'lodash'

const BASE_URL = process.env.REACT_APP_HN_BASE_URL
const TOP_URL = `${BASE_URL}/topstories`

export default class DataService {
  static async getTopStories({ setDatasets, setStatus, setError }) {
    setTimeout(() => {
      setStatus('Calculating graphs...')
    }, 1500)
    axios
      .get(`${TOP_URL}`)
      .then(response => {
        setStatus('Calculating graphs...')
        const datasets = transformToDatasets(response.data)
        setDatasets(datasets)
      })
      .catch(e => {
        console.error(e)
        setError('Error getting top stories')
      })
  }
}

function transformToDatasets(data) {
  let scoreDatasets = []

  const colors = generateColors({
    count: data.length,
    lightMin: 35,
    lightMax: 95
  })

  data.forEach((post, index) => {
    if (post.score < 100) {
      return
    }

    let scoreCoordinates = []
    post.scores.forEach(poll => {
      scoreCoordinates.push({
        x: poll.polled_at,
        y: poll.score
      })
    })
    let meta = post
    delete meta.scores
    scoreDatasets.push({
      data: scoreCoordinates,
      label: post.title,
      fill: false,
      backgroundColor: colors[index].hex(),
      borderColor: colors[index].hex(),
      lineTension: 0.1,
      meta
    })
  })

  scoreDatasets = sortBy(scoreDatasets, ds => -ds.data[0].y)

  return scoreDatasets
}
