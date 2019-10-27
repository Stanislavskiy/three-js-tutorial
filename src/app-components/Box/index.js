import * as THREE from 'three';
import {
    DEFAULT_WIDTH,
    DEFAULT_HEIGHT,
    DEFAULT_DEPTH,
    DEFAULT_COLOR,
    DEFAULT_AUTO_INIT
} from './BoxConstants';

class Box {
    constructor({
        width = DEFAULT_WIDTH,
        height = DEFAULT_HEIGHT,
        depth = DEFAULT_DEPTH,
        color = DEFAULT_COLOR,
        autoInit = DEFAULT_AUTO_INIT
    } = {}) {
        this.geometry = null;
        this.matherial = null;
        this.mesh = null;

        this.width = width;
        this.height = height;
        this.depth = depth;
        this.color = color;

        if (autoInit) {
            this.init();
        }
    }

    init() {
        this.geometry = new THREE.BoxGeometry(this.width, this.height, this.depth);
        this.material = new THREE.MeshBasicMaterial({ color: this.color });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
    }

    animate() {
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.01;
    }
}

export default Box;