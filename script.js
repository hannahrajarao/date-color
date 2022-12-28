window.onload = function() {
  function displayDateTime() {
    const datetime = document.getElementById("datetime");
    const currentDate = new Date();
    datetime.innerHTML = currentDate.toLocaleString();
    datetime.style.color = getRandomColor();
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  displayDateTime();
  setInterval(displayDateTime, 1000);
}