import { ShapeDrawer } from './shapes.js';

export class MandalaDrawer {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.centerX = canvas.width / 2;
        this.centerY = canvas.height / 2;
        this.shapeDrawer = new ShapeDrawer(ctx);
        this.rotationAngle = 0;
    }

    drawMandala(mouseX, mouseY, settings) {
        const { segments, brushSize, color, opacity, pattern, mirror, animate } = settings;
        const numSegments = parseInt(segments);
        const segmentAngle = (Math.PI * 2) / numSegments;
        const size = parseInt(brushSize);
        const alpha = parseFloat(opacity);

        const dx = mouseX - this.centerX;
        const dy = mouseY - this.centerY;
        const radius = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);

        this.ctx.save();
        this.ctx.translate(this.centerX, this.centerY);

        for (let i = 0; i < numSegments; i++) {
            this.ctx.save();
            this.ctx.rotate(i * segmentAngle + (animate ? this.rotationAngle : 0));
            
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            this.shapeDrawer.drawShape(x, y, size, color, alpha, pattern);
            
            if (mirror) {
                this.shapeDrawer.drawShape(x, -y, size, color, alpha, pattern);
            }
            
            this.ctx.restore();
        }
        
        this.ctx.restore();
    }

    updateRotation() {
        this.rotationAngle += 0.02;
    }
}
