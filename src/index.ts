import * as THREE from "three";

export function add(a: number, b: number) {
    return a+b;
}

export class CustomObject extends THREE.Object3D {
    constructor() {
        super();

        const ringGeometry = new THREE.RingGeometry();
        const ringMaterial = new THREE.MeshBasicMaterial({
            side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.scale.set(0.1, 0.1, 1);
        ring.rotation.setFromQuaternion(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), Math.PI / 2.));
        this.add(ring);

        const coneGeometry = new THREE.ConeGeometry();
        const coneMaterial = new THREE.MeshBasicMaterial();

        const cone1 = new THREE.Mesh(coneGeometry, coneMaterial);
        cone1.scale.set(0.1, 1, 0.1);
        cone1.position.set(0, -0.5, 0);
        this.add(cone1);

        const cone2 = new THREE.Mesh(coneGeometry, coneMaterial);
        cone2.scale.set(0.1, 1, 0.1);
        cone2.rotation.setFromQuaternion(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0), Math.PI));
        cone2.position.set(0, 0.5, 0);
        this.add(cone2);
    }
};
