const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3004

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
