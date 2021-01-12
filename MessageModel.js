const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    email: String,
    text: String
});

const message = mongoose.model('Message', messageSchema);

exports.createMessage = (inMail, inText) => {
    var message = new message({
      email: inMail,
      text: inText
    })

    return message
}

exports.getAllMessages = async () => {
  let message = await message.find({})
  return message
}