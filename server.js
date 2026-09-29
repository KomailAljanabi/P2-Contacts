// imports
const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const morgan = require('morgan')
const session = require('express-session');
const methodOverride = require('method-override')
const { MongoStore } = require("connect-mongo");
const connectToDB = require('./db.js')
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);


const passUserToView = require("./middleware/pass-user-to-view.js");


const authController = require("./routes/auth.routes.js");
const indexController = require("./routes/index.routes.js");
const prCtContoller = require("./routes/my-contacts.routes.js")
const puCtController = require('./routes/all-contacts.routes.js')


app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,

    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
      collectionName: "sessions"
    }),

    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24
    }
  })
);
app.use(passUserToView)



app.use('/auth', authController)
app.use('/', indexController)
app.use('/my-contacts', prCtContoller)
app.use('/all-contacts', puCtController)


app.use( async (req, res) => {
  try {
    await res.status(404).render('404.ejs', { requestedUrl: req.originalUrl });
  } catch (err) {
    console.log(err)
  }
});


async function startServer() {
  const PORT = process.env.PORT || 3000;
  await connectToDB();

  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
}

startServer();
