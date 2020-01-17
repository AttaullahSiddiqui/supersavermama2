let mongoose = require('mongoose');

let emailListSchema = mongoose.Schema({
    userEmail: {
        type: String, required: true, unique: true,
        validate: {
            isAsync: true,
            validator: function (value, isValid) {
                const self = this;
                return self.constructor.findOne({ userEmail: value })
                    .exec(function (err, user) {
                        if (err) throw err;
                        else if (user) {
                            if (self.id === user.id) {
                                return isValid(true);
                            }
                            return isValid(false);
                        }
                        else {
                            return isValid(true);
                        }

                    })
            },
            message: 'The email address is already taken!'
        },
    },
    CreatedAt: { type: String, default: Date.now() }
});

module.exports = mongoose.model('Email', emailListSchema);