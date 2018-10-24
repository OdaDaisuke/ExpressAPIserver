import express from 'express'
import User from '../../models/user'
const router = express.Router()

router.get('/all', (req, res) => {
  res.json({
    items: [
      {
        title: 'サンプルアイテム名',
        uri: 'http://s3-eu-west-1.amazonaws.com/sample/item/item.mp4',
        description: 'サンプルアイテムの説明文章です。',
        ownerId: 'aocjej2938sksecieiajelcoeejlae'
      },
      {
        title: 'サンプルアイテム名A',
        uri: 'http://s3-eu-west-1.amazonaws.com/sample/item/itemA.mp4',
        description: 'サンプルアイテムAの説明文章です。',
        ownerId: 'Aocjej2938sksecieiajelcoeejlae'
      },
      {
        title: 'サンプルアイテム名B',
        uri: 'http://s3-eu-west-1.amazonaws.com/sample/item/itemB.mp4',
        description: 'サンプルアイテムBの説明文章です。',
        ownerId: 'Bocjej2938sksecieiajelcoeejlae'
      }
    ]
  })
})

export default router
