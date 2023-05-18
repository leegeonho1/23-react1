# 23 -React1
## 201930419_이건호

## 2023년 05월 18일 (12주차)
***
# 1교시
***
## 13.1 합성에 대해 알아보기

    합성(Composition)은 '여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것' 입니다

    조합 방법에 따라 합성의 사용 기법은 다음과 같이 나눌 수 있습니다.

## [1] Containment (담다, 포함하다, 격리하다)

특정 컴포넌트가 **하위 컴포넌트를 포함하는 형태의 합성 방법**입니다.

컴포넌트에 따라서는 어떤 자식 엘리먼트가 들어올 지 미리 예상할 수 없는 경우가 있습니다.

범용적인 '박스' 역할을 하는 Sidebar 혹은 Dialog와 같은 컴포넌트에서 특히 자주 볼 수 있습니다.

이런 컴포넌트에서는 **children prop을 사용하여 자식 엘리먼트를 출력에 그대로 전달** 하는 것이 좋습니다

이때 children prop은  **컴포넌트의 props에 기본적으로 들어있는 children속성**을 사용합니다.


## Children 예시

다음과 같이 props.children을 사용하면 해당 컴포넌트의 하위 컴포넌트가 모두 children으로 들어오게 됩니다.

![image](https://github.com/leegeonho1/23-react1/assets/118963538/352863f1-c7cf-4e06-b10b-f26d0f843193)


   1. children은 다음 구조에서 세 번째 들어가는 파라미터 입니다.

   2. 파라미터가 배열로 되어있는 이유는 여러 개의 하위 컴포넌트를 가질 수 있기 때문입니다.

   3. children이 배열로 되어있는 것은 여러 개의 하위 컴포넌트를 위한 것입니다.
 
 
![image](https://github.com/leegeonho1/23-react1/assets/118963538/f49c4755-6e28-42f4-bf04-00ac06946c03)

***

# Reach.createElemnet () 에 관하여 ...

jsx를 사용하지 않는 경우의 props 전달 방법입니다.

정확히 말하면 JSX를 사용하지 않고 리액트로 엘리먼트를 생성하는 방법입니다.

    // JSX를 이용한 간단한 방법
    const jsxElement = <h1 className="jsx">JSX Element </h1>

    // 리액트 기능을 사용한 방법
    const reactElement = React.createElement (
        'h1', // tag
        {className: 'obj'}, // props
        'OBJ Element' // child element
    )
    
***
## FancyBorder 컴포넌트를 사용하는 예제입니다.

     WelcomeDialog 컴포넌트는 FanyBorder 컴포넌트를 사용하고, FancyBorder 컴포넌트는 <h1>
     과 <p> 두 개의 태그를 children이 props로 전달됩니다.

![image](https://github.com/leegeonho1/23-react1/assets/118963538/fb1e4304-51ec-4167-89dc-6d6910fe9323)

    리액트에서는 props.children을 통해 하위 컴포넌트를 하나로 모아서 제공 해줍니다.

    만일 여러 개의 children 집합이 필요할 경우는 별도로 props를 정의해서 각각 원하는 컴포넌트를 넣어줍니다.

    예와 같이 SplitPane은 화면을 왼쪽과 오른쪽으르 분활해 주고, App에서는 SplitPane을 사용해서 left, right 두 개의
    props를 정의하고 있다.

    즉, App에서 left, right를 props를 받아서 화면을 분활하게 됩니다. 이처럼 여러 개의 children 집합이 필요한 경우 별도의 props를
    정의해서 사용합니다.
    
![image](https://github.com/leegeonho1/23-react1/assets/118963538/1125844b-7a95-4554-bbb9-16e98f38a75f)

***
## [2] Specialization ( 특수화, 전문화 )

    1. 웰컴다이얼로그는 아이얼로그의 특별한 케이스입니다.

    2. 범용적인 개념을 구별이 되게 구체화 하는 것을 특수화라고 합니다..

    3. 객체지향 언어에서는 상속을 사용하여 특수화를 구현합니다.

    4. 리액트에서는 합성을 사용하여 특수화를 구현합니다.

    5. 다음 예와 같이 특수화는 범용적으로 쓸 수 있는 컴포넌트를 만들어 놓고 이를 특수한 목적으로 사용하는
        합성 방식입니다.
        
![image](https://github.com/leegeonho1/23-react1/assets/118963538/f33dd51d-7f92-4915-a1e0-fea8531591b0)

![image](https://github.com/leegeonho1/23-react1/assets/118963538/b7f0c419-79ed-4c0b-8505-43ec0f1d0cc4)

***
## [3] Containment의 Specialzation을 같이 사용하기.

    Containment를 위해서 props.children을 사용하고, Specialization을 위해 직접 정의한 props를 사용하면 됩니다.

    Dialog 컴포넌트는 이전의 것과 비슷한데 Containment를 위해 끝 부분에 props.children을 추가 했다.

    Dialog를 사용하는 SignUpDialog는 Specialization을 위해 props인 title, message에 값을 넣어주고 있고, 입력받기 위해
    <input>과 <button>을 사용합니다.
    이 두개의 태그는 모두 props.children으로 전달되어 다이얼로그에 표시 됩니다.

    이러한 형태로 Containment와 Specialization을 동시에 사용할 수 있습니다.
    
![image](https://github.com/leegeonho1/23-react1/assets/118963538/cbac3dab-824a-4fdd-8f7f-5bde11d99712)

***
## 13.2 상속에 대해 알아보기

   합성과 대비되는 개념으로 상속(inheritance)이 있습니다.

    자식 클래스는 부모 클래스가 가진 변수나 함수 등의 속성을 모두 갖게 되는 개념입니다.

    하지만 리액트에서는 상속보다는 합성을 통해 새로운 컴포넌트를 생성합니다.

   * 복잡한 컴포넌트를 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합하여 새로운 컴포넌트를 만들자 !
   
***

# 2교시

***

## 13.3 (실습) Card 컴포넌트 만들기

1. chapter_13 폴더 생성.

2. Card.jsx 컴포넌트 만들기. 하위 컴포넌트를 감싸서 카드 형태로 보여주는 컴포넌트

3. Card 컴포넌트를 사용하여 ProfileCard 컴포넌트 제작

4. Index.js 파일을 수정

5. App을 실행하고 정상 동작 여부 확인.


## card.jsx 파일 

       function Card(props) {
         const { title, backgroundColor, children } = props;

        return (
            <div
                style={{
                    margin: 8,
                    padding: 8,
                    borderRadius: 8,
                    boxShadow: "0px 0px 4px grey",
                    backgroundColor: backgroundColor || "white",
                }}
            >
                {title && <h1>{title}</h1>}
                {children}
            </div>
        );
    }
    export default Card;
    
## ProfileCard.jsx

    import Card from "./Card";

    function ProfileCard(props) {
        return (
            <Card title="Inje Lee" backgroundColor="#4ea04e">
                <p>안녕하세요, 소플입니다.</p>
                <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
            </Card>
        );
    }

    export default ProfileCard;
    
*** 
## 실행결과 

![image](https://github.com/leegeonho1/23-react1/assets/118963538/88d77db7-cd5c-4ccc-b6b8-2785c1575fda)

***

## 14.1 컨텍스트란 무엇인가?

기존의 일반적인 리액트에서는 데이터가 컴포넌트의 props를 통해 부모에서 자식으로 단 방향으로 전달 되었습니다.

컨텍스트는 이랙트 컴포넌트들 사이에서 데이터를 기존의 props를 통해 전달하는 방식으로 대신 '컴포넌트 트리를 통해
곧 바로 컴포넌트에 전달하는 새로운 방식' 을 제공합니다.

이 것을 통해 어떤 컴포넌트라도 쉽게 데이터에 접근할 수 있습니다.

컨텍스트를 사용하면 일일이 props로 전달할 필요 없이 그림처럼 데이터를 필요로 하는  컴포넌트에 곧 바로 데이터를 전달할 수 있습니다.


## 14.2 언제 컨텍스트를 사용해야 할까?


여러 컴포넌트에서 자주 필요로 하는 데이터는 로그인 여부, 로그인 정보, UI테마, 현재 선택된 언어 등이 있습니다.

이런 데이터들을 기존의 방식대로 컴포넌트의 PROPS를 통해 넘겨주는 예

예제처럼 props를 통해 데이터를 전달하는 기존 방식은 실제 데이터를 필요로 하는 컴포넌트까지의 깊이가 깊어질 수록 복잡해집니다.

또한 반복적인 코드를 계속해서 작성 해주어야 하기 때문에 비효율적이고 가독성이 떨어집니다.

컨텍스트를 사용하면 이러한 방식을 깔끔하게 개선할 수 있습니다.

***
## 2023년 05월 11일 (11주차)
***
# 1교시
***
# 중간고사 답안지 리뷰
***
# 2교시 

![image](https://github.com/leegeonho1/23-react1/assets/118963538/51c18598-f248-448a-ace1-0a59e287ced3)

    state로 temperature와 scale을 선언하여 온도 값과 단위를 각각 저장하도록 하였다.
    이 온도와 단위를 이용하여 변호나 함수를 통해 섭씨온도와 화씨온도를 구해서 사용합니다.
    TemperatureInput 컴포넌트를 사용하는 부분에서는 각 단위로 변환된 온도 값과 단위를 
    props로 넣어 주었고, 값이 변경되었을 때 업데이트하기 위한 함수를 onTemperatureChange에
    넣어 주었습니다. 따라서 섭씨온도가 변경되면 단위가 'c'로 변경되고, 화씨온도가 변경되면 단위가 'f'로
    변경됩니다. 

**이렇게 최종적으로 완성된 구조를 그림으로 나타내면 아래와 같다**

# 컴포넌트

![image](https://github.com/leegeonho1/23-react1/assets/118963538/96d86019-51fc-4173-94fb-a59b5257dff9)


    위 이미지 예시

    상속받아서 사용할 수 있다. 그걸 통해서 새로운 state값을 생성해낼 수 있다.

    상호관의 state를 공유할 수 있다.

    각 컴포넌트가 상위 컴포넌트로 올려서 공유하는 방법을 사용하면 리액트에서 간결하게 사용할 수 있고 오류도 적다.

    즉 코드의 간결성과 오류가 적다
    
***
# 3교시 
***
# 섭씨 화씨 온도 구하는 실습문제 해보기

    1. chapter_12 폴더 생성한다.
    
    2. 폴더안에 Calculator.jsx 와 TemperatureInput.jsx 파일을 생성한다.
    
    3. 코드는 아래와 같이 작성한다.
 ***
 ## TemperatureInput.jsx 코드
 
    const scaleNames = {
        c: "섭씨",
        f: "화씨",
    };

    function TemperatureInput(props) {
        const handleChange = (event) => {
            props.onTemperatureChange(event.target.value);
       };

        return (
            <fieldset>
                <legend>
                    온도를 입력해주세요(단위:{scaleNames[props.scale]}):
                </legend>
                <input value={props.temperature} onChange={handleChange} />
            </fieldset>
        );
    }

    export default TemperatureInput;
***

## Calculator.jsx 코드

    import React, { useState } from "react";
    import TemperatureInput from "./TemperatureInput";

    function BoilingVerdict(props) {
        if (props.celsius >= 100) {
            return <p>물이 끓습니다.</p>;
        }
        return <p>물이 끓지 않습니다.</p>;
    }

    function toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
    }

    function toFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }

    function tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return "";
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
        }

    function Calculator(props) {
        const [temperature, setTemperature] = useState("");
        const [scale, setScale] = useState("c");

        const handleCelsiusChange = (temperature) => {
            setTemperature(temperature);
            setScale("c");
    };

    const handleFahrenheitChange = (temperature) => {
        setTemperature(temperature);
        setScale("f");
    };

    const celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange={handleCelsiusChange}
            />
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleFahrenheitChange}
            />
            <BoilingVerdict celsius={parseFloat(celsius)} />
        </div>
      );
    }
    export default Calculator;
    
***
## 실행화면

![image](https://github.com/leegeonho1/23-react1/assets/118963538/16b05915-c8cd-49f3-bb9c-6c992133a00c)


## 2023년 05월 04일 (10주차)
***
# 1교시
***
## 10.1 리스트와 키란 무엇인가?

    - 리스크는 자바스크립트의 변수나 객체를 하나의 변수로 묶어 놓은 배열과 같은 것 입니다.
    
    - "키는 각 객체나 아이템을 구분할 수 있는 고유한 값" 을 의미한다.
    
    - 리액트에서는 배열과 키를 사용하는 반복되는 다수의 엘리먼트를 쉽게 렌더링할 수 있습니다.

## 10.2 여러 개의 컴포넌트 렌더링하기

     - 예의 에어비엔비의 화면처럼 같은 컴포넌트를 화면에 반복적으로 나타내야 할 경우 배열에 들어있는 엘리먼트를
       map()함수를 이용하여 랜더링 합니다
       
![image](https://user-images.githubusercontent.com/118963538/236085227-2e7831c5-86a6-43cf-a508-2311f74422d5.png)

***

## map 함수를 사용한 예제

    다음은 numbers 배열에 들어있는 각각의 요소를 map()를 이용하여 하나씩 추출하여, 2를 곱한 후
    doubled라는 배열에 다시 넣는 코드이다. 
    ( 안에 배열에 값에 * 2를 해준 뒤 numbers 안에 넣어줌 )

![image](https://user-images.githubusercontent.com/118963538/236085434-be73d648-fc23-4428-8555-deb066599fa5.png)

    다음은 리액트에서 map( ) 함수를 사용한 예제입니다.

![image](https://user-images.githubusercontent.com/118963538/236085964-fef74383-61d0-49c2-a2c4-d4d2c4b6b232.png)

    이 코드는 numbers의 요소에 2를 곱하는 대신<li> 태그를 결합해서 리턴하고 있다

![image](https://user-images.githubusercontent.com/118963538/236086272-e1e6c3ae-9121-4514-b1b6-e790ff649213.png)

***
## 10.3 기본적인 리스트 컴포넌트

    - 앞서 작성한 코드를 변도의 컴포넌트로 분리하면 다음과 같습니다.

    - 이 컴포넌트는 props로 받은 숫자를 numbers로 받아 리스트로 렌더링 해줍니다.
    
![image](https://user-images.githubusercontent.com/118963538/236087766-279c1f38-5516-4f69-99e4-dd79d4f135fd.png)

    
    이 코드를 실행하면 "리스트 아이템에 무조건 키가 있어야 한다 " 는 경고 문구가 나옵니다.
    
![image](https://user-images.githubusercontent.com/118963538/236087964-bd4c5c71-d51f-4837-8f58-50db08f4d52b.png)

    경고 문구가 나오는 이유는 각각의 아이템에 key props가 없기 때문입니다.
    
***
## 10.4 리스트의 키에 대해 알아보기

    - 리스트에서는 키는 "리스트에서 아이템을 구별하기 위한 고유한 문자열" 입니다.

    - 이 키는 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용합니다.

    - 키는 같은 리스트에 있는 "엘리먼트에서 고유한 값" 이면 됩니다.

![image](https://user-images.githubusercontent.com/118963538/236088493-37cf7fb9-0d8c-4d3b-adf3-253bb542ba6d.png)

***
## 10.5 (실습) 출석부 출력하기

    - src/chapter_10 폴더를 생성한다.

    - AttendanceBook.jsx라는 이름의 함수형 컴포넌트를 만든다.

    - 앱을 실행하여 정상 동작을 확인합니다.

    - 오류 메시지를 확인합니다. 앞서 확인한 key props에 관한 오류입니다.

    - 다음과 같이 각 학생 객체에 고유한 값을 가진 id를 추가해 주고, map() 함수의 엘리먼트에 
      key={student.id}를 넣어줍니다.

![image](https://user-images.githubusercontent.com/118963538/236090498-77daafa5-f257-4d52-9b12-c416fe221357.png)



    위의 이미지 예시
    
    {
        id: "1"
        text:  "보고서 작성 "
    }

![image](https://user-images.githubusercontent.com/118963538/236091040-8f0771ab-49b5-479d-b2b4-e84a1e5f574b.png)

    id: 1을 props로 사용하고 값은 map() 함수의 엘리먼트에 키 값을 넣어 "보고서 작성"이 출력

***
## 10.6 마치며

요약 
  리스트

    - 같은 아이템을 순서대로 모아놓은 것

  키

    - 각 객체나 아이템을 구분할 수 있는 고유한 값

  여러 개의 컴포넌트 렌더링

     - 자바스크립트 배열의 map() 함수를 사용

     - 배열에 들어있는 각 변수에 어떤 처리를 한 뒤 결과(엘리먼트)를 배열로 만들어서 리턴함

     - map() 함수 안에 있는 엘리먼트는 꼭 키가 필요함
 
   리스트의 키

     - 리스트에서 아이템을 구분하기 위한 고유한 문자열

     - 리스트에서 어떤 아이템이 변경, 추가 또는 제거되었는지 구분하기 위해 사용

     - 리액트에서는 키의 값은 같은 리스트에 있는 엘리먼트 사이에서만 고유한 값이면 됨

  다양한 키 값의 사용 방법
  

   - 숫자 값을 사용
      - 배열에 중복된 숫자가 들어있다면 키 값도 중복 되기 때문에 고유해야 한다는 키 값의 조건이 충족되지 않음
  
  
   - id를 사용

       - id의 의미 자체가 고유한 값이므로 키 값으로 사용하기에 적합

       - id가 있는 경우에는 보통 id 값을 키 값으로 사용

   - 인덱스를 사용

     - 배열에서 아이템의 순서가 바뀔 수 있는 경우에는 키 값으로 인덱스를 사용하는 것을 권장하지않음

     - 리액트에서는 키를 명시적으로 넣어 주지 않으면 기본적으로 이 인덱스 값을 키 값으로 사용

***
# 2교시
***
## 11.1 폼이란 무엇인가?

    폼은 일반적으로 사용자가로부터 입력을 받기위한 양식에서 많이 사용된다

![image](https://user-images.githubusercontent.com/118963538/236096216-d3320a04-1d10-4092-89b4-08cff7e9a6c6.png)

위의 예시

***
## 11.2 제어 컴포넌트

  **제어 컴포넌트는 사용자가 입력한 값에 접근하고 제어할 수 있도록 해주는 컴포넌트이다.**

    HTML 폼 자체적으로 state를 관리
![image](https://user-images.githubusercontent.com/118963538/236096470-18d8e885-5db9-401a-8902-152b663b7eb4.png)


    제어 컴포넌트 모든 데이터를 state에서 관리
![image](https://user-images.githubusercontent.com/118963538/236096534-f46ac48b-ebf4-4687-b20c-dd9b6fbcf430.png)

***

**다음 코드는 사용자의 이름을 입력 받는 HTML폼을 리액트 제어 컴포넌트로 만든 것 입니다.**

    value 가 변수 setValue <- 함수 를 통해서 useState에 값 변경
![image](https://user-images.githubusercontent.com/118963538/236097009-f319b07f-e718-49a4-9bd5-112385c29ffb.png)

    value값이 바꼇을 때 handleChange 가 발생하면 setValue를 통해서 이벤트 객체에 value에 셋팅  
![image](https://user-images.githubusercontent.com/118963538/236097052-3f09ba4a-dd1a-4950-9126-23e05268926a.png)

    const handleSubmit 에서는 alert로 입력한 이름을 띄워준다
![image](https://user-images.githubusercontent.com/118963538/236097138-e6dfd148-31c4-4238-9fe6-29d8f6a3b576.png)

    return 값에서는 form태그가 handleSubmit을 가지고 있고 입력한 value 이름 값을 handleChange를 통해 바꿔줌
![image](https://user-images.githubusercontent.com/118963538/236097434-88d5e9a5-8b85-4a95-8308-5b54ad27aa65.png)

***
## 11.3 textarea 태그

    HTML에서는 <textarea>의 children으로 텍스트가 들어가는 형태입니다.
![image](https://user-images.githubusercontent.com/118963538/236097763-9baf7ae8-c90b-4895-bc6d-584f5404873f.png)

    리액트에서는 state를 통해 태그의 value라는 attribute를 변경하여 텍스트를 표시한다
![image](https://user-images.githubusercontent.com/118963538/236097863-fb112682-5b6c-47ee-9265-d2329d9f4637.png)
    
    태그에서 /> 는 반드시 닫아줘야한다
***
## 11.4 select 태그

     Select태그도 taxtarea와 동일하다.
![image](https://user-images.githubusercontent.com/118963538/236098089-563dc3b5-b9b1-4fe8-8617-3d3a0c8c5007.png)

    useState에 초기 값은 grape 포도로 설정 되어 있다.
![image](https://user-images.githubusercontent.com/118963538/236098159-7383a3a3-5dfc-4ee0-88d8-6dd117bd9f1d.png)
***
## 11.5 File input 태그

    File input 태그는 그 값이 읽기 전용이기 때문에 리액트에서는 비제어 컴포넌트가 됩니다.
![image](https://user-images.githubusercontent.com/118963538/236098317-e25acbc1-5d4a-4d58-b408-cd9e0750425e.png)

***
## 11.7 Input Null Value
    - 제어 컴포넌트에 value prop을 정해진 값으로 넣으면 코드를 수정하지 않는 한 입력 값을 바꿀 수 없습니다.

    - 만약 value prop을 넣되 자유롭게 입력할 수 있게 만들고 싶다면 undefined또는 null을 넣어주면 됩니다.

![image](https://user-images.githubusercontent.com/118963538/236099992-b459fc01-baf9-4099-9948-e17f8c5dc79a.png)
***
# 3교시
***
## 11.8 (실습) 사용자 정보 입력받기

   - src/chapter_11 이라는 폴더를 생성합니다

   - SignUp.jsx라는 이름의 함수형 컴포넌트를 생성합니다.

   - 컴포넌트에 이름 입력 코드를 작성합니다.

   - index.js 파일을 수정합니다

   - 앱을 실행하고 정상 동작을 확인합니다.

   - 성별 입력 코드를 추가합니다.

***
    import React, { useState } from "react";

    function SigUp(props) {
        const [name, setName] = useState("");

        const handleChangeName = (event) => {
            setName(event.target.value);
        };

        const handleSubmit = (event) => {
            alert(`이름: ${name}`);
            event.preventDefault();
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    이름:
                    <input type="text" value={name} onChange={handleChangeName} />
                </label>
                <button type="sumbit">제출</button>
            </form>
        );
    }
    export default SigUp;
    
**실행화면**
![image](https://user-images.githubusercontent.com/118963538/236103474-4865cc9b-627c-4f5b-9a26-383d7a5f9c49.png)


## 성별 입력 코드를 추가 했을 경우

    import React, { useState } from "react";

    function SigUp(props) {
        const [name, setName] = useState("");
        const [gender, setGender] = useState("남자");

        const handleChangeName = (event) => {
            setName(event.target.value);
        };
    
        const handleChangeGender = (event) => {
            setGender(event.target.value);
        };

        const handleSubmit = (event) => {
            alert(`이름: ${name}, 성별: ${gender}`);
            event.preventDefault();
        };
    
        return (
            <form onSubmit={handleSubmit}>
                <label>
                    이름:
                    <input type="text" value={name} onChange={handleChangeName} />
                </label>
                <label>
                    성별:
                    <select value={gender} onChange={handleChangeGender}>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </label>
                <button type="sumbit">제출</button>
            </form>
        );
    }

    export default SigUp;


**실행화면**
![image](https://user-images.githubusercontent.com/118963538/236105195-112a29ba-c560-44ae-afb8-1ab61ee3e943.png)
***

## 12.1 Shared State

  Shared State는 말 그대로 공유된 state를 의미합니다. 
  앞에서 잠깐 설명한 것처럼 자식 컴포넌트들이 가장 가까운 공통된 부모 컴포넌트의 state를 공유해서 사용하는 것이다 
  Shared State는 **어떤 컴포넌트의 state에 있는 데이터를 여러 개의 하위 컴포넌트에서 공통적으로 사용하는 경우**를 말한다.

![image](https://user-images.githubusercontent.com/118963538/236106239-c9804eb9-39c4-4988-a11a-27d4a32a7664.png)

    A는 값에 2를 곱해 표시하는 컴포넌트이고 오른쪽 아래에는 3을 곱해서 왼쪽 아래는 2를 곱해서 표시하는 컴포넌트이다
    "컴포넌트들이 각각 값을 갖고 있을 필요가 없다"
    
***
## 12.3 하위 state 컴포넌트 공유하기
    섭씨온도 값을 props로 받아서 물이 끓는지 안 끓는지 문자열로 출력해주는 컴포넌트를 만들어 보겠습니다.
    
 ![image](https://user-images.githubusercontent.com/118963538/236106860-64810bea-31a3-4456-852d-5801942650cb.png)

    위의 코드는 BoilingVerdict라는 이름을 가진 간단한 컴포넌트이다 섭씨온도 값을 props로 받아서 100도 이상이면
    물을 끓는다고 출력하고 그 외에는 물이 끓지 않는다는 문자열을 출력합니다.


***
## 2023년 04월 27일 (9주차)
***
# 1교시
***
## 8.1 이벤트 처리하기

## DOM에서 클릭 이벤트를 처리하는 예제코드.
![image](https://user-images.githubusercontent.com/118963538/234734675-582ec55d-aa84-4c8b-bc90-4b598f9bd3d8.png)


## React에서 클릭 이벤트를 처리하는 예제코드.
![image](https://user-images.githubusercontent.com/118963538/234734704-6948a891-b84c-4748-aa8b-2e3c37836c52.png)


    둘의 차이점은

    1) 이벤트 이름이 onClick에서 onClick으로 변경.(Camel case)

    2) 전달하려는 함수는 문자열에서 함수 그대로 전달.


    
    이벤트가 발생했을 때 해당 이벤트를 처리하는 함수를 "이벤트 핸들러" 라고 합니다.
    또는 이벤트가 발생하는 것을 계속 듣고 있다는 의미로 "이벤트 리스너" 라고 부르기도 합니다.
    
***
## 이벤트 핸들러 추가하는 방법은 ?

    버튼을 클릭하면 이벤트 핸들러 함수인 handleClick() 함수를 호출 하도록 되어 있습니다.

    bind를 사용하지 않으면 this.handleClick은 클로벌 스코프에서 호출되어, undefined으로 사용할 수 없기
    때문입니다.

    bind를 사용하지 않으려면 화살표 함수를 사용하는 방법도 있습니다.
    
![image](https://user-images.githubusercontent.com/118963538/234734912-91a7a695-0090-4f3d-9f9f-769a61b6553e.png)

  extends로 Component를 상속 받는다.

  this를 사용하기 위해서 바인딩을 필수적으로 해줘야 한다.


    하지만 클래스 컴포넌트는 이제 거의 사용하지 않기 때문에 이 내용은 참고만 합니다.
***

## 클래스형을 함수형으로 바꾸면 다음 코드와 같다.

    함수형에서 이벤트 핸들러를 정의하는 방법은 두 가지가 있다.

    함수형에서는 this를 사용하지않고, onClick에서 바로 HandleClick을 넘기면 된다.

![image](https://user-images.githubusercontent.com/118963538/234735889-70c40ce6-cc76-4623-bb49-bb045039ae42.png)

그림에서는 객체의 이름을 사용하여 쓰기때문에 이름이 없이 사용할 수 있다.
 - 화살표 함수의 경우 이름이 없다

## 8.2 Arguments 전달하기
 
    함수를 정의할 때는 파라미터(Parameter)혹은 매개변수,
    함수를 사용할 때는 아귀먼트(Arguments) 혹은 인자라고 부릅니다.

    이벤트 핸들러에 매개변수를 전달해야 하는 경우도 많습니다

![image](https://user-images.githubusercontent.com/118963538/234736799-5155eb0b-aafb-4156-bf15-893a48181f49.png)

- 위의 코드는 모두 동일한 역할을 하지만 하나는 화살표 함수를, 다른하나는 bind를 사용했습니다.

- event라는 매개변수는 리액트의 이벤트 객체를 의미합니다.

- 두 방법 모두 첫 번째 매개변수는 id이고 두 번째 매개변수로 event가 전달 됩니다.

- 첫 번째 코드는 명시적으로 event를 매개변수로 넣어주었고, 두 번째 코드는 id 이후 두 번째 매개변수로
  event가 자동 전달됩니다. ( 이 방법은 클래스형에서 사용하는 방법이다.)
  
- 두 가지 방법이 매개변수 형태가 다르고 전달되는건 같다.

      함수를 정의할 때 function foo(a,b) -> a,b 는 Parameter혹은 매개변수라고 부른다.
      
      function foo(1,2)를 넣을 경우 Arguments 혹은 인자라고 부른다.

***
    MyButton이라는 함수형 컴포넌트를 선언하고 있고 안에는 id와 event가 들어가 있다.
    
    console에는 id와 event.target을 넣어주고 있다.
    
    버튼을 onClick하면 이벤트를 받아서 핸들 handeDelete로 전달이 되고 있다.

![image](https://user-images.githubusercontent.com/118963538/234738128-fd345ba0-23c1-4669-9d68-0995025d505b.png)

***

## 8.3 (실습) 클릭 이벤트 처리하기
 
 1. ConfirmButton 컴포넌트 만들기

 2. 클래스 필드 문법 사용하기

 3. 함수 컴포넌트로 변경하기

 - 함수형 컴포넌트로 코드 작성

        import React from "react";
        import { useState } from "react";

        function ConfirmButton(params) {
            const [isConfirmed, setIsConfirmed] = useState(false);

            const handleConfirm = () => {
                setIsConfirmed((prevIsConfirmed) => !prevIsConfirmed);
            };
    
            return (
                <button onClick={handleConfirm} disable={isConfirmed}>
                    {isConfirmed ? "확인됨":"확인하기"}
                </button>
            );
        }

        export default ConfirmButton;
        
 - 실행화면
   - 버튼을 누르면 확인됨으로 바뀜
   
![image](https://user-images.githubusercontent.com/118963538/234739772-7f6db361-6baa-4d2d-b743-517ac647b63a.png)

***
  
## 화살표 함수를  이용한 앞에 실습코드

    화살표 함수 안에 화살표 함수를 넣은 prevIsConfirmed 는 앞에서 실습 해봤던 useState 와 기능이 같다
    예) 토글 스위치 기능과 같다
    
![image](https://user-images.githubusercontent.com/118963538/234741208-20f0a5aa-76fe-46e5-9cd6-a8a655b607f3.png)


***
# 2교시
***

## 8.4 마치며

    - 이벤트란?
       - 사용자가 버튼을 클릭하는 등의 사건을 의미

    - 이벤트 처리하기
        -DOM의 이벤트
           - 이벤트의 이름을 모두 소문자로 표기
           - 이벤트를 처리할 함수를 그대로 전달

    - 이벤트 핸들러
          - 이벤트가 발생했을 때 해당 이벤트를 처리하는 함수
          - 이벤트 리스너라고 부르기도 함

    - 클래스 컴포넌트 
          -  클래스의 함수로 정의하고 생성자에서 바인딩해서 사용
          - 클래스 필드 문법도 사용가능

    - 함수 컴포넌트
          - 함수 안에 함수로 정의하거나 arrow function을 사용해서 정의

    - Arguments 전달하기
          - Arguments란?
          
***

## 9.1 조건부 렌더링이란?

    여기서 조건이란 ? 우리가 알고 있는 조건문의 조건이다.

![image](https://user-images.githubusercontent.com/118963538/234742796-c19fef0d-36f1-45d5-a6ea-f98bf8f1336a.png)

    props로 전달받은 isLoggedln이 true이면 <UserGreeting />을 , false면 <GuestGreeting/>을
    return 합니다.

    이와 같은 렌더링을 조건부 렌더링이라고 한다.
    
***
# 9.2 엘리먼트 변수

![image](https://user-images.githubusercontent.com/118963538/234744414-e97ad8fb-f6d0-4a9a-9f4a-a2caed2e7527.png)

    Logout button을 누르면 handleLogout가 작동하고 false

    Login button을 누르면 handleLogin가 작동한다. true
***
## 9.3 인라인 조건

    - 필요한 곳에 조건문을 직접 넣어 사용하는 방법이다.

1. 인라인 if 

   - if문을 직접 사용하지 않고, 동일한 효과를 내기 위해 && 논리 연산자를 사용합니다.

   - &&는 and 연산자로 모든조건이 참일 경우에만 참이 됩니다.

   - and 연산자에서 첫 번째 조건이 거짓이면 두 번째 조건은 판단할 필요가 없다.

![image](https://user-images.githubusercontent.com/118963538/234745802-71398e4a-e596-48f2-88e8-ab35a977b5e3.png)

**앞이 false이면 뒤에가 true든 false든 판단하지 않는다.**

***
2. 인라인 if-else
    
     - 삼항 연산자를 사용한다.
    
     - 문자열이나 엘리먼트를 넣어서 사용할 수도 있다.

       조건문 ? 참일 경우 : 거짓일 경우
        - 물음표 앞쪽에 있는걸 실행하고 거짓일 경우 : 뒤에 있는 것을  실행한다

![image](https://user-images.githubusercontent.com/118963538/234746225-c2d90940-29c1-4e27-82b8-9c43e7445b79.png)

***
# 3교시
***

## 9.4 컴포넌트 렌더링 막기

**컴포넌트를 렌더링하고 싶지 않을 때에는 null을 리턴합니다**
       
      function WarningBanner(props) {
           if  (!props.warning) {
                      return null;
           }
         
           return (
                 <div>경고!</div>
           );
        }

**! props.warning 가 warnig이 true면 경고 ! 가 뜨게 되고 false의 경우 널 값을 리턴 해준다**

***
<<<<<<< HEAD
=======

## 9.5 실습 로그인 코드 

chapter_09 폴더를 만든 뒤
Toolbar.jsx 파일과  LandingPage.jsx 생성

LoggedIn이 참이면 Login 거짓일 경우 Logout 

# Toolbar.jsx 파일 코드

![image](https://user-images.githubusercontent.com/118963538/234753323-b952f6d7-847a-4afc-9bf5-b08bd3f41f2e.png)

# LandingPage.jsx 파일 코드

![image](https://user-images.githubusercontent.com/118963538/234753407-60503866-57a6-4113-a97f-88b1e78e14e7.png)

***
## 9.6 마치며
     1. 조건부 렌더링
          - 조건에 따라 렌더링의 결과가 달라지도록 하는 것

      2. 엘리먼트 변수
          - 리액트 엘리먼트를 변수처럼 저장해서 사용하는 방법

      3. 인라인 조건
          - 조건문을 코드 안에 집어넣는 것
          - 인라인 if
             - if문을 필요한 곳에 직접 집어넣어서 사용하는 방법
             - 논리연산자 &&를 사용 (AND 연산)
             - 앞에 나오는 조건문이 true일 경우에만 뒤에 나오는 엘리먼트를 렌더링

          - 인라인 if-Else
             - if-Else문을 필요한 곳에 직접 넣어서 사용하는 방법
             - 삼항 연산자 ? 를 사용
             - 앞에 나오는 조건문이 true면 첫 번째 항목을 리턴, false면 두 번째 항목을 리턴
             - 조건에 따라 각기 다른 엘리먼트를 렌더링하고 싶을 때 사용
         
       4. 컴포넌트 렌더링 막기
             - 리액트에서는 null을 리턴하면 렌더링되지 않음
             - 특정 컴포넌트를 렌더링하고 싶지 않을 경우 null을 리턴하면 됨

***
>>>>>>> 22b9a5d0234c9745814e82b6b76badbbb6226e71
## 2023년 04월 13일 (7주차)
***
# 1교시
***

## React Developer Tools 설치하기
    
    구글에서 'React Developer Tools'로 검색하면 찾을 수 있다.
    
## (실습) 생명주기 함수 사용해보기

    1번 실습코드에 reservedNotifications의 id값과 Notifications.jsx에 라이프사이클 함수를 추가한다.
    
    
    교재에 설명하지 않은 부분 중 id값은 key props로 작동한다는 것이다.
        
    Notification.jsx 파일과 NotificationList 파일을 생성한다.
    
    
## Notification.jsx 부분의 코드



    import React from "react";

    const styles = {
        wrapper: {
            margin: 8,
            padding: 8,
            display: "flex",
            flexDirection: "row",
            border: "1px solid grey",
            borderRadius: 16,
        },
        messageText: {
            color: "black",
            fontSize: 16,
        },
    };

    class Notification extends React.Component {
        constructor(props) {
            super(props);

            this.state = {};
        }

        componentDidMount() {
            console.log(`${this.props.id} componentDidMount() called.`);
        }

         componentDidUpdate() {
            console.log(`${this.props.id} componentDidUpdate() called.`);
        }

        componentWillUnmount() {
            console.log(`${this.props.id} componentWillUnmount() called.`);
        }

        render() {
            return (
                <div style={styles.wrapper}>
                    <span style={styles.messageText}>{this.props.message}</span>
                </div>
            );
        }
    }
    export default Notification;
    
## NotificationList.jsx 의 코드

    import React from "react";
    import Notification from "./Notification";

    const reservedNotifications = [
        {
            id: 1,
            message: "안녕하세요, 오늘 일정을 알려드립니다.",
        },
        {
            id: 2,
            message: "점심식사 시간입니다.",
        },
        {
            id: 3,
            message: "이제 곧 미팅이 시작됩니다.",
        },
    ];

    var timer;

    class NotificationList extends React.Component {
        constructor(props) {
             super(props);

            this.state = {
                notifications: [],
            };
        }

        componentDidMount() {
            const { notifications } = this.state;
            timer = setInterval(() => {
                if (notifications.length < reservedNotifications.length) {
                    const index = notifications.length;
                    notifications.push(reservedNotifications[index]);
                    this.setState({
                        notifications: notifications,
                    });
                } else {
                    this.setState({
                        notifications: [],
                    });
                    clearInterval(timer);
                }
            }, 1000);
        }

        componentWillUnmount() {
            if (timer) {
                clearInterval(timer);
            }
        }

        render() {
            return (
                <div>
                    {this.state.notifications.map((notification) => {
                        return (
                            <Notification
                                    key={notification.id}
                                    id={notification.id}
                                    message={notification.message}
                            />
                        );
                    })}
                </div>
            );
        }
    }
    export default NotificationList;

## 실행결과

![image](https://user-images.githubusercontent.com/118963538/231621205-2b09b922-b5ff-404f-9b17-4aa01115cfa6.png)

***

## State 요약

    State
    
     - 리액트 컴포넌트의 변경 가능한 데이터
     
     - 컴포넌트를 개발하는 개발자가 직접 정의해서 사용
     
     - state가 변경될 경우 컴포넌트가 재렌더링 된다
     
     - 렌더링이나 데이터 흐름에 사용되는 값만 state에 포함시켜야 함
     
    - State의 특징
    
       - 자바스크립트 객체 형태로 존재
       
       - 직접적인 변경이 불가능 함
       
       - 클래스 컴포넌트
       
          -  생성자에서 모든 state를 한 번에 정의
          
          -  state를 변경하고자 할 때에는 꼭 setState()함수를 사용해야 함
           
       - 함수 컴포넌트
       
           - useState() 훅을 사용하여 각각의 state를 정의
           
           - 각 state별로 주어지는 set함수를 사용하여 state 값을 변경
           
***

## 7.1 훅이란 무엇인가
  
  - 클래스형 컴포넌트에서는 생성자에서 state를 정의하고 setState() 함수를 통해 state를 업데이트 한다.
  
  - 예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나, 컴포넌트의 생명주기에 맞춰서 어떤 코드가
    실행되도록 할 수 없었습니다.
  
  - 함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 **바로 훅(Hook)이다.**
  
  - 함수형 컴포넌트도 훅을 사용하여 클래스형 컴포넌트의 기능을 모두 동일하게 구현할 수 있게 되었습니다.
  
  - Hook이란 **'state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정해진 함수를 실행되도록 만든 함수'** 를 의미한다.
  
  - 훅의 이름은 모두 **'use'** 로 시작한다.
  
  - 사용자 정의 훅을 만들 수 있으며, 이 경우에 이름은 자유롭게 할 수 있으나 'use'로 시작 할 것을 권장한다.
  
***
  
## useState 란

  - useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook이다.
  
  - 다음 예제는 버튼을 클릭할 때마다 카운트가 증가하는 함수형 컴포넌트 이다.
  
  - 하지만 증가는 시킬 수 있지만 증가할 때마다 재 렌더링은 일어나지 않습니다.
  
  - 이럴 때 state를 사용해야 하지만 함수형에는 없기 때문에 useState()를 사용합니다.
  
![image](https://user-images.githubusercontent.com/118963538/231625003-bb3e7049-09e5-47ed-a0db-e4356cf180bd.png)

***

## useState() 함수의 사용법은 다음과 같습니다.

    - 첫 번째 항목은 state의 이름(변수명)이고,
    
    - 두 번째 항목은 state의 set함수이다. 즉 state를 업데이트 하는 함수이다.
    
    - 함수를 호출 할 때 state의 초기 값을 설정한다.
    
    - 함수의 리턴값은 배열의 형태이다.
    
![image](https://user-images.githubusercontent.com/118963538/231625475-e746b13b-31a3-4773-a24c-a5a5e4e969cc.png)

***
    
## useEffect

  **useState와 함께 가장 많이 사용하는 Hook이다.**
    
  이 함수는 **사이드 이펙트**를 수행하기 위한 것이다.
  
   - 영어로 side effect는 부작용을 의미한다. 일반적으로 프로그래밍에서 사이트 이펙트는 '개발자가 의도 하지않은 코드가 실행되면서
   - 버그가 발생하는 것'을 말한다.
  
   - 하지만 리액트에서는 효과 또는 영향을 뜻하는 effect의 의미에 가깝다.
  
   - 예를 들면 서버에서 데이터를 받아오거나 수동으로 DOM을 변경하는 등의 작업을 의미한다.
  
   - 이 작업을 이펙트라고 부르는 이유는 이 작업들이 다른 컴포넌트에 영향을 미칠 수 있으며, 렌더링중에는 작업이 완료될 수 없기 
     때문이다. 렌더링이 끝난 이후에 실행되어야 하는 작업들이다.
  
   - 클래스 컴포넌트의 생명주기 함수와 같은 기능을 하나로 통합한 기능을 제공한다.
  
  **Side effect는 '원래의 용도 혹은 목적의 효과외에, 부수적으로 다른효과가 있는 것'을 뜻하는 것 이다.**

***

# 2교시

결국 SideEffect는 렌더링 외에 실행해야 하는 부수적인 코드를 말한다.
 * 예를 들면 네트워크 리퀘스트, DOM 수동 도작, 로깅 등은 정리가 필요없는 경우들이다.

## useEffect()함수는 다음과 같이 사용한다

   - 첫 번째 파라미터는 이펙트 함수가 들어가고, 두 번째 파라미터로는 의존성 배열이 들어간다.
   
 ![image](https://user-images.githubusercontent.com/118963538/231628412-8ded396c-443a-40ef-a7f2-105c36c69579.png)

    
   - 의존성 배열은 이펙트가 의존하고 있는 배열로, **배열 안에 있는 변수 중에 하나라도 값이 변경 되었을 때 이펙트 함수**가
     실행이 된다.
    
   - 이펙트 함수는 **처음 컴포넌트가 렌더링 된 이후, 그리고 재 렌더링 이후에 실행이 된다.**
    
   - 만약 이펙트 함수가 **마운트와 언마운트 될 때만 한 번씩 실행되게 하고 싶으면 빈 배열을 넣으면 된다.** 이 경우 props나
     state에 있는 어떤 값에도 의존하지 않기 때문에 여러 번 실행되지 않습니다.
   
***

## 의존성 배열을 생략하는 경우는 업데이트 될 때마다 호출이 된다.

    import React, {useTate, useEffect} from "react";
    
    function Counter(props) {
        const [count, setCount] = useState(0);
        
     useEffect(() => {
         document.title = '총 ${count}번 클릭했습니다.';
     });
     
     return (
         <div>
             <p> 총 {count}번 클릭했습니다. </p>
             <button onClick={() => setCount(count +1)}>
                 클릭
             </button>
         </div>
     
![image](https://user-images.githubusercontent.com/118963538/231628941-0cd73a0f-6996-475d-94bc-c1ef54154a88.png)

 - 여기서는 배열 없이 useEffect를 사용했기 때문에 DOM이 변경된 이후에 해당 이펙트 함수를 실행하라는 의미이다.

***

## componentWillUnmount()와 동일한 기능은 어떻게 구현하는지 알아보자

    function UserStatusWithCounter(props) {
            const [count, setCount] = useState(0);
        
         useEffect(() => {
             document.title = '총 ${count}번 클릭했습니다.';
         });
     
         const [isOnline, setIsOnline] = useState(null);
         useEffect(() => {
             ServerAPI.subscribeUserStatus(props.user.id.handleStatusChange);
             return () => {
                 ServerAPI.unsubscribeUserStatus(props.user.id.handleStatusChange);
             };
          });
          
![image](https://user-images.githubusercontent.com/118963538/231629825-55cc27f9-2f7a-4637-910d-9ab4466ffe34.png)

 - useEffect()에서 리턴하는 함수는 컴포넌트가 마운트 해제 될 때 호출된다.

***

## 정리하면 다음과 같다

      useEffect(() => {
        // 컴포넌트가 마운트 된 이후,
        // 의존성 배열에 있는 변수들 중 하나라도 값이 변경되었을 때 실행됨
        // 의존성 배열에 빈 배열 ([])을 넣으면 마운트와 언마운트시에 단 한 번씩만 실행된다.
        // 의존성 배열 생략 시 컴포넌트 업데이트 시마다 실행된다.
      
       return() => {
        // 컴포넌트가 마운트 해제되기 전에 실행됨
        ...
        }
      }, [의존성 변수1, 의존성 변수2, ...]);
      
***
  
## useMemo 란?

  - useMemo() 훅은 Memoizde value를 리턴하는 훅이다.
  
  - 이전 계산값을 갖고 있기 때문에 연산량이 놓은 작업의 반복을 피할 수 있다.
  
  - 이 훅은 렌더링이 일어나는 동안 실행된다.
  
  - 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됩니다.
  
  - 예를 들면 useEffect 사이트 이팩트 같은 것이다.
  
![image](https://user-images.githubusercontent.com/118963538/231630601-2a6fdd59-2972-42fc-bff9-d3536ad985f0.png)

    - 다음 코드와 같이 의존성 배열을 넣지 않을 경우, 렌더링이 일어날 때마다 매번 함수가 실행된다.

    - 따라서 의존성 배열을 넣지 않는 것은 의미가 없다.

    - 만약 빈 배열을 넣게 되면 컴포넌트 마운트 시에만 함수가 실행된다.

![image](https://user-images.githubusercontent.com/118963538/231630793-97a1d14b-e269-4bea-9bdb-a3c5a6e29e5e.png)

***

## useCallback

   - useCallback() 훅은 useMemo()와 유사한 역활을 한다.
    
   - 차이점은 **값이 아닌 함수를 반환한다는 점이다.**
    
   - 의존성 배열을 파라미터로 받는 것은 useMemo와 동일하다
    
   - 파라미터로 받은 함수를 콜백이라고 부른다
    
   - **useMemo**와 마찬가지로 의존성 배열 중 하나라도 변경되면 콜백함수를 반환한다.
   
![image](https://user-images.githubusercontent.com/118963538/231631148-8f14153b-c1fe-44ed-9434-333df1113cba.png)

***

## useRef

   - useRef() 훅은 래퍼런스를 사용하기 위한 훅이다.
    
   **래퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미한다.**
    
   - useRef() 훅은 바로 이 레퍼런스 객체를 반환한다.
    
   - 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미한다.
    
![image](https://user-images.githubusercontent.com/118963538/231631464-fe8a9b6a-202c-44d6-a9be-1499b7a0df8d.png)

    이렇게 반환된 레퍼런스 객체는 컴포넌트의 라이프타임 전체에 걸쳐서 유지가 된다.
    
    즉, 컴포넌트가 마운트 해제 전까지 계속 유지된다는 의미이다.

***
    
 ## 훅의 규칙
 
   첫 번째 규칙은 무조건 **최상의 레벨에서만 호출해야 한다는 것이다.** 여기서 최상위는 컴포넌트의 최상위
   레벨을 의미한다.
   
    - 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안된다.
   
    - 이 규칙에 따라서 훅은 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 한다.
   
   두 번째 규칙은 **리액트 함수 컴포넌트에서만 훅을 호출 해야 한다는 것이다**
   
    - 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안된다.
   
    - 혹은 리액트 함수 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있다.
    
***
    
## 나만의 훅 만들기
  
  - 필요 하다면 직접 훅을 만들어 쓸 수도 있다. 이것을 커스텀 훅 이라고 한다.
  
 1. 커스텀 훅을 만들어야 하는 상황
   
   - 예제 UserStatus 컴포넌트는 isOnline이라는 state에 따라서 사용자의 상태가 온라인인지 아닌지를 텍스트로
     보여주는 컴포넌트 이다.
   
![image](https://user-images.githubusercontent.com/118963538/231632852-ac6dcd50-7874-4eb4-a865-4f8c82546ab5.png)

***

 ## 다음 예는 연락처 목록을 제공하면서 사용자의 이름은 초록색으로 표시하는 UserListltem 컴포넌트 이다.

![image](https://user-images.githubusercontent.com/118963538/231633136-7671852c-fe1c-4c1b-b091-f0f917cdefc1.png)


    - 앞의 코드와 useState()와 useEffect() 훅을 사용하는 부분이 동일하다.
    
    - 이렇게 state와 관련된 로직이 중복되는 경우에 render props또는 HOC를 사용한다.

***

 ## 커스텀 훅 추출하기
 
    - 두 개의 자바스크립트 함수에서 하나의 로직을 공유하도록 하고 싶을 때 새로운 함수를 하나 만드는 방법을 사용한다.
    
    - 리액트 컴포넌트와 훅은 모두 함수이기 때문에 동일한 방법을 사용할 수 있다.
    
    - 이름을 use로 시작하고 내부에서 다른 훅을 호출하는 자바스크립트 함수를 만들면 된다.
    
    - 아래 코드는 중복되는 로직을 useUserStatus()라는 커스텀 훅으로 추출해낸 것이다.
    
![image](https://user-images.githubusercontent.com/118963538/231633813-fa74624a-253b-4c28-9382-5e8cf63f4e4a.png)

   - 한 가지 주의할 점은 일반 컴포넌트와 마찬가지로 **다른 훅을 호출하는 것은 무조건 커스텀 훅의 
     최상위 레벨에서만 해야한다.**
    
   - 커스텀 훅은 일반함수와 같다고 생각해도 된다 ( 이름만 틀리다 )
    
   - 다만 이름은 use로 시작하도록 한다는 것만 다르다

***

## 커스텀 훅 사용하기

 - 먼저 작성했던 코드를 사용자 훅을 사용해서 수정하면 다음과 같다.
 
![image](https://user-images.githubusercontent.com/118963538/231634827-6af30f6d-4d26-424b-9a8c-8d8dc7e556a4.png)

***

# 3교시

***

# 실습 해보기

  1. **useCounter.jsx 코드 작성**
  
    import React, { useState } from "react";

    function useCounter(initialvalue) {
        const [count, setCount] = useState(initialvalue);

        const increaseCount = () => setCount((count) => count + 1);
        const decreaseCount = () => setCount((count) => Math.max(count -1, 0));

        return [count, increaseCount, decreaseCount];
    }
    export default useCounter;
    
   2. **Accommdate.jsx 코드 작성**

           import React, { useEffect, useState } from "react";
           import useCounter from "./useCounter";

           const MAX_CAPACITY = 10;

           function Accommodate(props) {
              const [isFull, setIsFull] = useState(false);
              const [count, increaseCount, decreaseCount] = useCounter(0);

           useEffect(() => {
              console.log("======================");
              console.log("useEffect() is called.");
              console.log(`isFull: ${isFull}`);
           });

           useEffect(() => {
              setIsFull(count >= MAX_CAPACITY);
              console.log(`Current count value: ${count}`);
            }, [count]);

           return (
               <div style={{ padding: 16 }}>
                   <p>{`총 ${count}명 수용했습니다.`}</p>

                   <button onClick={increaseCount} disabled={isFull}>
                       입장
                   </button>

                   <button onClick={decreaseCount}>
                       퇴장
                   </button>

                   {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
               </div>
             );
           }
           export default Accommodate;
           
           
3. 실행 결과
      
![image](https://user-images.githubusercontent.com/118963538/231642697-82b23f3e-90cf-4c47-bc78-7266fe58f29b.png)


***
## 2023년 04월 06일 (6주차)
***
# 1교시

## 실습_댓글 컴포넌트 만들기

      프로젝트 디렉토리에 chapter_05라는 디렉토리 생성
    
      Comment.jsx 파일 생성
    
      아래 실습코드
***   

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
        
   ## Comment 컴포넌트 안에 css를 다음과 같이 작성
   
          const styles = {
             wrapper: {
                margin: 8,
                padding: 8,
                display: "flex",
                flexDirection: "row",
                border: "1px solid grey",
                borderRadius: 16,
            },
            imageContainer: {},
            image: {
                width: 50,
                height: 50,
                borderRadius: 25,
            },
            contentContainer: {
                marginLeft: 8,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            },
            nameText: {
                color: "black",
                fontSize: 16,
                fontWeight: "bold",
            },
             commentText: {
                 color: "black",
                 fontSize: 16,
            },
         };
***
# 2교시

## Comment를 범용으로 사용할 수 있도록 이름과 코멘트를 props로 받도록 수정한다.

      하지만 여기까지만 수정해서는 아무 것도 출력되지 않는다.
      
      그 이유는 props로 전달 받은 것이 아직 없기 때문이다.
      
 ***

    function Comment(props) {
        return (
            <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                    alt="프로필 이미지"
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>이건호</span>
                <span style={styles.commentText}>
                    내가 만든 첫 컴포넌트
                </span>
            </div>
        </div>
       );
     }
     export default Comment;
***
# CommentList를 이용해서 Comment에 props를 전달
   
      const comments = [
            {
             name: "이건호",
             comment: "안녕하세요 이건호입니다."
            },
            {
            name: "이건호2",
            comment: "안녕하세요 이건호2입니다."
            },
            {
            name: "이건호3",
            comment: "안녕하세요 이건호3입니다."
            },
            ]

    function CommentList(props) {
    return (
        <div>
            {comments.map((foo)=> {
                return (
                    <Comment name={foo.name} comment={foo.Comment} />
                )
            })}
        </div>
      )
    }

***

 ## 나쁜코드 예시
 
 ![image](https://user-images.githubusercontent.com/118963538/230258768-9ee4b5ee-f5f6-41c0-ae04-3b1ad31c3027.png)
 
 
     이렇게 코드를 작성하면 매번 컴포넌트를 수정해야 하기때문에 나쁜 코드의 예입니다.
 
     위의 코드처럼 별도의 객체로 받아 컴포넌트에서는 이것을 분리하여 출력하도록 해야한다.
 
 ***

 ## state란?

    state는 리액트 컴포넌트의 상태를 의미한다.

    상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의미한다.

    정확히 컴포넌트의 변경 가능한 데이터를 의미한다.

    state가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 한다.

    자주 바뀌는 값에 state를 포함 시키면 좋다

***

## state의 특징
    
    리액트 만의 특별한 형태가 아닌 단지 자바스크립트 객체일 뿐이다.

    예의 LikeButton class 컴포넌트이다.

    constructor는 생성자이고 그 안에 있는 this.state가 현 컴포넌트의 state이다.

    * 함수형 에서는 useState()라는 함수를 사용한다.
    
![image](https://user-images.githubusercontent.com/118963538/230259759-cbae7cff-98f6-481f-8d00-740dbb83a8c8.png)


    state는 변경이 가능하다고는 했지만 직접 수정해서는 안된다.

    불가능 하다고 생각하는 것이 좋다

    state를 변경하고자 할 때는 setstate()함수를 사용한다.
    
![image](https://user-images.githubusercontent.com/118963538/230260090-836619cd-8fa5-47bf-90fb-1b91556009d9.png)


## component vs. element vs. instance의 예시
  
    element = 재료

    component = 빵 틀

    instance = 재료를 빵 틀에 넣고 만든 빵
    
 ![image](https://user-images.githubusercontent.com/118963538/230261113-f143b336-b737-42c9-a828-103d8eed4422.png)


## 생명주기에 대해 알아보기

     생명주기는 컴포넌트의 생성시점, 사용시점, 종료시점을 나타내는 것이다.

     constructor가 실행 되면서 컴포넌트가 생성된다.
   
     생성 직후 conponentDidMount() 함수가 호출된다.

     컴포넌트가 소멸하기 전까지 여러 번 랜더링 한다.
   
     랜더링은 props, setState(), forceUpdate ()에 의해 상태가 변경되며 이루어진다.
   
     그리고 렌더링이 끝나면 conponentDinUpdate() 함수가 호출
   
     마지막으로 컴포넌트가 언마운트 되면 conpomentWillUnmount() 함수가 호출된다.

![image](https://user-images.githubusercontent.com/118963538/230261141-0909afbb-e32c-4a49-9baf-22bc9de8eefb.png)

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
