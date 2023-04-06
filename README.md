# 23 -React1
## 201930419_이건호

## 2023년 04월 06일 (6주차)
***
# 1교시

***

## 실습_댓글 컴포넌트 만들기

      프로젝트 디렉토리에 chapter_05라는 디렉토리 생성
    
      Comment.jsx 파일 생성
    
**    

       import React from "react";

       function Comment(props) {
          return (
             <div>
                <h1>제가 만든 첫 컴포넌트입니다.</h1>
             </div>
            );
       }
       export default Comment;


   ## 이후 CommentList.js를 생성하고 컴포넌트 코딩

import React from "react";
import Comment from "./Comment";

function CommentList(props) {
    return(
        <div>
            <Comment/>
        </div>
    );
}

export default CommentList;

***

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
  
  예시
  
  ![image](https://user-images.githubusercontent.com/118963538/228704128-101a8753-e855-4a6d-9d85-cef1f92c143c.png)

***


리액트 엘리먼트 예를 보면 type에 태그 대신 리액트 컴포넌트가 들어가 있는 것 외에는 차이가 없다


자바스크립트 객체이다. 


![image](https://user-images.githubusercontent.com/118963538/228704511-3196ae6f-0371-484c-aeb1-9d63cb894682.png)


## 내부적 자바스크립트 객체를 만드는 역활을 하는 함수가 createElement()입니다.
    첫 번째 매개변수가 type이다. 이 곳에 태그가 들어가면 그대로 표현, 리액트 컴포넌트가 들어가면 이 것을 분해해 태그로 만들게 된다.
    두 번째 매개변수인 props는 속성을 나타낸다.
    세 번째는 매개변수 children이다. 자식태그라고 이해


***

## 엘리먼트의 특징

    리액트 엘리먼트의 가장 큰 특징은 불변성이다.
    즉, 한 번 생성된 엘리먼트의 children이나 속성(attributes)을 바꿀 수 없다.

## 만일 내용이 바뀔 경우는 어떻게 해야 하나?
     이 때는 컴포넌트를 통해 새로운 엘리먼트를 생성하면 된다.
     그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꾼다.
     이렇게 교체하는 작업을 하기위해 Virtual DOM을 사용한다.

 ![image](https://user-images.githubusercontent.com/118963538/228706022-9eaab0e7-d16c-4945-8a79-261bd190c2b4.png)
    
    
    붕어빵에 단팥이 들어갓을 경우 맛을 바꿀 수 없듯이 컴포넌트를 통해 새로운 엘리먼트를 생성하면 된다.

***

 ## DOM이란? 
    MDN에서는 "DOM은 HTML, XML document와 상호작용하고 표현하는 API이다. DOM은 browser에서 로드되며 Node
    트리로 표현하는 document 모델이다.

  ## 브라우저 동작원리

        DOM은 해당 과정을 계속 반복한다. 즉, 오타 수정, 문구 제거 혹은 이미지를 첨부하는  사소한 일을 하더라도, DOM은 처음부터 다시 HTML을 
        파싱하여 DOM 트리를 만들고 CSS를 파싱하여 Render 트리를 만들고, 레이아웃을 입혀 출력한다. 그래서 Virtual Dom이 나왔다.


  ![image](https://user-images.githubusercontent.com/118963538/228708125-91d2861b-cbb3-4ca9-a98c-0b7ad47a7441.png)

  ## Virtual Dom
    Virtual Dom(이하 가상 DOM)은 수정사항이 여러 가지 있더라도, 가상 DOM은 한 번만 렌더링을 일으킨다.

![image](https://user-images.githubusercontent.com/118963538/228708356-3ace0ac9-d02d-42b0-9ef1-6ccb5bddb038.png)

위의 그림처럼, 가상 DOM은 DOM이 생성되기 전, 이전 상태 값과 수정사항을 비교하여 달라진 부분만
DOM에게 한 번에 전달하여 딱 한 번만 렌더링을 진행한다. 


![image](https://user-images.githubusercontent.com/118963538/228712205-3b491c75-bfd6-4926-bc3a-1215e310201c.png)
    
    
    첫 번째의 경우 Virtual DOM
    
    두 번째의 경우 Browse DOM

***
# 2교시
***
 ## 엘리먼트 렌더링하기

 Root DOM node
 
 다음 html 코드는 id값이 root인 div 태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한코드이다
 이 div태그 안에 리액트 엘리먼트가 렌더링 되며 이 것을 Root DOM node 라고 한다


엘리먼트를 렌더링하기 위해서는 다음과 같은 코드가 필요하다
![image](https://user-images.githubusercontent.com/118963538/228712470-9675d299-23c3-410f-b097-96610fdd57e4.png)


이때 render()함수를 사용하게 된다

이 함수의 첫 번째 파라메터 출력할 엘리먼트이고, 두 번째 파라메터는 출력할 타겟을 나타낸다
즉 리액트 렌터링의 과정은 Virtual DOM에서 실제로 DOM으로 이동하는 과정이라고 할 수 있다.

***


![image](https://user-images.githubusercontent.com/118963538/228712688-08bd0c26-1aa8-4182-8ad1-77400f42cd1a.png)

    렌더링 된 엘리먼트 업데이트 해보기
  
    React 홈페이지에서 스크립트 태그 가져오기
  
    babel 홈페이지에서 태그 가져오기
***
# 요약
***
 ![image](https://user-images.githubusercontent.com/118963538/228719892-9d401df0-d8cf-4162-92b5-2bc48961ee63.png)
 
 
## 엘리먼트의 정의
    -리액트 앱의 가장 작은 빌딩 블록들
    
    -화면에 나타나는 내용을 기술하는 자바스크립트 객체
    
    -리액트 엘리먼트는 DOM 엘리먼트의 가상표현
 
## 엘리먼트의 생김새
    -엘리먼트는 자바스크립트 객체형태로 존재
    
    -컴포넌트 유형과 속성 및 내부의 모든 지식에 대한 정보를 포함하고 있는 일반적인 자바스크립트 객체
    
##  엘리먼트의 특징
     -불변성을 갖고 있다.
     
     -엘리먼트 생성후에는 자식이나 속성을 바꿀 수 없다
     
## 엘리먼트 랜더링하기
      -렌더링을 위해 ReactDom의 reder()라는 함수를 사용
      
        -리액트 엘리먼트 HTML 엘리먼트에 렌더링하는 역할
        
      -렌더링되는 과정은 Virtual DOM에서 실제 DOM으로 이동하는 과정
      
##   렌더링된 엘리먼트 업데이트하기
       
       -엘리먼트는 한 번 생성되면 바꿀 수 없기 때문에 엘리먼트를 업데이트하기 위해서는 다시 생성해야 함
       
       -기존 엘리먼트를 변경하는 것이 아니라 새로운 엘리먼트를 생성해 바꿔치기 하는 것
***
# 3교시
***
  ## 컴포넌트에 대해 알아보기
      2장에서 설명한 바와 같이 리액트는 컴포넌트 기반의 구조를 같습니다.
    
      컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미한다.
    
      컴포넌트 재사용이 가능하기 때문에 전체 코드의 양을 줄일 수 있어 개발시간과 유지보수 비용도 줄일 수 있다
      
      컴포넌트는 자바스크립트 함수와 입력과 출력이 있다는 면에서 유사하다.
      
      다만 입력과 출력은 Props가 담당하고 출력은 리액트 엘리먼트의 형태로 출력된다
      
      엘리먼트를 필요한 만큼 만들어 사용한다는 면에서 객체 지향의 개념과 비슷하다

  ## Props에 대해 알아보기
   Props의 개념
     
       Props는 prop(property : 속성, 특성)의 준말이다
     
       이 props가 바로 컴포넌트의 속성이다
     
       컴포넌트에 어떤 속성, props를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력된다
     
       props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체이다.
     
       에어비앤비의 예도 마찬가지이다.
     
   ![image](https://user-images.githubusercontent.com/118963538/228720727-edf1306c-79f2-4d33-8ff2-30ac9c9e039e.png)

  ## Props의 특징
     읽기전용이다 변경할 수 없다는 의미이다.
 
     속성이 다른 엘리먼트를 생성하려면 새로운 Props를 컴포넌트에 전달하면 된다.

  ## Pure 함수 vs Impure 함수

     pure 함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수이다.
     
     Impure 함수는 인수로 받은 정보가 함수 내부에서 변하는 함수이다.
     
     
   ## Props 사용법

     JSX에서는 key-value쌍으로 props를 구성한다.
  
 위의 코드는 

      1. App 컴포넌트에서 props를 인자로 받아,

      2. 내부의 Profile 컴포넌트로 전달해서 name, introduction, viewCount에 각각 속성을 활당하는,

      3. 이때 전달되는 Props는 다음과 같은 자바스크립트 객체이다.

  ## JSX에서는 중괄호를 사용하면 JS 코드를 넣을 수 있다고 배웠다.
       
       다음 코드처럼 Props를 통해서 value를 할당 할 수 도 있고, 직접 중괄호를 사용하여 할당할 수도 있다.

   ## 컴포넌트 만들기
       
      컴포넌트의 종류
               리액트 초기 버전을 사용할 때는 클래스형 컴포넌트를 주로 사용했다.
               
               이후 Hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용한다.
               
               예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 잇기 때문에,
               
               클래스형 컴포넌트와 컴포넌트 생명주기에 관해서도 공부해 두어야 한다.
             
![image](https://user-images.githubusercontent.com/118963538/228722063-6b4cc8ec-2475-4f16-944f-3355e7df8c9b.png)

## 함수형 컴포넌트
      Welcome컴포넌트는 props를 받아 받은 props중 name키의 값을 "안녕."뒤에 넣어 반환한다.

## 클래스형 컴포넌트
      Welcome컴포넌트는 React.Component class로 부터 상속을 받아 선언한다.

 ## 컴포넌트 이름 짓기
        이름은 항상 대문자로 시작한다
      
        왜냐하면 리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 인식하기 때문이다. html tag.
      
        컴포넌트 파일 이름과 컴포넌트 이름은 같게 한다.

## 컴포넌트의 렌더링

       렌더링의 과정은 다음 예시 코드와 같다.
       
![image](https://user-images.githubusercontent.com/118963538/228722367-0659aac9-eda6-441e-872b-847e5f4cf02a.png)

## 컴포넌트 합성
      -컴포넌트 합성은 여러 개의 컴포넌트를 합쳐서 하나의 컴포넌트를 만드는 것이다.

      -리액트에서는 컴포넌트 안에 또 다른 컴포넌트를 사용할 수 있기 때문에, 복작합 화면을 여러 개의 
       컴포넌트를 나누어 구현할 수 있다.

      -다음 코드에서는 props의 값을 다르게 해서 Welcome 컴포넌트를 여러 번 사용한다.
      
![image](https://user-images.githubusercontent.com/118963538/228724025-af64a5a8-d3c2-4063-841c-8a6c0b7e66bb.png)

## 컴포넌트 추출
     - 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 나눌 수도 있다.

     - 큰 컴포넌트에서 일부를 추출해서 새로운 컴포넌트를 만드는 것이다.

     - 실무에서는 처음부터 1개의 컴포넌트에 하나의 기능만 사용하도록 설계하는 것이 좋다.

     Comment는 댓글 표시 컴포넌트이다.

     - 내부에는 이미지, 이름, 댓글과 장성일이 포함되어 있다.

     - 첫 번째로 이미지 부분을 Avatar 컴포넌트로 출력해본다

![image](https://user-images.githubusercontent.com/118963538/228724069-7ed692c8-7cac-452f-8072-88e338ba0a7b.png)

![image](https://user-images.githubusercontent.com/118963538/228724090-05b09f36-a0c5-42a9-bd63-47f74cd2cc54.png)


     - 두 번째로 사용자 정보 부분을 추출한다.

     - 컴포넌트 이름은 UserInfo로 한다. React 컴포넌트 이름은 Camel notatio을 사용한다.

     - UserInfo 안에 Avatar 컴포넌트를 넣어서 완성시킨다.

![image](https://user-images.githubusercontent.com/118963538/228724104-c448e778-b501-43f9-a29b-b5e97de37fed.png)

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
