## Sequlize db url로 접속하기

-   process.env.DATABASE_URL = mysql://ccc:ccc@localhost:3306/youtube
-   mysql://<username>:<password>@<host>:<port>/<db_name>
-   유저 id, 패스워드, 테이블 같이 넣어줘야한다.

-   mysql에서 유저 생성
    -   CREATE USER 'ccc'@'localhost' IDENTIFIED BY 'ccc';
    -   GRANT ALL PRIVILEGES ON _ . _ TO 'ccc'@'localhost';
    -   FLUSH PRIVILEGES;

```js
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});
(async () => await sequelize.sync({ alter: true }))();
```
