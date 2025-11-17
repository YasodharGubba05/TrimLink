import jwt  from "jsonwebtoken";
const JWT_SECRET=process.env.JWT_SECRET;

export function createUserToken(payload) {
    const token =jwt.token
}