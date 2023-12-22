const express = require("express")

const app = express()

const PORT = process.env.PORT || 8080;

//conectarse al puerto
app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});