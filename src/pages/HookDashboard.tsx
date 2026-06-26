import { useState } from "react";
import UseStateStudy from "../components/1_UseState";
import UseEffectStudy from "../components/2_UseEffect";
import UseMemoStudy from "../components/3_UseMemo";
import UseCallbackStudy from "../components/4_UseCallback";
import UseRefStudy from "../components/5_UseRef";

type TabType = "useState" | "useEffect" | "useMemo" | "useCallback" | "useRef";

export default function HookDashboard() {
  const [currentTab, setCurrentTab] = useState<string>("useState");

  // 탭 바 배경색 (다크 모드와 어울리는 짙은 회색)
  const tabButtonContainerStyle: React.CSSProperties = {
    display: "flex",
    gap: "10px",
    marginBottom: "25px",
    backgroundColor: "#1e293b",
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
      color: isActive ? "#0f172a" : "#94a3b8",
      boxShadow: isActive ? "0px 4px 6px rgba(0, 0, 0, 0.15)" : "none",
      transition: "all 0.2s ease-in-out",
    };
  };

  return (
    <div style={{ padding: "20px 0" }}>
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "8px",
          fontWeight: "700",
          color: "#f8fafc",
        }}
      >
        🚀 리액트 훅 기능 강의 노트
      </h1>
      <p style={{ color: "#94a3b8", marginBottom: "30px", fontSize: "15px" }}>
        개념별로 컴포넌트를 분리하여 깔끔하게 학습하는 대시보드입니다.
      </p>

      {/* 탭 버튼 영역 */}
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
        </button>
        <button
          onClick={() => setCurrentTab("useRef")}
          style={getButtonStyle("useRef")}
        >
          useRef 학습
        </button>
      </div>

      {/* 컨텐츠 카드 영역 (글자색 묻힘 방지를 위해 내부 글자색을 진한 회색 #1e293b로 고정) */}
      <div
        style={{
          backgroundColor: "#ffffff",
          color: "#1e293b",
          borderRadius: "16px",
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3)",
          overflow: "hidden",
        }}
      >
        {currentTab === "useState" && <UseStateStudy />}
        {currentTab === "useEffect" && <UseEffectStudy />}
        {currentTab === "useMemo" && <UseMemoStudy />}
        {currentTab === "useCallback" && <UseCallbackStudy />}
        {currentTab === "useRef" && <UseRefStudy />}
      </div>
    </div>
  );
}
