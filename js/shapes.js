export class ShapeDrawer {
    constructor(ctx) {
        this.ctx = ctx;
    }

    drawShape(x, y, size, color, alpha, shape) {
        this.ctx.globalAlpha = alpha;
        this.ctx.fillStyle = color;
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = size;

        switch(shape) {
            case 'circle':
                this.drawCircle(x, y, size);
                break;
            case 'square':
                this.drawSquare(x, y, size);
                break;
            case 'star':
                this.drawStar(x, y, 5, size/2, size/4);
                break;
            case 'heart':
                this.drawHeart(x, y, size/3);
                break;
            case 'spiral':
                this.drawSpiral(x, y, size/4);
                break;
        }
    }

    drawCircle(x, y, size) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, size/2, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawSquare(x, y, size) {
        this.ctx.fillRect(x - size/2, y - size/2, size, size);
    }

    drawStar(cx, cy, spikes, outerRadius, innerRadius) {
        let rot = Math.PI / 2 * 3;
        let x = cx;
        let y = cy;
        const step = Math.PI / spikes;

        this.ctx.beginPath();
        this.ctx.moveTo(cx, cy - outerRadius);

        for (let i = 0; i < spikes; i++) {
            x = cx + Math.cos(rot) * outerRadius;
            y = cy + Math.sin(rot) * outerRadius;
            this.ctx.lineTo(x, y);
            rot += step;

            x = cx + Math.cos(rot) * innerRadius;
            y = cy + Math.sin(rot) * innerRadius;
            this.ctx.lineTo(x, y);
            rot += step;
        }

        this.ctx.lineTo(cx, cy - outerRadius);
        this.ctx.closePath();
        this.ctx.fill();
    }

    drawHeart(x, y, size) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + size/4);
        this.ctx.bezierCurveTo(x, y, x - size/2, y, x - size/2, y + size/4);
        this.ctx.bezierCurveTo(x - size/2, y + size/2, x, y + size, x, y + size);
        this.ctx.bezierCurveTo(x, y + size, x + size/2, y + size/2, x + size/2, y + size/4);
        this.ctx.bezierCurveTo(x + size/2, y, x, y, x, y + size/4);
        this.ctx.fill();
    }

    drawSpiral(x, y, size) {
        this.ctx.beginPath();
        for (let i = 0; i < size; i++) {
            const angle = 0.1 * i;
            const radius = i / 3;
            const spiralX = x + Math.cos(angle) * radius;
            const spiralY = y + Math.sin(angle) * radius;
            
            if (i === 0) {
                this.ctx.moveTo(spiralX, spiralY);
            } else {
                this.ctx.lineTo(spiralX, spiralY);
            }
        }
        this.ctx.stroke();
    }
}
