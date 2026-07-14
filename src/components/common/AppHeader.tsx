import { NavLink, useNavigate } from "react-router";
import { Separator } from "../ui/separator";
import { useAuthStore } from "@/stores";

function AppHeader() {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const reset = useAuthStore((state) => state.reset);

  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1328px] flex items-center justify-between px-6 py-3">
        {/* 로고 & 네비게이션 메뉴 UI */}
        <div className="flex items-center gap-5">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80"
            alt="@LOGO"
            className="w-6 h-6 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex items-center gap-5">
            <div className="font-semibold">텍스트</div>
            <Separator orientation="vertical" className="!h-4" />
            <div className="font-semibold">텍스트</div>
          </div>
        </div>

        {/* 로그인 UI */}
        {user.email ? (
          <div className="flex items-center gap-5">
            <span>{user.email}</span>
            <Separator orientation="vertical" className="!h-4" />
            <span onClick={reset}>로그아웃</span>
          </div>
        ) : (
          <NavLink to={"/sign-in"}>로그인</NavLink>
        )}
      </div>
    </header>
  );
}

export { AppHeader };
