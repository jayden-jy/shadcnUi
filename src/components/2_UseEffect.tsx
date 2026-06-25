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

  return (
    <div style={{ marginTop: "10px", color: "#dc2626", fontWeight: "bold" }}>
      ⏰ 카운트: {count}
    </div>
  );
}

export default function UseEffectStudy() {
  /* 📝 [강의 필기 메모] --------------------------------------------------------
   * - useEffect는 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 훅입니다.
   * * 1. 마운트가 될 때만 (최초 1회만) 실행하고 싶을 때:
   * - 마운트란 리액트 DOM에 작성한 UI가 붙었을 때 (HTML을 자바스크립트로 통제 가능할 때)
   * - 컴포넌트가 화면에 맨 처음 렌더링 될 때만 실행하고 업데이트 시 패스하려면,
   * 두 번째 파라미터로 [빈 배열 []]을 넣어주면 됩니다.
   * * 2. 특정 값이 업데이트 될 때만 실행하고 싶을 때:
   * - 두 번째 파라미터 배열 안에 [검사하고 싶은 값]을 넣어주면 됩니다.
   * * 🔍 [추가 발견 사실]: 상태 값이 변화하면 해당 컴포넌트는 재렌더링이 된다는 것을 알 수 있습니다.
   * ------------------------------------------------------------------------- */

  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    console.log("컴포넌트가 렌더링 될 때마다 특정 작업을 수행합니다.");
    console.log("name ", name);
    console.log("nickname", nickname);
  });

  useEffect(() => {
    console.log("마운트가 될 때만 수행합니다. - 최초 1회 실시");
  }, []);

  useEffect(() => {
    console.log("name이라는 상태 값이 변할 경우에만 수행합니다.");
    console.log("name ", name);
    console.log("nickname", nickname);
  }, [name]);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginTop: 0, fontSize: "20px", color: "#16a34a" }}>
        🎬 Chapter 2. useEffect 학습
      </h2>
      <hr style={{ border: "0.5px solid #e5e7eb", margin: "20px 0" }} />

      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="별명"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>별명 :</b> {nickname}
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f9fafb",
          borderRadius: "8px",
        }}
      >
        <button onClick={() => setVisible(!visible)}>
          {visible ? "숨기기" : "보이기"}
        </button>
        {visible && <Timer />}
      </div>
    </div>
  );
}
