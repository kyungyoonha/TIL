## 제로초 강의

### 리덕스 사가
- request / success / failure 까지 정의해준다.
- throttle / takeLatest => 지연시켜주지만 둘다 리퀘스트는 발생한다, response만 한번 받음

### immer 
- 손쉽게 불변성을 유지시켜준다
- filter -> unshift
- 배열 합치기 -> concat

### 성능 최적화
- 프로젝트시 수천개의 데이터를 잘 처리해서 보여주는 것이 좋다.
- faker 이용


### facker
- 더미 데이터 사용하기 좋음
- 이미지까지

### 무한스크롤
```js
useEffect(() => {
    const scroll = () => {
        if (winodw.scrollY +  document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
            if(hasMorePost &&)
        }
        // 3가지만 있으면 됌
        // scollY(다 내렸을때) + clientHeight = scrollHeigth
        // scoll Y :얼마나 내렸는지
        // clientHieght: 보이는 화면 높이
        // scrollHeight: 총 길이
    }
    
    window.addEventListner('scroll', scroll)
    return () => window.removeEventListner('scroll', scroll)
}, [])
```

### 무한스크롤 scroll 이벤트시, requst 한번만 요청하기
- request -> isLoading : true
- success -> isLoading : false
- failure -> isLoading : false
- 즉, isLoading이 false일때만 추가로 불러오는 api를 요청하면 된다. 

### react-verturelize
- 너무많은 데이터를 가지고 오는 경우 메모리가 부족 -> 특히나 모바일
- 이런 경우 지나간 데이터는 메모리에만 있고 화면에서는 지워주고 새로운 데이터를 추가해준다.
- 인스타그램 같은 예시임
- 수백개가 이미 로딩되어 있고 화면에는 3개만 보인다 


### 서버와 프론트를 나누는 이유
- 대규모 앱이 되었을때는 나누는 것이 효과적이다.
- 메모리가 터지는 것을 방지하기 위해 스케일링을 해주는데 프론트랑 서버가 같이 구현되어있으면
- 스케일링 할때마다 전체가 다 복사되어 매우 비효율 적이다.
- 프론트는 서버사이드 렌더링, 백엔드는 API를 제공하는 역할을 하는데 한쪽에만 요청이 몰릴 수 있음
- 대규모 프로젝트에서는 기능별로 서버를 나눠준다 -> 특정 기능에 데이터 요청이 많이 왔을때 그 기능만 서버를 여러개로 늘려준다.
- 배민 같은 경우 피크타임때 주문용 서버, 결제용 서버만 여러개 늘려놓으면됌 -> 상품등록 /어드민은 늘릴필요가 없다.


### 노드는 서버가 아니다.
- 노드는 서버가 아니라 자바스크립트 런타임 환경임
- 따로 설치할 필요가 없고 http를 require하여 사용한다
- const http = require('http');

### REST API
- put -> 전체수정
- patch -> 부분수정
- options -> 찔러보기, 서버가 내 요청을 받아 줄 것인지 체크
- head -> 헤더만 가져오기