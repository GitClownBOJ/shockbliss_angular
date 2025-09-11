import { ElementRef, Injectable } from '@angular/core';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';

export interface MenuConfig {
  type: 'drop' | 'hinge' | 'sticky';
  items: string[];
  colors?: string[];
}
@Injectable({
  providedIn: 'root'
})
export class ThreeSceneService {
    private scene: THREE.Scene;
    private camera: THREE.PerspectiveCamera;
    private renderer: THREE.WebGLRenderer;
    private world: CANNON.World;
    private clock: THREE.Clock;

    private menuItems: Array< {
        mesh: THREE.Mesh;
        body: CANNON.Body;
        originalPosition: THREE.Vector3;
        text: string;
    }> = [];

    private boundaries: CANNON.Body[] = [];
  private isAnimating = false;
  private currentMenuType: 'drop' | 'hinge' | 'sticky' = 'drop';
  
  // Font loader
  private fontLoader: THREE.FontLoader;
  private loadedFont: THREE.Font | null = null;


    constructor() {
        this.clock = new THREE.Clock();
    this.fontLoader = new THREE.FontLoader();
        this.initPhysics();
    }

    async initScene(canvas: ElementRef<HTMLCanvasElement>, width: number, height: number) {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1a1a1a);
        this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        this.camera.position.set = (0, 5, 10);

        this.renderer = new THREE.WebGLRenderer({
            canvas: canvas.nativeElement,
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(width, height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        const ambientLight = new THREE.AmbientLight(0x404040, 0.4); // Soft white light
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 7.5);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(directionalLight);

        await this.loadFont();
        this.setupBoundaries(width, height);
    }

    private async loadFont(): Promise<void> {
        return new Promise<void>((resolve) => {
            this.fontLoader.load('threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
                this.loadedFont = font;
                resolve();
            },
        undefined,
        () => {
            resolve();
        }
        );
        });
    }
    private initPhysics() {
        this.world = new CANNON.World() {
            this.world.gravity.set(0, -9.82, 0); // m/s²
            this.world.broadphase = new CANNON.NaiveBroadphase();
            this.world.solver.iterations = 10;

            
        }

}
}