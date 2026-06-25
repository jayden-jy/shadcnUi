import { useEffect, useState } from "react";

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

  return <div>⏰ 현재 타이머 카운트: {count}</div>;
}

export default function UseEffectStudy() {
  const [name, setName] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    console.log("화면이 처음 켜질 때(마운트) 딱 1회만 실행됩니다.");
  }, []);

  useEffect(() => {
    console.log("name 값이 바뀔 때마다 실행됩니다. 현재 값:", name);
  }, [name]);

  return (
    <div style={{ border: "2px solid green", padding: "20px", margin: "10px" }}>
      <h2>🎬 Chapter 2. useEffect 학습</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력 시 이펙트 발동"
      />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "타이머 숨기기" : "타이머 보이기"}
        </button>
        {visible && <Timer />}
      </div>
    </div>
  );
}
