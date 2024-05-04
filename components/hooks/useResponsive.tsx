"use-client";

import { useEffect, useRef, useState } from "react";

export type BreakPoint = "sm" | "md" | "lg" | "xl" | "xxl";
export type ResponsiveState = Partial<Record<BreakPoint, boolean>>;

export const SM = 640;
export const MD = 768;
export const LG = 1024;
export const XL = 1280;
export const XXL = 1536;

function useResponsive(options?: { watchPoints?: BreakPoint[] }) {
  const initComplete = useRef(false);
  const lastState = useRef<ResponsiveState>({});
  const [state, setState] = useState<ResponsiveState>({});

  function handleResize() {
    const windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    if (!initComplete.current || options?.watchPoints?.includes("sm")) {
      if (windowSize.width >= SM) {
        if (lastState.current.sm != true) {
          setState({ ...lastState.current, sm: true });
          lastState.current = { ...lastState.current, sm: true };
        }
      } else {
        if (lastState.current.sm != false) {
          setState({ ...lastState.current, sm: false });
          lastState.current = { ...lastState.current, sm: false };
        }
      }
    }
    if (!initComplete.current || options?.watchPoints?.includes("md")) {
      if (windowSize.width >= MD) {
        if (lastState.current.md != true) {
          setState({ ...lastState.current, md: true });
          lastState.current = { ...lastState.current, md: true };
        }
      } else {
        if (lastState.current.md != false) {
          setState({ ...lastState.current, md: false });
          lastState.current = { ...lastState.current, md: false };
        }
      }
    }
    if (!initComplete.current || options?.watchPoints?.includes("lg")) {
      if (windowSize.width >= LG) {
        if (lastState.current.lg != true) {
          setState({ ...lastState.current, lg: true });
          lastState.current = { ...lastState.current, lg: true };
        }
      } else {
        if (lastState.current.lg != false) {
          setState({ ...lastState.current, lg: false });
          lastState.current = { ...lastState.current, lg: false };
        }
      }
    }
    if (!initComplete.current || options?.watchPoints?.includes("xl")) {
      if (windowSize.width >= XL) {
        if (lastState.current.xl != true) {
          setState({ ...lastState.current, xl: true });
          lastState.current = { ...lastState.current, xl: true };
        }
      } else {
        if (lastState.current.xl != false) {
          setState({ ...lastState.current, xl: false });
          lastState.current = { ...lastState.current, xl: false };
        }
      }
    }
    if (!initComplete.current || options?.watchPoints?.includes("xxl")) {
      if (windowSize.width >= XXL) {
        if (lastState.current.xxl != true) {
          setState({ ...lastState.current, xxl: true });
          lastState.current = { ...lastState.current, xxl: true };
        }
      } else {
        if (lastState.current.xxl != false) {
          setState({ ...lastState.current, xxl: false });
          lastState.current = { ...lastState.current, xxl: false };
        }
      }
    }
  }

  useEffect(() => {
    if ((options?.watchPoints?.length ?? 0) > 0)
      window.addEventListener("resize", handleResize);
    handleResize();
    initComplete.current = true;
    if ((options?.watchPoints?.length ?? 0) > 0)
      return () => window.removeEventListener("resize", handleResize);
  }, []);

  return state;
}

export default useResponsive;
