import app from "./app.js"

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost";

app.listen(PORT, HOST, (err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log(`http://${HOST}:${PORT}`)
    }
})