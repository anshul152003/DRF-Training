import './Card.css';

function Card({imgURL, cardName, cardAbout, onButtonClick, buttonLabel }) {
  return (
    <div className="card-container">
      <img src={imgURL} alt="demo" />
      <div className="card-content">
        <p className="card-title">{cardName}</p>
        <p className="card-about">{cardAbout}</p>
        {onButtonClick && (
          <button onClick={onButtonClick}>{buttonLabel || "Change"}</button>
        )}
      </div>
    </div>
  );
}
export default Card;