export {};

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  import * as THREE from "three";
  export const MeshLineGeometry: typeof THREE.BufferGeometry;
  export const MeshLineMaterial: typeof THREE.Material;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      meshLineMaterial: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
