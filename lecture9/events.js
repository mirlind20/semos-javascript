document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM is fully loaded');

  const btn = document.getElementById('document-loaded-event');
  btn.addEventListener('click', () => {
    console.log('clicked');
  })
});



document.addEventListener('load', () => {
  console.log('The page is fully loaded');
  const createLogo = document.createElement('img');

  createLogo.addEventListener('load', (event) => {
    console.log('The logo has been loaded');
  });

  // document.body.appendChild(createLogo);
  document.body.appendChild(createLogo);
  createLogo.src = 'https://idrivemarketing.com/sites/default/files/services/Logo-Design.jpg';
  console.log(createLogo);
  // const logo = document.getElementById('')
});

// document.addEventListener('beforeunload', (event) => {
//   event.preventDefault();
//   event.returnValue = '';
// });

// document.addEventListener('unload', (event) => {
//   // send analytic data
// });
