const express = require('express');
const { sequelize } = require('./config/database');
const postRoutes = require('./routes/posts');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comments');
const Post = require('./models/post');

// Sequelize 초기화
sequelize.sync({ force: false })
  .then(() => {
    console.log('Sequelize와 데이터베이스 연결 완료');
  })
  .catch((error) => {
    console.error('Sequelize와 데이터베이스 연결 오류:', error);
  });

const app = express();
app.use(express.json());

// 블로그 포스트 라우터 연결
app.use('/posts', postRoutes);

// 인증 라우터 연결
app.use('/auth', authRoutes);

// 댓글 라우터 연결
app.use('/comments', commentRoutes);

// 서버 시작
const port = 3000;
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});
