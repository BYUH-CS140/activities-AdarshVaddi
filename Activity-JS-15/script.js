let selectedColor = null;

document.querySelectorAll('.color-option').forEach(box => {
    box.addEventListener('click', function() {
        selectedColor = this.getAttribute('data-color');

        // Highlight the selected box
        document.querySelectorAll('.color-option').forEach(b => b.style.border = '2px solid #333');
        this.style.border = '4px solid black';
    });
});

document.getElementById('changeColorButton').addEventListener('click', function() {
    if (selectedColor) {
        document.body.style.backgroundColor = selectedColor;
    } else {
        alert("Please select a color first.");
    }
});
