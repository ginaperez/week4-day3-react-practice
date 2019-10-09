import React, {Component} from 'react';
import axios from 'axios';
import PlayerForm from './components/PlayerForm';
import './App.css';

// {
//   "id": 1,
//   "wins": 0,
//   "favoriteCharacterName": "Captain Falcon",
//   "characterImage": "https://www.smashbros.com/images/og/captain_falcon.jpg",
//   "playerName": "Sean",
//   "trashTalkPercentage": 9000
// }

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allPlayers: []
    };
    this.getAllPlayers = this.getAllPlayers.bind(this);
    this.postPlayer = this.postPlayer.bind(this);
  }

  componentDidMount(){
    this.getAllPlayers();
  }

  getAllPlayers(){
    axios.get("/api/all_players").then(response => {
      this.setState({
        allPlayers: response.data
      });
    });
  }

  postPlayer(
    favoriteCharacterImage, 
    favoriteCharacterName, 
    playerName, 
    trashTalkPercentage)
    {
      const newPlayer = {
        favoriteCharacterImage,
        favoriteCharacterName,
        playerName,
        trashTalkPercentage
      }

      axios.post("/api/add_player", newPlayer)
           .then((response) => {
        this.setState({
          allPlayers: response.data
        });
      }).catch((err) => console.log(err))
  }

  render() {
    const { allPlayers } = this.state;
    const mappedPlayers = allPlayers.map(player => {
      return (
      <div key={player.id}>
        <div>
          {player.playerName}
        </div>
        <div>
          {player.favoriteCharacterName}
        </div>
        <div className="image-container">
          <img src={player.characterImage} 
               alt='character image for smashsisters' />
        </div>
      </div>
      )
    });
    return (
    <div className="App">
      <PlayerForm postPlayer={this.postPlayer} />
      <div>{mappedPlayers}</div>
    </div>
  )}
}

export default App;
