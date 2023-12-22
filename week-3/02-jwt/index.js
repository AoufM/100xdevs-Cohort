const jwt = require("jsonwebtoken");
const jwtPassword = "secret";
const z = require("zod");

const emailSchema = z.string().email();
const passSchema = z.string().min(6);

function signJwt(username, password) {
  const userRes = emailSchema.safeParse(username);
  const passRes = passSchema.safeParse(password);
  if (!userRes.success || !passRes.success) {
    return null;
  }
  const signature = jwt.sign({ username }, jwtPassword);
  return signature;
}

function verifyJwt(token) {
    try{
        jwt.verify(token,jwtPassword);
        return true;
    }
    catch(e){

    }
    return false;
    }

function decodeJwt(token) {
    const decode= jwt.decode(token);
    if (decode) {
        return true;
    } else {
        return false; 
    }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
