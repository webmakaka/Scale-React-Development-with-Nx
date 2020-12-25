import { getAllGames, getGame } from 'apps/api/src/app/games.repository';
import * as express from 'express';

const app = express();

app.get('/api/games', (req, res) => {
  return res.send(getAllGames());
});

app.get('/api/games/:id', (req, res) => {
  return res.send(getGame(req.params.id));
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
