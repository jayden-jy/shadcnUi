import { useState, useMemo, useCallback } from "react";

const getAverage = (numbers: number[]) => {
  console.log("평균 값을 계산 중입니다.");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, cur) => acc + cur);
  return sum / numbers.length;
};

export default function UseCallbackStudy() {
  /* 📝 [강의 필기 메모] --------------------------------------------------------
   * - useCallback은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용합니다.
   * - 이 훅(Hook)을 사용하면 만들어 놓았던 함수를 재사용(메모리에 박제)할 수 있습니다.
   * * * ⚙️ 파라미터 구조:
   * 1. 첫 번째 파라미터: 생성하고 싶은 함수
   * 2. 두 번째 파라미터: 의존성 배열 [] (어떤 값이 바뀌었을 때 함수를 새로 만들지 명시)
   * * * 🔄 의존성 배열 비교:
   * - onChange: 빈 배열 []을 넣었으므로 컴포넌트가 처음 렌더링 될 때만 함수를 만들고 평생 재사용합니다.
   * - onInsert: 배열 안에 [number, list]를 넣었으므로, 인풋 내용이 바뀌거나 새로운 항목이 추가되었을 때만
   * 새로 만들어진 최신 함수를 사용하게 됩니다.
   * * * ⚠️ [주의! 클로저(Closure) 문제]:
   * - 만약 onInsert에 빈 배열 []을 주면, 첫 렌더링 때의 list와 number 초기값(빈 값)의 복사본을 함수 내부에
   * 가두어(closed over) 버립니다. 이후 값이 바뀌어도 함수는 과거의 빈 값만 기억하므로 정상 작동하지 않습니다.
   * 따라서 함수 내부에서 사용하는 상태 값은 반드시 의존성 배열에 적어주어야 합니다!
   * ------------------------------------------------------------------------- */

  const [list, setList] = useState<number[]>([]);
  const [number, setNumber] = useState<string>("");

  const onChage = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);
  }, []);

  const onInsert = useCallback(() => {
    /* 📝 [메서드 메모]
     * - concat: 두 개 이상의 배열을 병합하는 데 사용됩니다. 기존 배열을 변경하지 않고 [새 배열]을 반환합니다.
     * - parseInt: 문자열 인자를 파싱하여 특정 진수의 [정수]를 반환합니다. */
    const newList = list.concat(parseInt(number) || 0);
    setList(newList);
    setNumber("");
  }, [number, list]);

  const average = useMemo(() => getAverage(list), [list]);

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginTop: 0, fontSize: "20px", color: "#ea580c" }}>
        🧲 Chapter 4. useCallback 학습
      </h2>
      <hr style={{ border: "0.5px solid #e5e7eb", margin: "20px 0" }} />

      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          value={number}
          onChange={onChage}
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
