import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Tooltip({ children, content }) {
  const triggerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [coords, setCoords] = useState({ left: 0, top: 0 });

  useEffect(() => {
    if (!visible || !triggerRef.current) return;
    const update = () => {
      const rect = triggerRef.current.getBoundingClientRect();
      setCoords({
        left: rect.left + rect.width / 2 + window.scrollX,
        top: rect.bottom + window.scrollY + 8, // 8px gap
      });
    };
    update();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [visible]);

  const tooltipNode =
    visible &&
    createPortal(
      <div
        style={{
          position: "absolute",
          left: `${coords.left}px`,
          top: `${coords.top}px`,
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
        className="whitespace-nowrap rounded-md bg-gray-800 text-white text-sm p-2 shadow-md"
        role="tooltip"
      >
        {content}
      </div>,
      document.body
    );

  return (
    <>
      <span
        ref={triggerRef}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        className="inline-block"
      >
        {children}
      </span>
      {tooltipNode}
    </>
  );
}
export default Tooltip;
