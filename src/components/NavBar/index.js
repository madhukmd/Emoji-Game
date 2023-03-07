import './index.css'

const Navbar = props => {
  const {presentScore, topScore, gamesStatus} = props
  const navImg = 'https://assets.ccbp.in/frontend/react-js/game-logo-img.png'
  return (
    <nav className="nav-container">
      <div className="nav-item-container">
        <div className="img-head">
          <img className="img" src={navImg} alt="emoji logo" />
          <h1 className="heading">Emoji Game</h1>
        </div>
        {gamesStatus && (
          <div className="img-head">
            <p className="heading">Score: {presentScore}</p>
            <p className="heading">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default Navbar
