const axios = require('axios')
const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    const ids = response.data.map(item => item.id)
    return ids
  } catch (error) {
    throw error
  }
}

module.exports = getData