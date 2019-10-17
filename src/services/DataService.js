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
  let commentDataset = []
  let voteDataset = []

  const colors = generateColors({
    count: data.length,
    lightMin: 35,
    lightMax: 95
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
      borderColor: colors[index],
      lineTension: 0.1
    })
    voteDataset.push({
      data: voteCoordinates,
      label: post.post_name,
      fill: false,
      backgroundColor: colors[index],
      borderColor: colors[index],
      lineTension: 0.1
    })
  })

  commentDataset = sortBy(commentDataset, ds => -ds.data[0].y)
  voteDataset = sortBy(voteDataset, ds => -ds.data[0].y)

  console.log('transform complete')
  return {
    commentDataset,
    voteDataset
  }
}
