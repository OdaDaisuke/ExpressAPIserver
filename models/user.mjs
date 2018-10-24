import mongoose from './db'
import moment from 'moment'

const UserSchema = new mongoose.Schema({
  // columns
})

UserSchema.pre('save', (next) => {
  // before filter
  next()
})

export default mongoose.model('User', UserSchema)
