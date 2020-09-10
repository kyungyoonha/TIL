## ※ 익명함수란?

-   ### 정의
    -   이름이 없는 함수로, 변수에 함수 코드를 저장하는 대신 함수명을 사용하지 않는다
    -   변수명을 마치 함수명처럼 사용해서 함수를 호출가능하다.
    -   함수를 변수에 저장하거나, 어떤 객체의 메서드로 설정하기 위해 콜백함수로도 쓰인다.

```javascript
// 익명 함수 1
var func = function (text) {
    alert("Hello, " + text);
};
func("text");

// 익명 함수 2
var func = (text) => {
    alert("Hello, " + text);
};
func();

// 즉시 실행함수 형태 1
(function (text) {
    alert("Hello, " + text);
})(
    // 즉시 실행함수 형태 2
    (text) => {
        alert("Hello, " + text);
    }
);
```

-   ### 출처
    -   https://dasima.xyz/javascript-anonymous-function/
    -   https://osxtip.tistory.com/635
