# ✨ Interactive Mandala Maker ✨

A beautiful, interactive web application for creating symmetrical mandala patterns in real-time. Draw with your mouse or touch to generate stunning geometric art with customizable symmetry, colors, and effects.

![Mandala Maker Preview](preview.png)

## 🎨 Features

### Drawing Tools
- **Color Picker**: Choose any color for your mandala patterns
- **Brush Size**: Adjustable brush size from 1-20 pixels
- **Opacity Control**: Variable opacity from 0.1 to 1.0 for layering effects

### Symmetry Controls
- **Segments**: Create patterns with 4-24 symmetrical segments
- **Mirror Mode**: Toggle mirroring across each segment axis
- **Center Shapes**: Add geometric guides (Circle, Square, Triangle, Hexagon, Star, or None)

### Pattern Effects
- **Shape Patterns**: Draw with different shapes:
  - Circle (classic brush)
  - Square (pixel art style)
  - Star (decorative points)
  - Heart (romantic touch)
  - Spiral (flowing curves)
- **Animation Mode**: Rotating pattern animation while drawing

### Actions
- **Clear**: Reset the canvas to start fresh
- **Save**: Export your mandala as PNG with padding
- **Random**: Generate random settings for inspiration

## 🚀 Getting Started

### Installation
1. Clone or download this repository
2. Open `index.html` in any modern web browser
3. Start creating!

```bash
git clone <repository-url>
cd creative-mandala
open index.html
```

### Usage
1. **Select your tools**: Choose color, brush size, and opacity
2. **Configure symmetry**: Set segments, enable mirror mode, optionally add center shape
3. **Pick effects**: Choose pattern shape and enable animation if desired
4. **Start drawing**: Click and drag on the black canvas area
5. **Save your art**: Click the Save button to download your creation

## 🎯 Controls

### Mouse Controls
- **Click & Drag**: Draw mandala patterns
- **Hover**: Canvas preview with scaling effect

### Touch Controls (Mobile)
- **Touch & Drag**: Draw patterns on mobile devices
- **Pinch**: Browser zoom (standard mobile behavior)

### Keyboard Shortcuts
- Use Tab to navigate between controls
- Space/Enter to activate buttons and checkboxes

## 🛠️ Technical Details

### Built With
- **HTML5 Canvas**: For high-performance drawing
- **Vanilla JavaScript**: No external dependencies
- **CSS3**: Modern styling with gradients and animations
- **Responsive Design**: Works on desktop and mobile

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Architecture
The application uses a modular class-based architecture:
- `CanvasManager`: Handles canvas operations and center shapes
- `ShapeDrawer`: Manages different drawing patterns
- `MandalaDrawer`: Creates symmetrical mandala patterns
- `ControlManager`: Manages UI controls and settings
- `AnimationManager`: Handles rotation animations

## 🎨 Design Philosophy

The Mandala Maker embraces the meditative and spiritual nature of mandala creation while providing modern digital tools. The dark theme with purple accents creates a calming environment, while the monospace font gives it a technical, code-like aesthetic.

### Color Scheme
- **Primary**: Deep purples (#6c5ce7, #a29bfe)
- **Accent**: Pink gradients (#fd79a8, #fdcb6e)
- **Success**: Teal tones (#00b894, #00cec9)
- **Background**: Dark gradient (black to deep blue)

## 📱 Mobile Experience

The application is fully responsive and touch-enabled:
- Touch drawing support
- Responsive layout that stacks controls vertically on mobile
- Optimized canvas size for mobile screens
- Touch-friendly button sizes

## 🔧 Customization

### Adding New Patterns
To add a new drawing pattern, extend the `ShapeDrawer` class:

```javascript
drawNewPattern(x, y, size) {
    // Your pattern drawing logic here
    this.ctx.beginPath();
    // ... drawing commands ...
    this.ctx.fill();
}
```

### Adding New Center Shapes
Extend the `drawCenterShape()` method in `CanvasManager`:

```javascript
case 'newShape':
    this.drawNewCenterShape(this.centerX, this.centerY, size);
    break;
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

### Development Setup
1. Fork the repository
2. Make your changes to `index.html`
3. Test in multiple browsers
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspired by traditional mandala art and meditation practices
- Built with modern web technologies for accessibility and performance
- Designed for both artistic expression and technical learning

## 📊 Project Stats

- **File Size**: Single HTML file (~25KB)
- **Dependencies**: Zero external libraries
- **Performance**: 60fps drawing on modern devices
- **Accessibility**: Keyboard navigation support

---

**Made with ❤️ for digital artists and meditation enthusiasts**
