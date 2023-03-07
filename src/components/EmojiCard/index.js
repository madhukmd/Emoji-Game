import './index.css'

const EmojiCard = props => {
  const {eachList, checkImage} = props
  const {id, emojiName, emojiUrl} = eachList
  const getImage = () => {
    checkImage(id)
  }

  return (
    <li className="emoji-list">
      <button type="button" className="emoji-button">
        <img
          src={emojiUrl}
          alt={emojiName}
          onClick={getImage}
          className="img-icon"
        />
      </button>
    </li>
  )
}
export default EmojiCard
