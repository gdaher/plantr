const db = require('./models');

db.sync({force: true})
.then(() => {
    console.log('Synced!');
    db.close();
})
.catch(err => {
    console.error(err);
    db.close();
});
