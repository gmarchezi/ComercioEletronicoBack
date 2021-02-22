const mongoose = require('mongoose');

const URI_PRODUCAO = "mongodb+srv://outrigger:comercio@cluster0.rda29.gcp.mongodb.net/ecommerce?retryWrites=true&w=majority"
const URI_TESTE = "mongodb+srv://outrigger:comercio@cluster0.rda29.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(URI_TESTE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose;