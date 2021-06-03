# Javascript_everywhere book study

Original : https://github.com/javascripteverywhere/api

노트 앱을 사용하기 위한 백엔드 부분입니다.

## Skills

1. ### graphql

   현재 널리 사용되는 Structed Query Language  와 마찬가지로 쿼리 언어입니다. 하지만 둘의 사용 용도는 다릅니다. sql은 **데이터베이스 시스템**에 저장된 데이터를 효율적으로 가져오는 것이 목적이고, gql은 **웹 클라이언트**가 데이터를 서버로 부터 효율적으로 가져오는 것이 목적입니다. 이러한 차이로 sql의 문장(statement)은 주로 백앤드 시스템에서 작성하고 호출 하는 반면, gql의 문장은 주로 클라이언트 시스템에서 작성하고 호출 합니다.

    HTTP API 자체가 특정 데이터베이스나 플랫폼에 종속적이지 않은 것 처럼 gql 역시 어떠한 특정 데이터베이스나 플렛폼에 종속적이지 않습니다. 심지어 네트워크 방식에도 종속적이지 않습니다.

2. #### Mongo DB

   몽고 디비는 대표적인 NoSQL 데이터베이스 입니다. 동적 스키마형 도큐먼트를 선호하고 따라 전통적인 테이블 기반 관계형 데이터베이스의 구조를 따르지 않습니다.

3. #### 아폴로 서버

   1. 쿼리 및 뮤테이션을 직접 전송합니다. 이러한 이점은 API 서버에서 데이터를 가져오기 위한 네트워크 단의 HTTP 요청을 신경쓸 필요가 없다는 것입니다. fetch 나 axios 를 사용할 필요가 없어집니다.

   2. 아폴로 서버는 쿼리를 통해 전송 받은 데이터를 자동으로 캐싱합니다.

      그에 따라, 클라이언트의 반복 요청을 줄여 서버 부하를 줄일 수 있을 뿐만 아니라, 서비스를 이용하는 사람들에게 더 나은 사용자 경험을 제공할 수 있습니다.

   3. 아폴로를 사용하면 GraphQL 서버에 Query, Mutation, Resolver 를 작성하듯이, 동일하게 클라이언트에서도 클라이언트 만의 Local state 를 만들어 사용이 가능합니다.

## 설치하기

1. `git clone https://github.com/JungSangHyup/Javscript_everywhere_api.git`

2. .env.example 수정하기

   `DB_HOST=<Your MongoDB URL>`    
   `TEST_DB=<A MongoDB URL for Running Tests>`

   `Authentication`                
   `JWT_SECRET=<Your json web token secret>`

    DB_HOST 후에 MongoDB URL을 연결시켜 줍니다.

3.
    `npm install` 로 종속된 노드모듈을 다운로드 합니다.

### 종속된 모듈


###### 암호화 관련

`bcrypt: ^5.0.1`
`cors: 2.8.5`
`dotenv: 6.1.0`
`helmet: 3.21.2`
`jsonwebtoken: 8.5.1`
`md5: 2.2.1`
`passport: 0.4.0`
`passport-github2: 0.1.11`

###### 익스프레스 관련

​       `express: 4.16.4`
​      	`express-session: 1.15.6`

###### GraphQL

​      	`graphql: ^14.1.1`
​      	`graphql-depth-limit: 1.1.0`
​      	`graphql-iso-date: 3.6.1`
​      	`graphql-validation-complexity: 0.2.4`
​	 `apollo-server-express: ^2.24.0`

###### DB 관련

​    	`mongoose: ^5.12.9`

###### 개발자용

​      	`marked: 0.7.0`
​      	`nodemon: ^2.0.7`

## 사용법

`http://localhost:4001/api` 로 접속 후  signUp 으로 아이디 생성

![signUp](https://user-images.githubusercontent.com/51068026/120648505-ad913a00-c4b6-11eb-9363-7326f903c4d9.PNG)


signIn 입력 후 원하는 쿼리 입력하기, 하지 않을 시 일부 쿼리는 권한이 제한됨

![signIn](https://user-images.githubusercontent.com/51068026/120648549-b97cfc00-c4b6-11eb-8760-a57644fe7336.PNG)


쿼리 질문하기 (노트 model)

![query](https://user-images.githubusercontent.com/51068026/120648567-beda4680-c4b6-11eb-9023-ffda4acb562b.PNG)


쿼리 질문하기 (유저 model)

![user](https://user-images.githubusercontent.com/51068026/120648576-c26dcd80-c4b6-11eb-95d6-e016a12a7ff1.PNG)


