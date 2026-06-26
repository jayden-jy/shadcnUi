import { useRef } from "react";

export default function UseRefStudy() {
  /* 📝 [강의 필기 메모] --------------------------------------------------------
   * - useRef 훅(Hook)은 함수 컴포넌트에서 ref라는 속성을 쉽게 사용할 수 있도록 도와주는 도구입니다.
   * - React의 useRef는 컴포넌트 내에서 변하지 않는 값을 유지하거나 DOM 요소에 직접 접근할 때 사용합니다.
   * - 다른 React Hook과 목적이 다릅니다.
   * * * ⚙️ 파라미터 구조:
   * - 저장된 값은 컴포넌트가 리렌더링되어도 유지되며, 값이 바뀌어도 리렌더링을 일으키지 않습니다.
   * - ref 속성은 JSX, TSX에서 요소나 컴포넌트에 참조를 연결하는 역할입니다.
   * * * 🔄 왜 초기값으로 null을 넣어줄까?
   * - 컴포넌트가 처음 초기화되는 시점에는 아직 화면(DOM)이 그려지기 전입니다.
   * - 가리킬 HTML 태그 주소가 존재하지 않으므로, 객체형 빈 값인 'null'을 대기석으로 채워둡니다.
   * * * ⚠️ [주의! querySelector와의 차이]:
   * - 자바스크립트 방식은 리액트의 통제를 벗어나므로 데이터 싱크가 깨질 위험이 있습니다.
   * - useRef는 리액트 허락 하에 붙이는 고유 '이름표'이므로 컴포넌트 간에 절대 꼬이지 않고 안전합니다.
   * ※ 인풋 창의 글자를 지우는 등의 데이터 조작은 useRef가 아니라 useState로 처리하는 것이 정석입니다.
   * ------------------------------------------------------------------------- */

  const inputElement = useRef<HTMLInputElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    // useRef 동작
    inputElement.current?.focus();
    fileInputRef.current?.click();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2 style={{ marginTop: 0, fontSize: "20px", color: "#ea580c" }}>
        🧲 Chapter 5. useRef 학습
      </h2>
      <hr style={{ border: "0.5px solid #e5e7eb", margin: "20px 0" }} />

      <div style={{ marginBottom: "15px" }}>
        <input type="text" ref={inputElement} placeholder="텍스트 입력" />
        <input type="file" ref={fileInputRef} style={{ display: "none" }} />
        <button onClick={handleClick}>등록</button>
      </div>
    </div>
  );
}
