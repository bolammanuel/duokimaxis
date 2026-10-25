import { useEffect, useId, useRef, useState } from 'react';

const symbol =
  'M300.003 98.5901L0 239.434V98.5901V0H383.475V80.985V257.039L151.798 334.502C150.02 335.097 150.447 337.728 152.321 337.728H351.481C364.901 337.728 372.728 352.9 364.963 363.863L300.426 454.969C293.507 464.737 280.614 468.166 269.768 463.125L24.2709 349.01C13.1225 343.828 11.3195 328.705 20.9363 321.039L300.003 98.5901Z';

export function AnimatedLogo() {
  const titleId = useId();
  const root = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    if (!('IntersectionObserver' in window)) {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setStarted(true);
        observer.disconnect();
      },
      { threshold: 0.1 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <figure ref={root} className="logo-motion" data-animate={started}>
      <svg
        className="logo-motion__canvas"
        viewBox="-40 -36 464 548"
        width="232"
        height="274"
        id={`${titleId}-symbol`}
        fill="none"
        role="img"
        aria-labelledby={titleId}
      >
        <title id={titleId}>Duokim Axis symbol</title>
        <g className="logo-motion__float">
          <path
            d="M0 28.8349C0 15.12 11.1005 4.00195 24.7936 4.00195H358.681C372.375 4.00195 383.475 15.1201 383.475 28.8349V376.496C383.475 431.355 339.073 475.828 284.301 475.828H99.1746C44.402 475.828 0 431.355 0 376.496V28.8349Z"
            fill="#0D1C23"
          />
          <path className="logo-motion__fill" d={symbol} fill="#FA4517" />
          <path
            className="logo-motion__trace"
            d={symbol}
            pathLength="1"
            stroke="#FA4517"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </figure>
  );
}
