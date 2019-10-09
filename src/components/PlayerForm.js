import React from 'react';

// {
//   "id": 1,
//   "wins": 0,
//   "favoriteCharacterName": "Captain Falcon",
//   "characterImage": "https://www.smashbros.com/images/og/captain_falcon.jpg",
//   "playerName": "Sean",
//   "trashTalkPercentage": 9000
// }

export default class PlayerForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteCharacterName: "",
            characterImage: "",
            playerName: "",
            trashTalkPercentage: 0,
            wins: 0
        }
    }

    universalInput(property, value){
        this.setState({
            [property]: value
        });
    }

    render() {
        const { favoriteCharacterName, 
                characterImage, 
                playerName, 
                trashTalkPercentage 
            } = this.state
        return (
            <form onSubmit={e => {
                e.preventDefault();
                this.props.postPlayer(
                    favoriteCharacterName, 
                    characterImage, 
                    playerName, 
                    trashTalkPercentage 
                );
                this.setState({
                    favoriteCharacterName: "", 
                    characterImage: "", 
                    playerName: "", 
                    trashTalkPercentage: 0 
                });
            }}>
                <label>Favorite Character</label>
                <input value={favoriteCharacterName} 
                       onChange={(e) => this.universalInput("favoriteCharacterName", e.target.value)
            }
            />

                <label>Character Image</label>
                <input value={characterImage} onChange={(e) => this.universalInput("characterImage", e.target.value)
            }
            />

                <label>Player Name</label>
                <input value={playerName} onChange={(e) => this.universalInput("playerName", e.target.value)
            }
            />

                <label>Trash Talk %</label>
                <input value={trashTalkPercentage} onChange={(e) => this.universalInput("trashTalkPercentage", e.target.value)}/>

                <button>Submit</button>
            </form>
        )
    }
}