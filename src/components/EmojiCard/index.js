// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisList, clickEvent} = props
  return (
    <li className="emoji-card" onClick={() => clickEvent(emojisList.id)}>
      <button type="button">
        <img
          src={emojisList.emojiUrl}
          alt={emojisList.emojiName}
          className="emoj-img"
        />
      </button>
    </li>
  )
}

export default EmojiCard
