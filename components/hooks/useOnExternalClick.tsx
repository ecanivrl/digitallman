import { RefObject, useEffect } from "react";

function useOnExternalClick<T extends HTMLElement>(
  ref: RefObject<T>,
  onExternalClick?: () => void,
  disable?: boolean,
  extraAllowedTargets?: Node[],
) {
  const enabled = disable == null || !disable;

  function handleOutsideClick(event: MouseEvent) {
    if (ref.current) {
      if (
        !ref.current.contains(event.target as Node) &&
        (!extraAllowedTargets ||
          !extraAllowedTargets.some((node) =>
            node.contains(event.target as Node),
          ))
      ) {
        onExternalClick?.();
      }
    }
  }

  useEffect(() => {
    document.removeEventListener("click", handleOutsideClick);

    if (enabled) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [enabled, extraAllowedTargets]);
}

export default useOnExternalClick;
