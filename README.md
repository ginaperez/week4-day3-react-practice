# no db review(smashsisters)

## front-end checklist

- reset.css
- package.json
    - main: sever => so we can type nodemon without giving a filename
    `nodemon --ignore src/`
- setupProxy.js
    - :9001

### file-structure
- src/
    - App.js => class
    - index.js
    - App.css
    - index.css => reset.css
    - setupProxy.js
    - components
        - PlayerCard.js
        - WinCounter.js
        - CharacterForm.js
        - LeaderBoard.js

### dependencies

- axios
- http-proxy-middleware
- react-icons

## backend checklist

### server folder-structure
- server/
    - index.js
    - controller/
        - smasherController.js

### 
- express

### routes
- get: '/api/all_players'
- getById: '/api/player/:id'

```js
app.get("/api/player/:id", (req, res, next) => {
    const {yummyyummy} = req.params;
})
```

- post: '/api/create_player'
- put: '/api/update_favorite_character'
- delete: '/api/delete_player'

### data

```js
const player = {
    tag, 
    wins, 
    favoriteCharacterName, 
    characterImage, 
    playerName, 
    trashTalkPercentage
}
```