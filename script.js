document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('dice').addEventListener('click', rollDice);
    document.getElementById('customizeForm').addEventListener('submit', function (event) {
      event.preventDefault();
      updateLabels();
    });
  });
  
  function rollDice() {
    const dice = document.getElementById('dice');
    const resultElement = document.getElementById('result');
  
    const faces = ['face1', 'face2', 'face3', 'face4', 'face5', 'face6'];
    const randomFace = faces[Math.floor(Math.random() * faces.length)];
  
    // Get the label of the randomly selected face
    const label = document.getElementById(randomFace).textContent;
  
    // Display the result
//    resultElement.textContent = `Rolled: ${label}`;
  
    // Hide all faces
    faces.forEach((face) => {
      document.getElementById(face).classList.remove('visible');
    });
  
    // Show only the face corresponding to the rolled number
    document.getElementById(randomFace).classList.add('visible');
  }
  
  function updateLabels() {
    // Update the labels based on user input
    document.getElementById('face1').textContent = document.getElementById('face1Input').value;
    document.getElementById('face2').textContent = document.getElementById('face2Input').value;
    document.getElementById('face3').textContent = document.getElementById('face3Input').value;
    document.getElementById('face4').textContent = document.getElementById('face4Input').value;
    document.getElementById('face5').textContent = document.getElementById('face5Input').value;
    document.getElementById('face6').textContent = document.getElementById('face6Input').value;
  
    // Reset the result text
    document.getElementById('result').textContent = '                ';
  
    // Hide all faces except Face 1
    const faces = ['face2', 'face3', 'face4', 'face5', 'face6'];
    faces.forEach((face) => {
      document.getElementById(face).classList.remove('visible');
    });
  }
  