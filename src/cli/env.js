const parseEnv = () => {
  const arr = Object
    .keys(process.env)
    .filter(el => el.startsWith('RSS_'));
  const str = arr.map(el => `${el}=${process.env[el]}`).join('; ');

  console.log(str);
};

parseEnv();