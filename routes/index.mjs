import express from 'express'
import movie from './movie'
import item from './item'
import user from './user'

const router = express.Router()

router.use('/movie', movie)
router.use('/item', item)
router.use('/user', user)

export default router
