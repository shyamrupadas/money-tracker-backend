import jwt from 'jsonwebtoken';

function auth(req, res, next) {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split('')[1]
    if (!token) {
      return res.status(401).json({message: 'Auth error'})
    }
    const decoded = jwt.verify(token)
    req.user = decoded;
    next();
  } catch (e) {
    return res.send({message: 'Server error'});
  }
}

export default auth;