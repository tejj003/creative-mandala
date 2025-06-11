export function showMessage(text, type = 'info') {
    const existingMsg = document.querySelector('.message');
    if (existingMsg) {
        existingMsg.remove();
    }
    
    const message = document.createElement('div');
    message.className = `message message-${type}`;
    message.textContent = text;
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#f44336'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
        if (message.parentNode) {
            message.style.animation = 'slideOut 0.3s ease-in';
            setTimeout(() => message.remove(), 300);
        }
    }, 3000);
}

export class AnimationManager {
    constructor() {
        this.animationId = null;
        this.callbacks = [];
    }

    start() {
        if (this.animationId) return;
        
        const animate = () => {
            this.callbacks.forEach(callback => callback());
            this.animationId = requestAnimationFrame(animate);
        };
        animate();
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    addCallback(callback) {
        this.callbacks.push(callback);
    }

    removeCallback(callback) {
        const index = this.callbacks.indexOf(callback);
        if (index > -1) {
            this.callbacks.splice(index, 1);
        }
    }
}
