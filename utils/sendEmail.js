var nodemailer = require('nodemailer');

module.exports = async(t,usr)=>{
    try {
        var transporter = nodemailer.createTransport({
            host: "smtp-relay.sendinblue.com",
            port: 587,
            auth: {
              user: "noreply.bookworm.mail@gmail.com",
              pass: "mpKqLvZUJSCBgYIH"
            }
          });

          var mailOptions = {
            from: 'noreply.bookworm.mail@gmail.com',
            to: usr.email,
            subject: 'Verification For BookWorm',
            html: `<h1>Click On The Link Below To Verify Your Email For BookWorm</h1><br>
            http://localhost:3000/verify/${t.token}`
          };

        await  transporter.sendMail(mailOptions);
        return {status: "ok"};
    } catch (error) {
      console.log(error)
        return {error: "error"};
    }
}