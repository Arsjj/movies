import "./index.scss";

export function PlayBtn({ onPlay, id }) {
  return (
    <button className="playBtn" onClick={() => onPlay(id)}>
      <i className="bx bx-play"></i>
      <span>Play</span>
    </button>
  );
}

export function InfoBtn({ onInfo }) {
  return (
    <button className="button more" onClick={() => onInfo()}>
      <i className="bx bx-info-circle"></i>
      <span>Info</span>
    </button>
  );
}
