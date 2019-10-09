const express = require('express');
const app = express();
app.use(express.json());

const { 
    getAllPlayers, 
    getById,
    deletePlayer,
    addPlayer,
    updateCharacter,
    updatePlayerWins 
} = require("./controller/smashController");

app.get("/api/all_players", getAllPlayers);
app.get("/api/player/:id", getById);
app.post("/api/add_player", addPlayer);
app.put("/api/update_character/:id", updateCharacter);
app.put("/api/update_wins/:id", updatePlayerWins);
app.delete("/api/delete_player/:id", deletePlayer);

const port = 9001;
app.listen(port, () => console.log(`server listening on ${port}`))