import "reflect-metadata"
import "express-async-errors"
import express from "express"
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware"
import { clientsRouter } from "./routes/clients.routes"
import { contactsRouter } from "./routes/contacts.routes"
import { loginRouter } from "./routes/login.routes"
const cors = require('cors')
const fs = require('fs')
var path = require('path')
const app = express()


app.use(cors())
app.use(express.json())
app.use('/client',clientsRouter)
app.use('/contact' , contactsRouter)
app.use('/session', loginRouter)
app.use(handleAppErrorMiddleware)


export default app
