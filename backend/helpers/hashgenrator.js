import bcrypt from 'bcrypt';

const hashGenerator = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10); // await जरूरी है
    const hash = await bcrypt.hash(password, salt); // await जरूरी है
    return hash;
  } catch (e) {
    console.log('Error while generating hash:', e);
  }
};

export default hashGenerator;