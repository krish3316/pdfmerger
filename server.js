const express = require('express')
const app = express()
const port = 3000
const path=require('path')
const multer=require('multer')
const upload =multer({dest:'uploads/'})
const {mergePdf}=require('./merge')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"template/index.html"))
})

app.post('/merge', upload.array('pdfs',2), async(req, res,next) =>{
    // res.send({data: req.files})
    console.log(req.files)
   let a=await mergePdf(path.join(__dirname, req.files[0].path) ,path.join(__dirname,req.files[1].path))
    res.redirect(`http://localhost:3000/static/${a}.pdf`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})