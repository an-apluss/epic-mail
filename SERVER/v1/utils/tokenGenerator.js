import jwt from 'jsonwebtoken';

const tokenGenerator = (user) => {
  const expiresIn = 24 * 60 * 60;
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn,
  });
};
export default tokenGenerator;
