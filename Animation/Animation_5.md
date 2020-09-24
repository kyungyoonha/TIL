## Intersection Observer

-   이미지 동적 로딩 기능
-   Target Element 가 화면에 노출되었는지 여부를 손쉽게 판단할 수 있는 API이다.
-   스크롤 이벤트로 구현하는 경우 스크롤에 따라서 특정 Element가 화면에 존재하는지 계산하는 코드를 만들어야 한다.
-   ### 사용예시

    -   페이지 스크롤 시 이미지를 Lazy-loading(지연 로딩)할 때
    -   Infinite scrolling(무한 스크롤)을 통해 스크롤할 때 새로운 콘텐츠를 불러올 때
    -   광고의 수익을 계산하기 위해 광고의 가시성을 참고할 때
    -   사용자가 결과를 볼 것인지에 따라 애니메이션 동작 여부를 결정할 때

-   ### 장점

    -   이미지가 사용자에게 보일때만 불러오는 동적 로딩 이므로
    -   이미지 개수가 많거나 용량이 큰 페이지를 불러오는 경우 네트워크 비용을 줄일 수 있다
    -   속도도 개선
    -   스크롤 이벤트를 따로 구현할 필요가 없어진다.
    -   수직뿐만아니라 수평이나 팝업시에도 구현이 가능하다(화면에 보이면 작동하므로)

-   ### 문제점

    -   https://caniuse.com/?search=Intersection%20Observer
    -   다른 브라우저 호환이 안됌 (firefox, safari, IE 등등)

-   ### 참고
    -   https://tech.lezhin.com/2017/07/13/intersectionobserver-overview
