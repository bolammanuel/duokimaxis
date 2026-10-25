import { Link } from 'react-router-dom';

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className={`brand${light ? ' brand--light' : ''}`} aria-label="Duokim Axis home">
      <img src="/logo.svg" width="30" height="37" alt="" />
      <span className="brand__name">
        duokim<span>axis</span>
        <span className="brand__period">.</span>
      </span>
    </Link>
  );
}
