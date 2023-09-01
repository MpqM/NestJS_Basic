# Blog
#### ⚪ About Project
* ##### NestJS로 Blog API 만들기, 의존성 주입, 몽고DB 연동하기 연습
* ##### Blog글 객체에 대한 생성, 조회, 전체조회, 수정, 삭제, 전체삭제기능 API

* * *
#### ⚪ Usage
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

* * *
#### ⚪ Built With
<img alt="Html" src ="https://img.shields.io/badge/NestJS-E0234E.svg?&style=for-the-badge&logo=NestJS&logoColor=white"/> <img alt="Html" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>

* * *
#### ⚪ Getting Strated
* ##### Prerequisites: npm, node, MongoDB Connection URL
```bash
git clone https://github.com/MpqM/NestJS_Blog.git
cd {project}
npm install
# Change YOUR MONGODB CONNECTION STRING in ./src/app.moudle.ts
# development
npm run start
# watch mode
npm run start:dev
# production mode
npm run start:prod
# unit tests
npm run test
# e2e tests
npm run test:e2e
# test coverage
npm run test:cov
```

* * *
#### ⚪ Description 
* ##### getAllPost(): 모든 블로그 글 가져오기
* ##### createPost(): 새로운 블로그 글 작성
* ##### getPost(): 특정 ID의 블로그 글 가져오기
* ##### deletePost(): 특정 ID의 블로그 글 삭제
* ##### deleteAllPost(): 모든 블로그 글 삭제
* ##### updatePost(): 특정 ID의 블로그 글 업데이트
* ##### postman collection으로 테스트 가능

* * *
#### ⚪ Roadmap & Realization & Study
* ##### 디렉토리구조를 직접 설계하지 않아도 강제하기 때문에 편함
* ##### MONGODB말고 로컬 저장소에 블로그 데이터를 저장해봄 ./src/blog.data.json

* * *
#### ⚪ Writer
* ##### <span>okqkrwhdtjd@gmail.com
* <a href = "https://github.com/MpqM"><img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/></a> <a href = "https://MpqM.tistory.com/"> <img alt="Tistory" src ="https://img.shields.io/badge/Tistory-white.svg?&style=for-the-badge"/></a>

* * *
#### ⚪ Contributing
* ##### Fork the Project https://github.com/MpqM/NestJS_Blog
* ##### Create your Feature Branch (git checkout -b feature/AmazingFeature)
* ##### Commit your Changes (git commit -m 'Add some AmazingFeature')
* ##### Push to the Branch (git push origin feature/AmazingFeature)
* ##### Open a Pull Request

* * *
#### ⚪ Acknowledgments & License & reference
* ##### Nest is [MIT licensed](LICENSE).
* ##### Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
