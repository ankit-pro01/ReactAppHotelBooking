const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const clientToken = req.body.token;

    try {
        const decoded = jwt.verify( clientToken, "JWT_SECRET");
        req.userData = decoded;
        next();
    }
    catch(error){
        return res.status(401).json({
            message : "Auth Failed"
        })
    }
    
}