const express =  require('express');
const app = express();
const helmet =  require('helmet');
const authRouter = require('../api/auth/auth-router');


app.use(helmet());
app.use(express.json());
app.use('/api', authRouter);

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
});

module.exports = app;