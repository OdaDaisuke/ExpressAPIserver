import express from 'express'
import movie from './movie'
import item from './item'

const router = express.Router()

router.use('/movie', movie)
router.use('/item', item)

export default router
