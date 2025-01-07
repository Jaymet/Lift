document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('textInput');
    const fontSelect = document.getElementById('fontSelect');
    const textColor = document.getElementById('textColor');
    const fontSize = document.getElementById('fontSize');
    const designArea = document.getElementById('designArea');

    // Text hinzufügen
    textInput?.addEventListener('input', updateDesign);
    fontSelect?.addEventListener('change', updateDesign);
    textColor?.addEventListener('input', updateDesign);
    fontSize?.addEventListener('input', updateDesign);

    function updateDesign() {
        designArea.style.fontFamily = fontSelect.value;
        designArea.style.color = textColor.value;
        designArea.style.fontSize = `${fontSize.value}px`;
        designArea.textContent = textInput.value;
    }

    // Bildupload
    const imageUpload = document.getElementById('imageUpload');
    imageUpload?.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                img.style.maxWidth = '100%';
                designArea.innerHTML = '';
                designArea.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    });

    // T-Shirt Farbe ändern
    const colorBtns = document.querySelectorAll('.color-btn');
    const tshirtPreview = document.getElementById('tshirtCanvas');

    colorBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const color = this.dataset.color;
            tshirtPreview.style.backgroundColor = color;
        });
    });
});
