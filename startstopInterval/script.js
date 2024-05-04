const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;
const startChangingColor = function () {
  const changeBgColor = function () {
    document.body.style.backgroundColor = randomColor();
  };
  if (!interval) {
    interval = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(interval);
  interval = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
