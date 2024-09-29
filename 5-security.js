const app = require('./4-middleware');
const helmet = require('helmet');
const bcrypt = require('bcrypt');

app.use(helmet());

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(`Username: ${username}, Hashed Password: ${hashedPassword}`); /* For demonstration purposes only */
    // Store the hashed password in the database
    res.send('User registered successfully!');
});
