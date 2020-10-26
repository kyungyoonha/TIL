## Express 정적 파일 제공

```js
app.use(express.static("public"));
// public 디렉토리에 있는 파일을 업로드 할 수 있다.
// http://localhost:3000/images/kitten.jpg
// http://localhost:3000/css/style.css
app.use("/static", express.static("public"));
// http://localhost:3000/static/images/kitten.jpg
// http://localhost:3000/static/css/style.css
app.use("/static", express.static(path.join(__dirname, "public")));
// 디렉토리는 상대적이므로 절대경로로 사용하는 것이 좋다.
```

### 참고

-https://expressjs.com/en/starter/static-files.html

## body-parser

-   미들웨어
-   API 요청받은 body 값을 파싱하는 역할
-   처음 request.body는 default 값이 undefined 이므로 데이터를 가지고 올수 없음
-   설치 후에는 request.body로 데이터 값을 쉽게 가지고 올 수 있다

```js
app.use(bodyParser.json());
// application/json 방식의 Content-Type 데이터
app.use(bodyParser.text());
// text/xml 방식의 Content-Type 데이터
app.use(bodyParser.urlencoded({ extended: true }));
// application/x-www-form-urlencoded Content-Type 데이터
// { extended: false } => 노드의 querystring 모듈을 사용하여 쿼리스트링을 해석
// { extended: true }  => qs 모듈을 사용하여 쿼리스트링을 해석한다.
// => qs모듈은 내장 모듈이 아니라 npm 패키지이며 queryStirng 모듈 기능을 좀더 확장
```
