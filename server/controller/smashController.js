const smashData = require("../data.json");
let id = 3;
module.exports = {
    getAllPlayers: (req, res, next) => {
        console.log('hit')
        res.status(200).send(smashData);
    },
    getById: (req, res, next) => {
        const { id } = req.params;

        const index = smashData.findIndex((element) => {
            return element.id === parseInt(id)
        });

        if(index !== -1){
            
            res.status(200).send(smashData[index]);
        } else {
            res.status(404).send("player not found");
        }
    },
    addPlayer: (req, res, next) => {
        const {
            wins, 
            favoriteCharacterName, 
            favoriteCharacterImage, 
            playerName, 
            trashTalkPercentage
        } = req.body;


        const newPlayer = {
            id,
            wins,
            favoriteCharacterName,
            characterImage: favoriteCharacterImage,
            playerName,
            trashTalkPercentage
        }
        id++
        smashData.push(newPlayer);
        res.status(200).send(smashData);
    },
    updateCharacter: (req, res, next) => {
        const { id } = req.params;
        const { newCharacterName, newCharacterImage } = req.query
        const index = smashData.findIndex((player) => {
            return player.id === parseInt(id)
        });

        if(index !== -1) {
            smashData[index].favoriteCharacterName = newCharacterName || smashData[index].favoriteCharacterName
            smashData[index].characterImage = newCharacterImage || smashData[index].favoriteCharacterImage
            res.status(200).send(smashData)
        } else {
            res.status(404).send("player not found")
        }
    },
    updatePlayerWins: (res, req, next) => {
        const { id } = req.params;
        const index = smashData.findIndex(player => {
            return player.id === parseInt(id);
        });

        if(index !== -1) {
            smashData[index].wins++
            res.status(200).send(smashData) 
        } else {
            res.status(404).send("update failed")
        }
    },
    deletePlayer: (req, res, next) => {
        const { id } = req.params;
        const index = smashData.findIndex(player => {
            return player.id === parseInt(id)
        })
        smashData.splice(index, 1);
        res.status(200).send(smashData)
    },
};
