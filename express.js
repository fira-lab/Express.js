const express = require ('express')

const app = express();

app.get("/", (req, res) =>{
    res.send ("hellow again exprss")
});

const PORT = process.enc.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port:${PORT}`))