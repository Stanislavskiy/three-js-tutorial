import './index.scss';
import App from './App';
import { WEBGL } from './utils';

const container = document.getElementById('app');

function ready() {
    if (WEBGL.isWebGLAvailable()) {
        initWebGLApp();
    } else {
        // Show Warning
        const warning = WEBGL.getWebGLErrorMessage();
        container.appendChild(warning);

    }
}

function initWebGLApp() {
    const app = new App({ container });
    const animate = () => {
        requestAnimationFrame(animate);
        app.render();
    }

    // Init three.js app
    app.init();
    // Run animation loop
    animate();
}

window.addEventListener('DOMContentLoaded', ready);