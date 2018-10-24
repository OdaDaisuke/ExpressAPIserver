import mongoose from 'mongoose'

mongoose.errorHandler = (err, callback) => {
  // define error
  return callback(err)
}

export default mongoose
