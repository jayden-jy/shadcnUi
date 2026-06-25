import { useState } from "react";
import UseStateStudy from "./components/1_UseState";
import UseEffectStudy from "./components/2_UseEffect";
import UseMemoStudy from "./components/3_UseMemo";
import UseCallbackStudy from "./components/4_UseCallback"; // 👈 추가됨

function App() {
  const [currentTab, setCurrentTab] = useState<string>("useState");

  const tabButtonContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "10px",
    marginBottom: "25px",
    backgroundColor: "#f1f3f5",
    padding: "8px",
    borderRadius: "12px",
    width: "fit-content",
  };

  const getButtonStyle = (tabName: string): React.CSSProperties => {
    const isActive = currentTab === tabName;
    return {
      padding: "10px 20px",
      fontSize: "14px",
      fontWeight: "600",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      backgroundColor: isActive ? "#ffffff" : "transparent",
      color: isActive ? "#374151" : "#9ca3af",
      boxShadow: isActive ? "0px 4px 6px rgba(0, 0, 0, 0.05)" : "none",
      transition: "all 0.2s ease-in-out",
    };
  };

  return (
    <div
      style={{
        padding: "40px 20px",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "'Pretendard', -apple-system, sans-serif",
        color: "#1f2937",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "8px", fontWeight: "700" }}>
        🚀 리액트 훅 기능 강의 노트
      </h1>
      <p style={{ color: "#6b7280", marginBottom: "30px", fontSize: "15px" }}>
        개념별로 컴포넌트를 분리하여 깔끔하게 학습하는 대시보드입니다.
      </p>

      <div style={tabButtonContainerStyle}>
        <button
          onClick={() => setCurrentTab("useState")}
          style={getButtonStyle("useState")}
        >
          useState 학습
        </button>
        <button
          onClick={() => setCurrentTab("useEffect")}
          style={getButtonStyle("useEffect")}
        >
          useEffect 학습
        </button>
        <button
          onClick={() => setCurrentTab("useMemo")}
          style={getButtonStyle("useMemo")}
        >
          useMemo 학습
        </button>
        <button
          onClick={() => setCurrentTab("useCallback")}
          style={getButtonStyle("useCallback")}
        >
          useCallback 학습
        </button>{" "}
        {/* 👈 추가됨 */}
      </div>

      <div
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)",
          overflow: "hidden",
        }}
      >
        {currentTab === "useState" && <UseStateStudy />}
        {currentTab === "useEffect" && <UseEffectStudy />}
        {currentTab === "useMemo" && <UseMemoStudy />}
        {currentTab === "useCallback" && <UseCallbackStudy />} {/* 👈 추가됨 */}
      </div>
    </div>
  );
}

export default App;
