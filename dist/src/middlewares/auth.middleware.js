"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    const headerTokenData = req.headers.authorization;
    if (!headerTokenData) {
        return res.status(401).json({ message: "Invalid token" });
    }
    const [_, token] = headerTokenData.split(" ");
    (0, jsonwebtoken_1.verify)(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return res.status(401).json({
                message: "Invalid token"
            });
        }
        res.locals.clientId = decoded.sub;
        return next();
    });
};
exports.authMiddleware = authMiddleware;
