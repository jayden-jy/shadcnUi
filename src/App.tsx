import { useEffect, useState } from "react";

function App() {
  // useState => Hooks
  // useState는 리액트에서 가장 기본적인 훅(Hook)이며, 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
  // => 이 함수가 호출되면 배열을 반환한다.
  // => 변환된 배열의 첫 번째 요소는 상태 값, 두 번째 요소는 상태 값을 설정하는 함수
  // => useState 함수의 파라미터(매개변수)에는 상태의 기본값, 초기값을 넣어 줍니다.

  // const [value, setValue] = useState<number>(0);
  // const [name, setName] = useState<string>(
  //   "빈 문자열로 할당하지 않은 name 상태 값입니다.",
  // );
  // const [nickname, setNickname] = useState<string>("");

  // const increment = () => setValue(value + 1);
  // const decrement = () => setValue(value - 1);

  // const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };
  // const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setNickname(event.target.value);
  // };

  // return (
  //   <div>
  //     <p>
  //       현재 타운터 값은: <b>{value}</b>
  //     </p>
  //     <button onClick={increment}>1 증가</button>
  //     <button onClick={decrement}>1 감소</button>

  //     <div>
  //       <input type="text" value={name} onChange={onChangeName} />
  //       <input type="text" onChange={onChangeNickname} />
  //     </div>

  //     <div>
  //       <b>이름 : {name}</b>
  //       <b>별명 : {nickname}</b>
  //     </div>
  //   </div>
  // );

  // --------------------------------------------------------------------------------------------------------------------------------------- //

  // useEffect
  // useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 훅(Hook) 입니다.

  // - 마운트가 될 때만, 최초 1회만 실행하고 싶을 때
  // 마운트란, 리액트 DOM에 우리가 return 키워드 하단에 작성한 HTML, CSS 영역 즉, UI가 붙었을 때 => 우리가 HTML을 자바스크립트로 통제 가능할 때
  // useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고,
  // 업데이트 될 때는 실행하지 않으려면, 함수에 두 번째 파라미터(매개변수)로 빈 배열을 넣어주면 됩니다.

  // - 특정 값이 업데이트 될 때만 실행하고 싶을 때
  // useEffect를 사용할 때, 특정 값이 변경될 때만 호출하고 싶을 경우도 있습니다.
  // useEffect의 두 번째 파라미터(매개변수)로 전달되는 배열 안에 검사하고 싶은 값을 넣어주면 됩니다.

  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");

  // useEffect(() => {
  //   // 해당 컴포넌트가 최초 랜더링이 될 때, useEffect가 실행이 되고,
  //   // 우리가 선언한 state 즉, 상태 값이 변화하더라도 useEffect가 실행되는 것으로 보아
  //   // state 즉, 상태 값이 변화하면 해당 컴포넌트는 재랜더링이 된다는 것을 알 수가 있습니다.
  //   console.log("컴포넌트가 랜더링 될 때마다 특정 작업을 수행합니다.");
  //   console.log("name ", name);
  //   console.log("nickname", nickname);
  // });

  useEffect(() => {
    console.log("마운트가 될 때만 수행합니다. - 최초 1회 실시");
    console.log("name ", name);
    console.log("nickname", nickname);
  }, []);

  useEffect(() => {
    console.log("name이라는 상태 값이 변할 경우에만 수행합니다.");
    console.log("name ", name);
    console.log("nickname", nickname);
  }, [name]);

  function Timer() {
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
      const id = setInterval(() => {
        console.log("Interval 실행됨");
        setCount((c) => c + 1);
      }, 1000);

      return () => {
        console.log("cleanup: 이전 타이머 제거됨");
        clearInterval(id);
      };
    }, []);

    return <div>카운트: {count}</div>;
  }

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const onChangeNickname = (event: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(event.target.value);
  const [visible, setVisible] = useState<boolean>(true);

  return (
    <>
      <div>{visible && <Timer />}</div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <div>
        <input type="text" value={name} onChange={onChangeName} />
        <input type="text" value={nickname} onChange={onChangeNickname} />

        <div>
          <b>이름 : {name}</b>
          <b>별명 : {nickname}</b>
        </div>
      </div>
    </>
  );
}

export default App;
