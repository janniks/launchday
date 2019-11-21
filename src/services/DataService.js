import axios from 'axios'

import generateColors from 'distinct-colors'
import { sortBy } from 'lodash'

const BASE_URL = process.env.REACT_APP_BASE_URL
const TODAY_URL = `${BASE_URL}/today`

export default class DataService {
  static async getToday({ setDatasets, setStatus, setError }) {
    setTimeout(() => {
      setStatus('Calculating graphs...')
    }, 1500)
    axios
      .get(`${TODAY_URL}`)
      .then(response => {
        setStatus('Calculating graphs...')
        const datasets = transformToDatasets(response.data)
        setDatasets(datasets)
      })
      .catch(e => {
        console.error(e)
        setError('Error getting todays product information')
      })
  }
}

function transformToDatasets(data) {
  let commentDatasets = []
  let voteDatasets = []

  const colors = generateColors({
    count: data.length,
    lightMin: 35,
    lightMax: 95
  })

  data.forEach((post, index) => {
    let commentCoordinates = []
    let voteCoordinates = []
    post.counts.forEach(poll => {
      commentCoordinates.push({
        x: poll.polled_at,
        y: poll.comments_count
      })
      voteCoordinates.push({
        x: poll.polled_at,
        y: poll.votes_count
      })
    })
    commentDatasets.push({
      data: commentCoordinates,
      label: post.post_name,
      fill: false,
      backgroundColor: colors[index].hex(),
      borderColor: colors[index].hex(),
      lineTension: 0.1
    })
    voteDatasets.push({
      data: voteCoordinates,
      label: post.post_name,
      fill: false,
      backgroundColor: colors[index].hex(),
      borderColor: colors[index].hex(),
      lineTension: 0.1
    })
  })

  commentDatasets = sortBy(commentDatasets, ds => -ds.data[0].y)
  voteDatasets = sortBy(voteDatasets, ds => -ds.data[0].y)

  return {
    commentDatasets,
    voteDatasets
  }
}
