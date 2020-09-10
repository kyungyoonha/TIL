## ※ 콜백함수 & 익명함수

-   ### 1. 콜백함수

    -   #### 1-1 정의

        -   함수 안에서 어떤 특정 시점에 호출되는 함수
        -   보통 함수의 매게변수로 전달하여 특정 시점에 콜백함수를 호출한다.
        -   비동기적 (Asynchronous) 방식으로 쓰인다.
        -   특정 로적이 끝날때까지 기다리지 않고 나머지 코드를 먼저 실행한다.
        -   콜백함수를 통해 특정 로직이 끝났을 때 동작을 실행 시킬수 있다

    -   #### 1-2 Ajax 통신 콜백사용 예제

        ```javascript
        function getData(callbackFunc) {
            $.get("https://domain.com/products/1", function (response) {
                callbackFunc(response); // 서버에서 받은 데이터 response를 callbackFunc() 함수에 넘겨줌
            });
        }

        getData(function (tableData) {
            console.log(tableData); // $.get()의 response 값이 tableData에 전달됨
        });
        ```

    -   #### 1-3 익명함수 예제

        ```javascript
        function func(callback) {
            console.log(typeof callback);
            // 넘어온 함수 실행하기
            callback();
        }

        var aFunc = function () {
            console.log("익명함수 호출됨...");
        };

        func(aFunc);
        ```

    -   #### 1-4 출처
        -   https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/
        -   https://deftkang.tistory.com/20

-   ### 2. 익명함수

    -   #### 2-1 정의

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

    -   #### 2-2 출처
        -   https://dasima.xyz/javascript-anonymous-function/
        -   https://osxtip.tistory.com/635
