import { useState, useMemo } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균 값을 계산 중입니다.");
  if (numbers.length === 0) return 0;

  /* 📝 [메서드 메모]
   * - reduce: 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고, 하나의 결과값을 반환합니다. */
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

export default function UseMemoStudy() {
  /* 📝 [강의 필기 메모] --------------------------------------------------------
   * - number 상태 설명: 실제 input 태그에 입력된 숫자를 list 배열에 주입할 것이기 때문에
   * 상태 값 이름을 number로 지정했습니다. 단, input 입력값이라 데이터 타입은 string입니다.
   * ------------------------------------------------------------------------- */

  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>("");

  const onInsert = () => {
    /* 📝 [메서드 메모]
     * - concat: 두 개 이상의 배열을 병합하는 데 사용됩니다. 기존 배열을 변경하지 않고 [새 배열]을 반환합니다.
     * - parseInt: 문자열 인자를 파싱하여 특정 진수의 [정수]를 반환합니다. */
    const newList = list.concat(parseInt(number) || 0);
    setList(newList);
    setNumber("");
  };

  const average = useMemo(() => getAverage(list), [list]);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginTop: 0, fontSize: "20px", color: "#9333ea" }}>
        🧠 Chapter 3. useMemo 학습
      </h2>
      <hr style={{ border: "0.5px solid #e5e7eb", margin: "20px 0" }} />

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
          placeholder="숫자 입력"
        />
        <button onClick={onInsert}>등록</button>
      </div>

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
