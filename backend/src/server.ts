import app from './app';

import './env';

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log('server is listening to port', PORT);
});
