const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector('body');

buttons.forEach(function (ele) {
  ele.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'gray') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'lightBlue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
  });
});
