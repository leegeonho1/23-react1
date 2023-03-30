# 23 -React1
## 201930419_이건호

## 2023년 03월 30일 (5주차)
***
# 1교시

  ## 엘리먼트의 정의
    엘리먼트는 리액트 앱을 구성하는 요소를 의미한다
      
      
    공식 페이지에는 **엘리먼트는 리액트 앱의 가장 작은 빌딩 블록들** 이라고 설명한다.
      
      
    웹 사이트의 경우는 DOM 엘리먼트이며 HTML 요소를 의미한다.
      
***
  ## 리액트 엘리먼트와 DOM 엘리먼트의 차이점
  리액트 엘리먼트는 Virtual Dom의 형태를 취하고 있다
  
  
  DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어서 무겁다
  
  
  반면 리액트 엘리먼트는 __변화한 부분만 갖고 있어서 가볍다__
  
  아래 예시
  
  ![image](https://user-images.githubusercontent.com/118963538/228704128-101a8753-e855-4a6d-9d85-cef1f92c143c.png)


***
## 2023년 03월 23일 (4주차)
# 1교시
1. 기존에 있던 README.md 파일 백업
2. local에 있는 저장소 이름을 변경/삭제
3. 새 프로젝트 생성 23-react1
4. README.md 덮어쓰기
5. GitHub 저장소 삭제
6. 로컬에서 23-react1 push
7. GitHub 저장소 확인

***
![image](https://user-images.githubusercontent.com/118963538/227082177-555017a2-f993-40a9-bbcb-479809f9c493.png)
***
이후 터미널에 cd 23-react1 입력


npm start

![image](https://user-images.githubusercontent.com/118963538/227083002-bccc50b7-3de0-4bf2-93e7-f00b4c9c0aac.png)

브라우저의 새 창이 열리면서 'http://localhot:3000'으로 접속이 된다.

***

# 2교시
***

## git clone 리포지토리 복제

Github에서 파일을 내려받고 싶다면 code 버튼을 눌러 HTTPS를 복사 후 VSCode 터미널에 복사한 링크를 입력
이후 파일을 내려 받을 수 있음


![image](https://user-images.githubusercontent.com/118963538/227087232-f839da8c-cd6d-4ecb-a5bd-01ad5a01f4a5.png)

***
# 3교시
***

**JSX**란  JavaScript를 확장한 문법입니다.

UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장합니다

## JSX에 표현식 포함하기
예시에서는 name 이라는 변수를 선언한 후 중괄호로 감싸 JSX안에 사용하였다.

![image](https://user-images.githubusercontent.com/118963538/227092739-66ac731f-cb44-4642-9258-a3f5583d712a.png)

JSX의 중괄호 안에는 유효한 모든 JavaScript 표현식을 넣을 수 있다. 예시를 들자면 2 + 2 , user.firstName 또는 formatName(user) 등은 모두 유효한 JavaScript 표현식이다.

## JSX도 **표현식**이다.

컴파일이 끝나면 JSX표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식이 된다.

## JSX 속성 정의

어트리뷰트에 따옴표를 이용해 문자열 리터럴을 정의할 수 있다.

중괄호를 사용하여 어트리뷰트에 JavaScript표현식을 삽일할 수도 있다.

![image](https://user-images.githubusercontent.com/118963538/227093391-54ffd296-e6f2-4e77-b5ec-a844aa0affb7.png)

## JSX의 역활
  JSX는 내부적으로 XML/HTML 코드를 자바스크립트로 변환한다.
  
  React가 createElement 함수를 사용하여 자동으로 자바스크립트로 변환해준다.
  
  만일 JS작업할 경우 직접 **createElement**함수를 사용해야한다.
  
  JSX는 가독성을 높여주는 역활을 한다.
  
     가독성을 높여 주는게 장점이다.
     
***
## JSX의 장점
     코드가 간결해진다.
   
     가독성이 향상된다.
   
     Injection Attack이라는 불리는 해킹 방법을 방어함으로써 보안에 강하다.
  
***
## JSX 사용법

     모든 자바스크립트 문법을 지원한다.
     
     자바스크립트 문법에 XML과 HTML을 섞어서 사용한다.
     
     만일 html이나 xml에 자바스크립트 코드를 사용하고 싶으면 {}괄호를 사용한다.
     
     위 설명에 있음
***
## 2023년 03월 16일 (3주차)
![1](https://user-images.githubusercontent.com/118963538/225484873-0b4c5dda-e909-416c-a560-11fba332a95e.png)
***
## 리액트는 무엇인가?
    -사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리
***
![2](https://user-images.githubusercontent.com/118963538/225487405-425fb2ef-8101-4acf-b3c7-e45121f3e5c8.png)
***
## 리액트의장점
  장점
   
   
    빠른 업데이트와 렌더링속도
      -이 것을 가능하게 하는 것이 바로 Virtual DOM 이다.
***
![1](https://user-images.githubusercontent.com/118963538/225488266-f5b0860e-f8f6-4d03-9c33-5772275e4ea1.png)
***
![2](https://user-images.githubusercontent.com/118963538/225492918-c6d3718b-afaa-4b1f-bc0e-89c74bd426e9.png)
***
## 컴포넌트 기반 구조
     리액트의 모든 페이지는 컴포넌트로 구성된다.
   
   
     하나의 컴포넌트는 다른 여러 개의 컴포넌트의 조합으로 구성할 수 있다.
***
![3](https://user-images.githubusercontent.com/118963538/225492945-30eb5c3b-f8cb-48ab-9585-c673b6b45418.png)
***

## 재사용성

반복적인 작업을 줄여주기 때문에 **생산성**을 높여준다.


또한 **유지보수가 용이**하다


재사용이 가능 하려면 해당 모듈의 **의존성**이 없어야한다




    CALENDAR 모듈은 DATE 모듈이 없다면 재사용이 불가하다
      -STRNG 모듈은 독립적으로 재사용이 가능하다
***
![재사용성](https://user-images.githubusercontent.com/118963538/225493866-7f03a685-858b-44e7-b2b5-aeb4b8761c5a.png)
***

**든든한 지원군**


    - 메타 ( 구 페이스북)에서 오픈 소스 프로젝트로 관리하고 있어 계속 발전하고 있다.


**활발한 지식 공유 & 커뮤니티**


**모바일 앱 개발가능**


    - 리액트 네이티브라는 모바일 환경 UI 프레임워크를 사용하면 크로스 플랫폼 모바일 앱을 개발할 수 있습니다.
***
![4,5,6](https://user-images.githubusercontent.com/118963538/225495162-c641fb81-6529-4d0d-a93a-c644440f4c93.png)
***
**리액트의 단점**


     1. 방대한 학습량
     - 자바스크립트를 공부한 경우 빠르게 학슬할 수 있습니다.

     2. 높은 상태 관리 복잡도
     - State, component life cycle 등의 개념이 있지만 그리 어렵지 않습니다.
***
![리액트의 단점](https://user-images.githubusercontent.com/118963538/225495860-14631a02-e67e-4917-8b49-ac96fcb6c50f.png)
***
# 23-React1
-2주차
