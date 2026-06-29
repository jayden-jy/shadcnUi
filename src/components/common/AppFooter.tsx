import { Button, Separator } from "../ui";

function AppFooter() {
  return (
    <footer className="w-full flex flex-col items-center justify-center bg-[#121212]">
      <div className="w-full max-w-[1328px] flex flex-col gap-6 p-6 pb-18">
        <div className="w-full flex items-start justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start">
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                나의 학습 여정이,
              </h3>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                나만의 형식으로 이어지는 플랫폼
              </h3>
            </div>
            <div className="flex items-center gap-2">
              {/* GitHub 링크 버튼 */}
              <a
                href="https://github.com/jayden-jy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="border-0 bg-transparent hover:bg-accent"
                >
                  <svg
                    className="w-6 h-6 fill-current text-foreground"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </Button>
              </a>

              {/* 포트폴리오/블로그 링크 버튼 */}
              <a
                href="https://jayden-jy.github.io/portfolio/portfolio/portfolio.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="border-0 bg-transparent hover:bg-accent"
                >
                  <svg
                    className="w-6 h-6 stroke-current text-foreground"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    <line x1="12" y1="11" x2="12" y2="17" />
                    <line x1="9" y1="14" x2="15" y2="14" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">
              이용약관
            </p>
            <Separator orientation="vertical" className="!h-[14px]" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">
              개인정보처리방침
            </p>
            <Separator orientation="vertical" className="!h-[14px]" />
            <p className="cursor-pointer transition-all duration-300 hover:font-medium">
              클래스 론칭 문의
            </p>
          </div>
        </div>
        <Separator />
        <div className="w-full flex justify-between">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="h-10 text-base font-semibold">Contact</p>
              <div className="flex flex-col items-start gap-1 text-muted-foreground">
                <p>Email : wjddusekd@naver.com</p>
                <p>주소 : 경기도 하남시</p>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              @ Kim Jeongyeon all rights reserved
            </p>
          </div>
          <div className="flex flex-col mr-[66px]">
            <p className="h-10 text-base font-semibold">
              Publisher & Frontend Developer
            </p>
            <div className="flex flex-col items-start gap-1 text-muted-foreground">
              <p>이름 : 김정연 (Kim Jeongyeon)</p>
              <p>경력 : 웹 퍼블리셔 및 IT 프리랜서 (7 Years)</p>
              <p>주요 기술 : HTML5, CSS3, 웹 접근성(WA), JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { AppFooter };
