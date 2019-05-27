const express = require(`express`);

const app = express();

app.get(`/`, (request, response) => {
    response.send(`Welcome to out blog site`);
});

app.get(`/about`, (request, response) => {
    response.send(`The bloggers spot`)
})

app.listen(4000, () => console/log(`Listening on port 4000`));