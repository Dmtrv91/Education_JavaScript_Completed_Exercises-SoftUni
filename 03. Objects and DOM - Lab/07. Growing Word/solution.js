
function growingWord() 
{
  let p = document.querySelector('#exercise p');
  let currPx = p.style.fontSize.slice(0,-2) * 2 || 2;
  let blueDiv = document.getElementById('blueDiv');
  let greenDiv = document.getElementById('greenDiv');
  let redDiv = document.getElementById('redDiv');
  let isBlue = blueDiv.getAttribute('active') === "true";
  let isGreen = greenDiv.getAttribute('active') === "true";
  let isRed = redDiv.getAttribute('active') === "true";

    if(currPx === 2 || isBlue)
    {
      p.style.color = "blue";
      blueDiv.setAttribute("active", false);
      greenDiv.setAttribute("active", true);

      } else if (isGreen) {
      p.style.color = "green";
      greenDiv.setAttribute('active', false);
      redDiv.setAttribute('active', true);

      } else if (isRed){
      p.style.color = "red";
      redDiv.setAttribute('active', false);
      blueDiv.setAttribute("active",true);
    }
  p.style.fontSize = `${currPx}px`;
}