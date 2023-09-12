import bcrypt from 'bcryptjs';

const hashPassword = (password:any) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

export default hashPassword;
