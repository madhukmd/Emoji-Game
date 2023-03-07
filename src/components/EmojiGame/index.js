/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.
  
const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import NavBar from '../NavBar'
import './index.css'

class EmojiGame extends Component {
  state = {
    emojisIdList: [],
    topScore: 0,
    gamesStatus: true,
  }

  checkTopScore = present => {
    const {topScore} = this.state
    let TopScore = topScore
    if (present > topScore) {
      TopScore = present
    }
    this.setState({topScore: TopScore, gamesStatus: false})
  }

  checkImage = id => {
    const {emojisList} = this.props
    const {emojisIdList} = this.state
    const clickStatus = emojisIdList.includes(id)
    const score = emojisIdList.length

    if (clickStatus) {
      this.checkTopScore(score)
    } else {
      if (emojisList.length - 1 === score) {
        this.setState({topScore: score, gamesStatus: false})
      }
      this.setState(prevState => ({
        emojisIdList: [...prevState.emojisIdList, id],
      }))
    }
  }

  playAgain = () => {
    this.setState({emojisIdList: [], gamesStatus: true})
  }

  render() {
    const {emojisList} = this.props
    const {emojisIdList, gamesStatus, topScore} = this.state
    const presentScore = emojisIdList.length

    const shuffledEmojisList = () => emojisList.sort(() => Math.random() - 0.5)

    return (
      <div className="ng-container">
        <NavBar
          topScore={topScore}
          presentScore={presentScore}
          gamesStatus={gamesStatus}
        />
        <div className="bodyContainer">
          <ul className="card-container">
            {gamesStatus ? (
              shuffledEmojisList().map(eachItem => (
                <EmojiCard
                  key={eachItem.id}
                  eachList={eachItem}
                  checkImage={this.checkImage}
                />
              ))
            ) : (
              <WinOrLoseCard
                emojisList={emojisList}
                presentScore={presentScore}
                playAgain={this.playAgain}
              />
            )}
          </ul>
        </div>
      </div>
    )
  }
}
export default EmojiGame
