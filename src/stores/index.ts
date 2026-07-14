import { create } from "zustand";
import { persist } from "zustand/middleware";

// interface BearState {
//   bears: number;
//   increasePopulation: () => void;
//   removeAllBears: () => void;
//   updateBears: (newBears: number) => void;
// }

// const useStore = create<BearState>((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
// }));

// zustand에서 persist 기능은 상태(state)를 브라우저의 스토리지(LocalStorage나 SessionStorage 등)에 저장해서
// 페이지를 새로고침 하거나 브라우저를 닫았다가 다시 열어도 상태를 유지할 수 있게 해주는 기능

// zustand는 리액트에서 사용되는 간단한 글로벌 상태 관리 라이브러리 입니다.
// persist 미들웨어를 사용하면 zustand store의 데이터를 브라우저 스토리지에 저장할 수 있습니다.
// 이를 통해, 상태를 유지(persist) 할 수 있어, 예를 들어 로그인 상태, 장바구니, 테마 설정 등 페이지를 새로고침해도 유지되게 할 수 있습니다.

interface User {
  id: string;
  email: string;
  role: string;
}

interface AuthStore {
  user: User;
  setUser: (newUser: User) => void;
  reset: () => void;
}

// export const useAuthStore = create<AuthStore>((set) => ({
//   id: "",
//   email: "",
//   role: "",

//   setId: (newId) => set({ id: newId }),
//   setEmail: (newEmail) => set({ email: newEmail }),
//   setRole: (newRole) => set({ role: newRole }),

//   reset: () => set({ id: "", email: "", role: "" }),
// }));

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: {
        id: "",
        email: "",
        role: "",
      },
      setUser: (newUser: User) => set({ user: newUser }),
      reset: () => {
        (set({ user: { id: "", email: "", role: "" } }),
          localStorage.removeItem("auth-storage"));
      },
    }),
    { name: "auth-storage" },
  ),
);
