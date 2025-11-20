const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/tp', {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => console.log('Connexion à la base de données MongoDB établie'))
.catch((err) => console.error('Erreur lors de la connexion à la base de données MongoDB', err));
