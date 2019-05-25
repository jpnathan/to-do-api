module.exports = function(mongoose) {
  const Schema = mongoose.Schema;
  const userSchema = new Schema({
    nome: String,
    email: String,
  });

  return mongoose.model('User', userSchema);
};
