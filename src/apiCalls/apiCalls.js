const getMemes = () => {
  return fetch('https://www.reddit.com/r/memes.json')
  .then(response => {
    if(!response.ok) {
      throw new Error('Couldn\'t communicate with the server')
    }
    return response.json()
  })
  .catch(error => {
    console.log('Error message: ', error.message)
  })
}

export default getMemes