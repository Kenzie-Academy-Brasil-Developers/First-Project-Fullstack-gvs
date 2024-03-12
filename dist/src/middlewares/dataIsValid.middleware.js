"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataIsValidMiddleware = void 0;
const dataIsValidMiddleware = (schema) => (req, res, next) => {
    const validatedBody = schema.parse(req.body);
    req.body = validatedBody;
    return next();
};
exports.dataIsValidMiddleware = dataIsValidMiddleware;
