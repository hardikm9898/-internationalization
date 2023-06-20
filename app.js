const express = require("express");
const { I18n } = require("i18n");
const path = require("path");
const app = express();
require("dotenv").config()
const port=process.env.PORT

const i18n = new I18n({
  locales: ["eng", "guj", "hin"],
  directory: path.join(__dirname, "translatore"),
  defaultLocale: "guj",
});

app.use(i18n.init);
app.get("/traslatore",(req,res,next)=>{
    res.send({message:res.__("message"),greating:res.__("greating")})
})
app.listen(port);
