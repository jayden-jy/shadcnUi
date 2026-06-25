import { useState } from "react";

export default function UseStateStudy() {
  const [value, setValue] = useState<number>(0);
  const [name, setName] = useState<string>("초기 이름 값입니다.");
  const [nickname, setNickname] = useState<string>("");

  return (
    <div style={{ border: "2px solid blue", padding: "20px", margin: "10px" }}>
      <h2>✍️ Chapter 1. useState 학습</h2>
      <p>
        현재 카운터 값은: <b>{value}</b>
      </p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>

      <div style={{ marginTop: "10px" }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="별명"
        />
      </div>

      <div>
        <p>
          이름 : {name} / 별명 : {nickname}
        </p>
      </div>
    </div>
  );
}
