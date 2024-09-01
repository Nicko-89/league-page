const contentful = require('contentful')

const client = contentful.createClient({
  space: 'vcqjjufn470k',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'HGEFEEB-9ZVueLQyMvLtCmfLjX0sD25aSohhVse4yb0'
})

client.getEntry('12rKAi3rlgKk5VDDlULZrX')
  .then((entry) => console.log(entry))
  .catch(console.error)
