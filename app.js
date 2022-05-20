const express = require("express");
const path = require("path");
const app = express();

//para declarar la ruta de la carpeta publica y poder usarla en HTML
const public = path.join(__dirname,"./public")
app.use(express.static(public));

//para llamar al servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log("Servidor corriendo en el puerto " + PORT));

//para mostrar en el servidor el archivo de home.html
app.get("/", (req,res)=>{
    //funcion controladora o handler
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

app.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"));
});

app.get("/login", (req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"));
});