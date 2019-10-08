import axios from 'axios'

const BASE_URL = process.env.REACT_APP_BASE_URL
const TODOS_URL = `${BASE_URL}/todos`

export default class TodoService {
  static async getTodos({ setTodos, setError }) {
    axios
      .get(`${TODOS_URL}?size=1000000`)
      .then(response => {
        setTodos(response.data)
      })
      .catch(e => {
        console.error(e)
        setError('getTodos error')
      })
  }
}
