import { useState, useMemo } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균 값을 계산 중입니다... (useMemo 덕분에 필요한 때만 실행됨)");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

export default function UseMemoStudy() {
  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>("");

  const onInsert = () => {
    const newList = list.concat(parseInt(number) || 0);
    setList(newList);
    setNumber("");
  };

  const average = useMemo(() => getAverage(list), [list]);

  return (
    <div
      style={{ border: "2px solid purple", padding: "20px", margin: "10px" }}
    >
      <h2>🧠 Chapter 3. useMemo 학습</h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={onInsert}>등록</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <b>평균 값: {average}</b>
      </div>
    </div>
  );
}
