const express = require('express');
const app = express()
const PORT =  3000;

app.use(express.json());

app.listen(
    PORT, 
    () => console.log(`server running on http://localhost:${PORT}`)
)


app.get('/emoji', (req, res) => {
    res.status(200).send({
        emoji: '🥳', 
        name: 'hurray!'
    })
});

app.post('/emoji:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
        res.status(418).send({ message: 'We need a name!' })
    }

    res.send({ message: `Your selected emoji with ${name} and ID of ${id}`,
    })
});