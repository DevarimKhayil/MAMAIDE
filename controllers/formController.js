
exports.submitForm = (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name}: ${message}`);
    res.redirect('/');
};
