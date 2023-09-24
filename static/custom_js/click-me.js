// JavaScript function to teleport the button to a random position on the page
const canvas = document.getElementById('myCanvas');
  // Get the div element by its id
const div = document.getElementById('content-data');

// Get the height and width of the div
const divWidth = div.offsetWidth;
const divHeight = div.offsetHeight;

// Get the canvas element by its id

// Set the height and width of the canvas to match the div's dimensions
canvas.width = divWidth;
canvas.height = divHeight;
const ctx = canvas.getContext('2d');
// Define initial button position and dimensions
let buttonX = 100;
let buttonY = 50;
const ul = document.getElementById('header-text');
const buttonWidth = 100;
const buttonHeight = 40;
let count = 0
// Button text
const buttonText = 'Click Me';


// Flag to check if the mouse is hovering over the button
let isHovering = false;

// Function to draw the button
function drawButton() {
  // Draw the button background
  ctx.fillStyle = 'blue';
  ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

  // Draw the button text
  ctx.fillStyle = 'white';
  ctx.font = '16px Arial';
  const textX = buttonX + (buttonWidth - ctx.measureText(buttonText).width) / 2;
  const textY = buttonY + buttonHeight / 2 + 6; // Adjust for vertical centering
  ctx.fillText(buttonText, textX, textY);
}

// Function to check if a point is inside the button
function isInsideButton(x, y) {
  return x >= buttonX && x <= buttonX + buttonWidth && y >= buttonY && y <= buttonY + buttonHeight;
}

// Redraw the canvas
function redrawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawButton();
}

// Add mousemove event listener to track hover
canvas.addEventListener('mousemove', function(event) {
  const mouseX = event.clientX - canvas.getBoundingClientRect().left;
  const mouseY = event.clientY - canvas.getBoundingClientRect().top;

  // Check if the mouse is inside the button's area
  if (isInsideButton(mouseX, mouseY)) {
    if (!isHovering) {
      // Mouse entered the button area, change button location
      buttonX = Math.random() * (canvas.width - buttonWidth);
      buttonY = Math.random() * (canvas.height - buttonHeight);
      redrawCanvas();
      isHovering = true;
      if(count==5){
        text_data = 'Come on its not that hard!';
        $('#header-text-funny').text(text_data)
      }
      else if(count==10){
        text_data = 'Is it really That hard?';
        $('#header-text-funny').text(text_data)

      }
      else if(count==15){
          text_data = 'I am feeling sad for you';
        $('#header-text-funny').text(text_data)

      }
      else if(count==20){
          text_data = 'You are slow :D';
        $('#header-text-funny').text(text_data)

      }

      count++
      
    }
  } else {
    isHovering = false;
  }
});

// Initial draw of the button
drawButton();
