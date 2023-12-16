const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://sofeae2:sofea123@mernapp.ahktpon.mongodb.net/food-ordering?retryWrites=true&w=majority', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db