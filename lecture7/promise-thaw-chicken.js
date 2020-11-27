const thawChicken = minutes => {
  console.log('Chicken is being thawed...');

  return new Promise((resolve, reject) => {
    let isSomethingWrong = true;

    setTimeout(() => {
      if (!isSomethingWrong) {
        resolve('Thawed chicked');
      } else {
        reject(new Error('Something wrong happended!'));
      }
    }, minutes * 1000); // x * 1000 = x000
  });
}

// thawChicken(10 /* minutes */).then(
//   chicken => console.log(`What we have after waiting? - ${chicken}`),
//   error => console.log(`Error message ${error.message}`)
// );

const onFulfilled = (message) => {
  console.log(`What we have after waiting? - ${message}`)
}

const onRejected = (error) => {
  console.log(`Error message ${error.message}`);
}

thawChicken(8).then(onFulfilled).catch(onRejected);
