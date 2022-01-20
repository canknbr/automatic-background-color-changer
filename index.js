(function () {
  setInterval(() => {
    const rndColor = () => {
      return Math.floor(Math.random() * 256);
    };
    document.body.style.transition = 'background-color 1s ease-in-out';
    document.body.style.backgroundColor = `rgb(${rndColor()},${rndColor()},${rndColor()})`;
  }, 1000);
})();
