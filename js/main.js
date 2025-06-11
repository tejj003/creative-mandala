import { CanvasManager } from './canvas.js';
import { MandalaDrawer } from './mandala.js';
import { ControlManager } from './controls.js';
import { showMessage, AnimationManager } from './utils.js';

class MandalaApp {
    constructor() {
        this.canvasManager = new CanvasManager('mandalaCanvas');
        this.mandalaDrawer = new MandalaDrawer(this.canvasManager.canvas, this.canvasManager.ctx);
        this.controlManager = new ControlManager();
        this.animationManager = new AnimationManager();
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupAnimation();
    }

    setupEventListeners() {
        // Canvas drawing events
        this.canvasManager.canvas.addEventListener('mousedown', (e) => {
            this.canvasManager.isDrawing = true;
            const mousePos = this.canvasManager.getMousePos(e);
            this.draw(mousePos.x, mousePos.y);
        });

        this.canvasManager.canvas.addEventListener('mousemove', (e) => {
            if (this.canvasManager.isDrawing) {
                const mousePos = this.canvasManager.getMousePos(e);
                this.draw(mousePos.x, mousePos.y);
            }
        });

        this.canvasManager.canvas.addEventListener('mouseup', () => {
            this.canvasManager.isDrawing = false;
        });

        this.canvasManager.canvas.addEventListener('mouseout', () => {
            this.canvasManager.isDrawing = false;
        });

        // Touch events
        this.setupTouchEvents();

        // Control buttons
        this.controlManager.elements.clearBtn.addEventListener('click', () => {
            this.canvasManager.clear();
        });

        this.controlManager.elements.saveBtn.addEventListener('click', () => {
            const success = this.canvasManager.save();
            showMessage(
                success ? 'Mandala saved successfully!' : 'Error saving image. Please try again.',
                success ? 'success' : 'error'
            );
        });

        this.controlManager.elements.randomBtn.addEventListener('click', () => {
            this.controlManager.randomize();
        });

        // Animation toggle
        this.controlManager.elements.animate.addEventListener('change', () => {
            if (this.controlManager.elements.animate.checked) {
                this.animationManager.start();
            } else {
                this.animationManager.stop();
            }
        });
    }

    setupTouchEvents() {
        this.canvasManager.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            this.canvasManager.canvas.dispatchEvent(mouseEvent);
        });

        this.canvasManager.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            this.canvasManager.canvas.dispatchEvent(mouseEvent);
        });

        this.canvasManager.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            const mouseEvent = new MouseEvent('mouseup', {});
            this.canvasManager.canvas.dispatchEvent(mouseEvent);
        });
    }

    setupAnimation() {
        this.animationManager.addCallback(() => {
            this.mandalaDrawer.updateRotation();
        });
    }

    draw(x, y) {
        const settings = this.controlManager.getSettings();
        this.mandalaDrawer.drawMandala(x, y, settings);
    }
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MandalaApp();
});
