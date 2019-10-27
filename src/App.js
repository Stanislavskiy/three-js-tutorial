import * as THREE from 'three';

import Box from './app-components/Box';


class App {
    constructor({ container = null, aspectRatio = null }) {
        this.renderer = null;
        this.camera = null;
        this.scene = null;

        this.container = container || document.body;
        this.aspectRatio = aspectRatio || window.innerWidth / window.innerHeight;

        // Scene components
        this.box = null;
    }


    // *************************
    // INIT
    // *************************


    init() {
        this._initScene();
        this._bindEvents();
        this._initMeshes();

        this.render();
    }

    _initScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, this.aspectRatio, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();

        this._updateRendererSize();

        this.container.appendChild(this.renderer.domElement);

        this.camera.position.z = 5;
    }

    // MESHES

    _initMeshes() {
        // Create box
        this.box = new Box({ width: 2 });
        this.scene.add(this.box.mesh);
    }

    _animateMeshes() {
        // Animate box
        this.box.animate();
    }


    // *************************
    // PRIVATE
    // *************************


    _updateRendererSize() {
        const containerRect = this.container.getBoundingClientRect();

        this.renderer.setSize(containerRect.width, containerRect.height);
    }


    // *************************
    // EVENTS
    // *************************


    _bindEvents() {
        window.addEventListener('resize', this._onResize);
    }

    _onResize = () => {
        this._updateRendererSize();
    }


    // *************************
    // PUBLIC
    // *************************


    render() {
        this._animateMeshes();

        this.renderer.render(this.scene, this.camera);
    }
}

export default App;