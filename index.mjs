import express from 'express';
const planets = (await import('npm-solarsystem')).default;
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.get('/', (req, res) => {
   res.render('index')
});

app.get('/earth', (req, res) => {
 let planetEarth = planets.getEarth();
 console.log(planetEarth);
// property name can be anything, but must match the name in the ejs file
// res.render('earth', {"propertyName":planetEarth});
// shorthand for the above line
 res.render('earth', {planetEarth});
});

app.get('/mars', (req, res) => {
 let planetMars = planets.getMars();
 console.log(planetMars);
 res.render('mars', {planetMars});
});


app.listen(3000, () => {
   console.log('server started');
});

