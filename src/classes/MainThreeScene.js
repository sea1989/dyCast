import * as THREE from "three"

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import RAF from '../utils/RAF'

import SpherePillards from './SpherePillardsClass'
import Cube from './Cube'

//import ParticleSystem from './ParticleSystem'
import CamParallax from './CamParallax'
//import { isGloballyWhitelisted } from '@vue/shared'


class MainThreeScene {

    camera
    scene
    renderer
    controls

    constructor() {
        this.bind()
    }

    init(container) {
        //RENDERER SETUP
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        this.renderer.setSize(1000, 500)
        this.renderer.debug.checkShaderErrors = true
        container.appendChild(this.renderer.domElement)

        //MAIN SCENE INSTANCE
        // const color = new THREE.Color(0x5C33FF)
        this.scene = new THREE.Scene()
        //this.scene.background = color



        //CAMERA AND ORBIT CONTROLLER
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.set(0, 0, 2.4)
        this.controls = new OrbitControls(this.camera, this.renderer.domElement)
         this.controls.enabled = false
        this.controls.maxDistance = 40
        this.controls.minDistance = 3
        this.controls.minPolarAngle = 0;
        this.controls.maxPolarAngle = Math.PI / 2.6 + 0.3;
        CamParallax.init(this.camera)
        Cube.init(this.scene)
        //  SpherePillards.init(this.scene)
        // Floor.init(this.scene)
        //  Spectrum.init(this.scene)
        // ParticleSystem.init(this.scene)

        const color = 0x5054D1;
        const intensity = 3;
        const light = new THREE.PointLight(color, intensity);
        light.position.set(50, 10, -80);
        this.scene.add(light);


        const color2 = 0x41BC9C;
        const intensity2 = 3;
        const light2 = new THREE.PointLight(color2, intensity2);
        light2.position.set(-50, 10, -80);
        this.scene.add(light2);


        const color3 = 0xFFFFFF;
        const intensity3 = 0.2;
        const light3 = new THREE.AmbientLight(color3, intensity3);
        this.scene.add(light3);

        const color4 = 0xFFFFFF;
        const intensity4 = 1.5;
        const light4 = new THREE.PointLight(color4, intensity4);
        light4.position.set(0, 10, 40);
        this.scene.add(light4);

        //RENDER LOOP AND WINDOW SIZE UPDATER SETUP
        window.addEventListener("resize", this.resizeCanvas)
        RAF.subscribe('threeSceneUpdate', this.update)
    }

    update() {
        this.renderer.render(this.scene, this.camera);
        this.scene.rotateY(0.0015)
        //  SpherePillards.update()
        Cube.update()
        // Spectrum.update()
        // ParticleSystem.update()
        CamParallax.update()
    }

    resizeCanvas() {
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.camera.aspect = window.innerWidth / window.innerHeight
        this.camera.updateProjectionMatrix()
    }

    bind() {
        this.resizeCanvas = this.resizeCanvas.bind(this)
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
    }
}

const _instance = new MainThreeScene()
export default _instance