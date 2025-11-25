import express from 'express'

const app = express();
const PORT = process.env.PORT || 5006;



async function init() {

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}

init()