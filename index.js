const app = require('express')();
const PORT =  8080;

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
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({ emoji: `Your selected emoji with ${logo} and ID of ${id}`,
    })
});