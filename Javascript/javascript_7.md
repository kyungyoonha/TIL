## # 자바스크립트 Symbol

### 1. 정의

-   ES6에서 추가된 자료형
-   원시타입: 객체도 아니고 메서드도 아닌 타입
-   Symbol()로부터 반환되는 값은 항상 고유하다(같은 value를 주더라도 다른 값으로 나타난다.)

```JSX
const s1 = Symbol();
const s2 = Symbol();
const aSymbol_1 = Symbol('a')
const aSymbol_2 = Symbol('a')

console.log(s1 === s2) // false
console.log(aSymbol_1 === aSymbol_2) // false
```

### 2. 목적

-   심볼 타입은 나만의 고유한 객체의 프로퍼티(object.property)를 정의할 수 있게된다.
-   나중에 같은 이름의 프로퍼티가 표준으로 채택된다고 하더라도 코드 충돌 없이 사용 가능

### 3. 사용

-   심볼 타입을 정의하고 정의한 이름을 대괄호를 이용해서 사용한다.

### 4. 예시

```JSX
// 내가 정의함
Number.isNumber = num => typeof num === 'number' ? '숫자' : '숫자 아님'
console.log(Number.isNumber(10)) // 숫자

// 아래와 같은 동일한 이름의 프로퍼티가 표준으로 새로 생기거나
// 다른 곳에서 새로 정의해준 경우 기존 코드를 수정해줘야한다. => 심볼타입 쓰면 문제없음
Number.isNumber = num => typeof num === 'number' ? true : false
console.log(Number.isNumber(10)) // true

// 심볼 이용
// 동일한 이름이더라도 문제없이 사용가능하다.
const inNumber = Symbol()
Number[isNumber] = num => typeof(num) === 'number ? '숫자' : '숫자 아님'
console.log(Number[isNumber](10)) // 숫자
```

### 5. 출처

-   https://geundung.dev/83
