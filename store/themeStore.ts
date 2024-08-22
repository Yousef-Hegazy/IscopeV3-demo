import { create, StateCreator } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type ThemeVariants = {
  primary: string;
};

export type Theme = {
  root: ThemeVariants;
  dark: Omit<ThemeVariants, "radius">;
};

export const themes: { [key: string]: Theme } = {
  zinc: {
    root: {
      primary: "240 5.9% 10%",
    },
    dark: {
      primary: "0 0% 98%",
    },
  },
  slate: {
    root: {
      primary: "222.2 47.4% 11.2%",
    },
    dark: {
      primary: "210 40% 98%",
    },
  },
  stone: {
    root: {
      primary: "24 9.8% 10%",
    },
    dark: {
      primary: "60 9.1% 97.8%",
    },
  },
  gray: {
    root: {
      primary: "220.9 39.3% 11%",
    },
    dark: {
      primary: "210 20% 98%",
    },
  },
  neutral: {
    root: {
      primary: "0 0% 9%",
    },
    dark: {
      primary: "0 0% 98%",
    },
  },
  red: {
    root: {
      primary: "0 72.2% 50.6%",
    },
    dark: {
      primary: "0 72.2% 50.6%",
    },
  },
  rose: {
    root: {
      primary: "346.8 77.2% 49.8%",
    },
    dark: {
      primary: "346.8 77.2% 49.8%",
    },
  },
  orange: {
    root: {
      primary: "24.6 95% 53.1%",
    },
    dark: {
      primary: "20.5 90.2% 48.2%",
    },
  },
  green: {
    root: {
      primary: "142.1 76.2% 36.3%",
    },
    dark: {
      primary: "142.1 70.6% 45.3%",
    },
  },
  blue: {
    root: {
      primary: "221.2 83.2% 53.3%",
    },
    dark: {
      primary: "217.2 91.2% 59.8%",
    },
  },
  yellow: {
    root: {
      primary: "47.9 95.8% 53.1%",
    },
    dark: {
      primary: "47.9 95.8% 53.1%",
    },
  },
  violet: {
    root: {
      primary: "262.1 83.3% 57.8%",
    },
    dark: {
      primary: "263.4 70% 50.4%",
    },
  },
};

export const radius = {
  0: "0",
  0.3: "0.3rem",
  0.5: "0.5rem",
  0.75: "0.75rem",
  1: "1rem",
};

export type ColorType = keyof typeof themes;
export type RadiusType = keyof typeof radius;

export interface ThemeState {
  color: ColorType;
  radius: RadiusType;
  isSidebar: boolean;
}
export interface ThemeActions {
  setColor: (color: ColorType) => void;
  setRadius: (radius: RadiusType) => void;
  setIsSidebar: (val: boolean) => void;
}

const themeState: StateCreator<ThemeState & ThemeActions> = (set) => ({
  color: "violet",
  radius: 1,
  isSidebar: true,
  setColor: (color) => set({ color }),
  setRadius: (radius) => set({ radius }),
  setIsSidebar: (isSidebar) => set({ isSidebar }),
});

const useThemeSettings = create<ThemeState & ThemeActions>()(
  persist(themeState, {
    name: "theme-state",
    storage: createJSONStorage(() => localStorage),
  })
);

export default useThemeSettings;
