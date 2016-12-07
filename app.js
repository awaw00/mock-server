import app from './src';

const port = process.env.PORT || 3008;

app.listen(port, (err) => {
  if (!err) {
    console.log('Mock server is listening at ' + port);
  } else {
    console.error(err);
  }
});
