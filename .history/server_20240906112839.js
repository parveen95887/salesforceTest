const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

// Middleware to parse JSON and URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle POST request for Salesforce OAuth token
app.post('/get-token', async (req, res) => {
    const { client_id, client_secret, username, password } = req.body;

    const params = new URLSearchParams({
        grant_type: 'password',
        client_id,
        client_secret,
        username,
        password,
    });

    try {
        const response = await fetch('https://login.salesforce.com/services/oauth2/token', {
            method: 'POST',
            body: params,
        });
        const data = await response.json();

        if (response.ok) {
            res.json({ access_token: data.access_token });
        } else {
            res.status(response.status).json({ error: data });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch Salesforce token' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
