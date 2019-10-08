import axios from 'axios'
import moment from 'moment-timezone'

import generateColors from 'distinct-colors'

const BASE_URL = process.env.REACT_APP_BASE_URL
const TODAY_URL = `${BASE_URL}/24h`

export default class ApiService {
  static async getToday({ setDatasets, setError }) {
    axios
      .get(`${TODAY_URL}`)
      .then(response => {
        console.log('data', response.data)
        const datasets = transformToDatasets(response.data)
        setDatasets(datasets)
      })
      .catch(e => {
        console.error(e)
        setError('getToday error')
      })
  }
}

function transformToDatasets(data) {
  console.log('transform start')
  const commentDataset = []
  const voteDataset = []

  const colors = generateColors({
    count: data.length
  })

  data.forEach((post, index) => {
    const commentCoordinates = []
    const voteCoordinates = []
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
    commentDataset.push({
      data: commentCoordinates,
      label: post.post_name,
      fill: false,
      backgroundColor: colors[index],
      borderColor: colors[index]
    })
    voteDataset.push({
      data: voteCoordinates,
      label: post.post_name,
      fill: false,
      backgroundColor: colors[index],
      borderColor: colors[index]
    })
  })

  console.log('transform complete')
  return {
    commentDataset,
    voteDataset
  }
}
