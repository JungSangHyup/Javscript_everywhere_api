// index.js
// This is the main entry point of our application
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 4001;
const DB_HOST = process.env.DB_HOST;

const db = require('./db');
const models = require('./models');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

// 비밀번호
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const passwordEncrypt = async password => {
  return await bcrypt.hash(password, saltRounds)
};

const getUser = token => {
  if(token){
    try{
      return jwt.verify(token, process.env.JWT_SECRET);
    } catch (err){
      throw new Error('Session invalid');
    }
  }
};

db.connect(DB_HOST);

// 아폴로 서버 설정
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const token =req.headers.authorization;
    const user = getUser(token);
    console.log(user);
    return { models, user };
  }}
);

// 아폴로 그래프 QL 미들웨어를 적용하고 경로를 /api로 설정
server.applyMiddleware({app, path: '/api'});

app.listen({port}, () => {
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
});


