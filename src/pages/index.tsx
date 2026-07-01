import { PencilLine } from "lucide-react";
import { AppSidebar } from "../components/common";
import {
  SkeletonHotTopick,
  SkeletonNewTopic,
} from "../components/common/skeleton";
import { Button } from "../components/ui";
import HookDashboard from "./HookDashboard";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();
  return (
    <main className="w-full h-full min-h-[720px] flex p-6 gap-6">
      <div className="fixed right-1/2 bottom-10 translate-x-1/2 z-20 items-center">
        <Button
          variant={"destructive"}
          className="flex items-center gap-2 !py-5 !px-6 rounded-full"
          onClick={() => navigate("/topics/create")}
        >
          <PencilLine className="w-4 h-4" />
          <span>나만의 토픽 작성</span>
        </Button>
      </div>
      {/* 카테고리 사이드바 */}
      <AppSidebar />
      {/* 컨텐츠 */}
      <section className="flex flex-1 flex-col gap-12">
        <HookDashboard />
        {/* 핫 토픽 */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img src="/assets/gifs/fire.gif" alt="@IMG" className="w-7 h-7" />
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                HOT 토픽
              </h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              지금 가장 주목받는 주제들을 살펴보고, 다양한 관점의 인사이트를
              얻어보세요.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <SkeletonHotTopick />
            <SkeletonHotTopick />
            <SkeletonHotTopick />
            <SkeletonHotTopick />
          </div>
        </div>
        {/* 뉴 토픽 */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <img
                src="/assets/gifs/writing-hand.gif"
                alt="@IMG"
                className="w-7 h-7"
              />
              <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                NEW 토픽
              </h4>
            </div>
            <p className="md:text-base text-muted-foreground">
              새로운 시선으로, 새로운 이야기를 시작해보세요.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <SkeletonNewTopic />
            <SkeletonNewTopic />
            <SkeletonNewTopic />
            <SkeletonNewTopic />
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
