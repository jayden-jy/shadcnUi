import { useState } from "react";

export default function UseStateStudy() {
  /* 📝 [강의 필기 메모] --------------------------------------------------------
   * - useState는 리액트에서 가장 기본적인 훅(Hook)이며,
   * 함수 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해준다.
   * - 이 함수가 호출되면 배열을 반환한다.
   * - 반환된 배열의 첫 번째 요소는 [상태 값], 두 번째 요소는 [상태 값을 설정하는 함수]
   * - useState 함수의 파라미터(매개변수)에는 상태의 기본값, 초기값을 넣어 줍니다.
   * ------------------------------------------------------------------------- */

  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>(
    "빈 문자열로 할당하지 않은 name 상태 값입니다.",
  );
  const [nickname, setNickname] = useState<string>("");

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginTop: 0, fontSize: "20px", color: "#2563eb" }}>
        ✍️ Chapter 1. useState 학습
      </h2>
      <hr style={{ border: "0.5px solid #e5e7eb", margin: "20px 0" }} />

      <p>
        현재 카운터 값은: <b>{value}</b>
      </p>
      <button
        onClick={() => setValue(value + 1)}
        style={{ marginRight: "5px" }}
      >
        1 증가
      </button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          placeholder="별명 입력"
          style={{
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      <div style={{ marginTop: "15px" }}>
        <div>
          <b>이름 :</b> {name}
        </div>
        <div>
          <b>별명 :</b> {nickname}
        </div>
      </div>
    </div>
  );
}
