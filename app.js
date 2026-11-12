const   express = require('express');
const   app = express();
const   cors = require('cors');
const   dotenv = require('dotenv');

dotenv.config();
app.use(cors());
app.get("/",  (req, res) => {
    res.send('Welcome to the Express server!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});