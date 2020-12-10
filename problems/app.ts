import express = require('express');
import { Problem2 } from './2/solution';
import { Problem3 } from './3/solution';

const app: express.Application = express();

app.get('/', function (req, res) { res.send('Hello World!') });

app.listen(3000, () => { new Problem3() })