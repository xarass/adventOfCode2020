import express = require('express');
import { Problem2 } from './2/solution';

const app: express.Application = express();

app.get('/', function (req, res) { res.send('Hello World!') });

app.listen(3000, () => { new Problem2() })

app.use(express.static('inputs'));