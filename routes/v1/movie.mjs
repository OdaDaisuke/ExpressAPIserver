import express from 'express'
const router = express.Router();

router.get('/all', (req, res) => {
  res.json({
    items: [
      {
        title: 'サンプル動画のタイトル',
        uri: 'http://s3-eu-west-1.amazonaws.com/sample/movie/movie1.mp4',
        description: 'サンプル動画の説明文章です。',
        ownerId: 'aocjej2938sksecieiajelcoeejlae'
      },
      {
        title: 'サンプル動画のタイトルA',
        uri: 'http://s3-eu-west-1.amazonaws.com/sample/movie/movie1.mp4',
        description: 'サンプル動画の説明文章です。A',
        ownerId: 'Aocjej2938sksecieiajelcoeejlae'
      },
      {
        title: 'サンプル動画のタイトルB',
        uri: 'http://s3-eu-west-1.amazonaws.com/sample/movie/movie1.mp4',
        description: 'サンプル動画の説明文章です。B',
        ownerId: 'Bocjej2938sksecieiajelcoeejlae'
      }
    ]
  })
})

export default router
