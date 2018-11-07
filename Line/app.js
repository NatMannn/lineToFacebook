const express = require('express')
const line = require('@line/bot-sdk')
const app = express()
const port = 3000
const user = 'U2079d6b42920bddd69e18c862777638e'
const values = require('values')
const bodyParser = require('body-parser')

const config = {
    channelAccessToken:"7WrPshfLixuHJGOIZq3bS8hR55uBXk4UN0ru2bKfBO+eBAcqukiT3fLRMF/1IvUzZGs4/gj7203xnMF4eCRaAG4qJOSKpqPDglD4CgT6PyYBPO/jDEdEigTQNLMCTLXQDQ5lmIZqm1xiEDjPjtX/ggdB04t89/1O/w1cDnyilFU=",
    channelSecret:"436d5c5fcb9003a54efd820305188a1b"
}

const client = new line.Client(config);


app.use(values())
app.use(bodyParser.json())


app.post('/login', (req,res) => {
    console.log('test')
    console.log(req.body)
    const messagename = {
        type:'text',
        text:req.body.name
    }

    const messageemail = {
        type:'text',
        text:req.body.email
    }

    const messageimage = {
        type:'image',
        originalContentUrl:req.body.picture,
        previewImageUrl:req.body.picture
    }

    client.pushMessage(user,messagename)
    client.pushMessage(user,messageemail)
    client.pushMessage(user,messageimage)

})

app.listen(port, () => console.log(`App running ${port}`))
