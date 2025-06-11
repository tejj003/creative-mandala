export class ControlManager {
    constructor() {
        this.elements = {
            colorPicker: document.getElementById('colorPicker'),
            brushSize: document.getElementById('brushSize'),
            opacity: document.getElementById('opacity'),
            segments: document.getElementById('segments'),
            mirror: document.getElementById('mirror'),
            pattern: document.getElementById('pattern'),
            animate: document.getElementById('animate'),
            
            brushSizeValue: document.getElementById('brushSizeValue'),
            opacityValue: document.getElementById('opacityValue'),
            segmentsValue: document.getElementById('segmentsValue'),
            
            clearBtn: document.getElementById('clearBtn'),
            saveBtn: document.getElementById('saveBtn'),
            randomBtn: document.getElementById('randomBtn')
        };
        
        this.initValueDisplays();
    }

    initValueDisplays() {
        this.elements.brushSize.oninput = () => {
            this.elements.brushSizeValue.textContent = this.elements.brushSize.value;
        };
        
        this.elements.opacity.oninput = () => {
            this.elements.opacityValue.textContent = this.elements.opacity.value;
        };
        
        this.elements.segments.oninput = () => {
            this.elements.segmentsValue.textContent = this.elements.segments.value;
        };
    }

    getSettings() {
        return {
            color: this.elements.colorPicker.value,
            brushSize: this.elements.brushSize.value,
            opacity: this.elements.opacity.value,
            segments: this.elements.segments.value,
            mirror: this.elements.mirror.checked,
            pattern: this.elements.pattern.value,
            animate: this.elements.animate.checked
        };
    }

    randomize() {
        this.elements.colorPicker.value = '#' + Math.floor(Math.random()*16777215).toString(16);
        this.elements.brushSize.value = Math.floor(Math.random() * 15) + 3;
        this.elements.opacity.value = (Math.random() * 0.8 + 0.2).toFixed(1);
        this.elements.segments.value = Math.floor(Math.random() * 16) + 6;
        this.elements.mirror.checked = Math.random() > 0.5;
        this.elements.pattern.value = ['circle', 'square', 'star', 'heart', 'spiral'][Math.floor(Math.random() * 5)];
        
        this.elements.brushSizeValue.textContent = this.elements.brushSize.value;
        this.elements.opacityValue.textContent = this.elements.opacity.value;
        this.elements.segmentsValue.textContent = this.elements.segments.value;
    }
}
