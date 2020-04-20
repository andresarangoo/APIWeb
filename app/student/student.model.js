(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var studentSchema = new Schema({
        id:{
            type: Number,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        curse: {
            type: String,
            required: true
        },
        note: {
            type: Number,
            required: true
        },
    });

    module.exports = mongoose.model('Student', studentSchema);
})();