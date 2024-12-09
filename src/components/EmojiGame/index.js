import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard/index'
import WinOrLose from '../WinOrLoseCard/index'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, clickedEmojList: [], result: ''}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onEmojClick = id => {
    const {emojisList} = this.props
    const {score, clickedEmojList} = this.state
    const filteredEmojis = emojisList.find(each => each.id === id)

    if (clickedEmojList.some(each => each.id === filteredEmojis.id)) {
      this.setState(prevState => {
        if (prevState.score > prevState.topScore) {
          return {
            result: 'Lose',
            topScore: prevState.score,
          }
        }
        return {
          result: 'Lose',
        }
      })

      return
    }

    this.setState(
      {
        clickedEmojList: [...clickedEmojList, filteredEmojis],
        score: score + 1,
      },
      () => {
        if (clickedEmojList.length + 1 === emojisList.length) {
          this.setState(prevState => {
            if (prevState.score > prevState.topScore) {
              return {
                result: 'Won',
                topScore: prevState.score,
              }
            }
            return {
              result: 'Won',
            }
          })
        }
      },
    )
  }

  onPlayAgain = () => {
    console.log('hi')
    this.setState({score: 0, clickedEmojList: [], result: ''})
  }

  render() {
    const {score, topScore, result} = this.state
    const shuffledEmojisList1 = this.shuffledEmojisList()
    if (result === 'Won') {
      return (
        <div>
          <NavBar score={score} topScore={topScore} result={result} />
          <div className="game-container-for-result">
            <WinOrLose
              score={score}
              result={result}
              playAgainEvent={this.onPlayAgain}
            />
          </div>
        </div>
      )
    }
    if (result === 'Lose') {
      return (
        <div>
          <NavBar score={score} topScore={topScore} result={result} />
          <div className="game-container-for-result">
            <WinOrLose
              score={score}
              result={result}
              playAgainEvent={this.onPlayAgain}
            />
          </div>
        </div>
      )
    }
    return (
      <div>
        <NavBar score={score} topScore={topScore} />
        <ul className="game-container">
          {shuffledEmojisList1.map(each => (
            <EmojiCard
              key={each.id}
              emojisList={each}
              clickEvent={this.onEmojClick}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
