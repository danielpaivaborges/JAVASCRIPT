console.time("pedra");

const soma = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

soma(5, 8)
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    setTimeout(() => {
      console.timeEnd("pedra");
    }, 2000);
  });
