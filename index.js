(function () {
  let timer = setInterval(() => {
    const rndColor = () => {
      return Math.floor(Math.random() * 256);
    };
    const convertToHex = num => {
      let hex = num.toString(16);
      return hex.length === 1 ? `0${hex}` : hex;
    };

    document.body.style.backgroundColor = `rgb(${rndColor()},${rndColor()},${rndColor()})`;
  }, 1500);
})();
