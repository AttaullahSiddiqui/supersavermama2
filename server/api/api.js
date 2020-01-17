const nodemailer = require("nodemailer");
let Email = require('../Models/emailList.model');
let resHandler = require('../utils/responseHandler');

module.exports = {
    subscribeMe: subscribeMe
};

function subscribeMe(req, res) {
    var newEmail = new Email({ userEmail: req.body.email });
    newEmail.save().then(function (result) {
        sendMail(req.body.email, (err, info) => {
            if (err) {
                console.log(err);
                res.json(resHandler.respondError("Unable to send Mail to Subscribed User", -3));
            } else {
                console.log("Email has been sent")
                res.json(resHandler.respondSuccess(result, "User subscribed successfully", 2));
            }
        });
    }, function (err) {
        console.log(err)
        if (err.errors.userEmail) res.json(resHandler.respondError("Duplicate", -3));
        else res.json(resHandler.respondError("Unable to save new subscriber", -3));
    })
}
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "awsumfriend7396@gmail.com",
        pass: "739639336427396"
    }
});
const sendMail = (userEmail, callback) => {
    const mailOptions = {
        from: `"smart atta", "awsumfriend7396@gmail.com"`,
        to: `<${userEmail}>`,
        subject: "Testing email from Publishers HUb",
        html: "<h1>And here is the place for HTML PUBLISHERSSSS</h1>"
    };
    transporter.sendMail(mailOptions, callback);
}