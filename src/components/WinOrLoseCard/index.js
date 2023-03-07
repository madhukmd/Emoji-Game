import './index.css'

const WinOrLoseCard = props => {
  const {emojisList, presentScore, playAgain} = props

  const isWon = presentScore === emojisList.length
  const text = isWon ? 'You Won' : 'You Lose'
  const scoreStatus = isWon ? 'Best Score' : 'Score'

  const wonCard = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const LoseCard = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const image = isWon ? wonCard : LoseCard
  return (
    <div className="WinOrLoseCard">
      <div className="card-name-container">
        <h1 className="card-heading">{text}</h1>
        <p className="card-score">{scoreStatus}</p>
        <p className="score">{presentScore}/12</p>

        <button type="button" className="button" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <div className="img-style">
        <img src={image} alt="win or lose" className="w-l-image" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
