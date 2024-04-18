import { FC, useEffect, useState } from "react";

const WindowSize: FC = () => {
  const [windowSize, setWindowSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });
  const resize = () => {
    setWindowSize({ x: window.innerWidth, y: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [windowSize]);

  return (
    <div>
      <h2>Размеры экрана</h2>
      <div>
        <p>Ширина {windowSize.x}</p>
        <p>Высота {windowSize.y}</p>
      </div>
    </div>
  );
};

export default WindowSize;
