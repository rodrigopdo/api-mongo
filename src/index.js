const app = require('./app');
const Loaders = require('./loaders');
const port = 3333;

Loaders.start();

app.listen(port, () => console.log(`Server is running on port: ${port}`));
