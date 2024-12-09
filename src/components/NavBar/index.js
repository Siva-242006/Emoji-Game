// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, result} = props

  if (result === 'Won' || result === 'Lose') {
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="logo-img"
          />
          <h1 className="logo-heading">Emoji Game</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo-img"
        />
        <h1 className="logo-heading">Emoji Game</h1>
      </div>
      <div className="scores-container">
        <p className="scores-para">Score: {score}</p>
        <p className="scores-para">Top Score: {topScore}</p>
      </div>
    </div>
  )
}

export default NavBar
