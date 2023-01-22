// const path = require('path');
// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();

// app.set('view engine', 'ejs');
// app.set('views1', 'views1');

// const adminRoutes=  require('./routes/admin');
// const shopRoutes =  require('./routes/shop');
// // const contactRoutes =  require('./routes/contact');

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/admin',adminRoutes.routes);
// app.use(shopRoutes);
// // app.use(contactRoutes);
// app.use((req,res,next) => {
//     // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
//     res.status(404).render('404', {pageTitle: 'Page Not Found'});
// })
// // app.use((req,res,next) => {
// //     res.status(200).sendFile(path.join(__dirname, 'views', 'success.html'));
// // })
// app.listen(3000);

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
