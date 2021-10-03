require('dotenv').config();

const app = require('./api/app');
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`\n** Running on port ${port} **\n`);
})