// Write your code here.
import './index.css'

const WinOrLose = props => {
  const {score, result, playAgainEvent} = props
  console.log({playAgainEvent})
  if (result === 'Lose') {
    return (
      <div className="won-or-lose-card">
        <div>
          <h1 className="won-heading">You {result}</h1>
          <p className="won-para">
            Score <br />
            <span>{score}/12</span>
          </p>
          <button
            type="button"
            className="play-again-button"
            onClick={playAgainEvent}
          >
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
          className="won-or-lose-img"
        />
      </div>
    )
  }

  return (
    <div className="won-or-lose-card">
      <div>
        <h1 className="won-heading">You {result}</h1>
        <p className="won-para">Best Score</p>
        <p className="para">12/12</p>
        <button
          type="button"
          className="play-again-button"
          onClick={playAgainEvent}
        >
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
        alt="win or lose"
        className="won-or-lose-img"
      />
    </div>
  )
}

export default WinOrLose
