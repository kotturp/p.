"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as THREE from "three"; // Ensure this is imported
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
    const ref = useRef<THREE.Group>(null); // Correct ref type
    const [sphere] = useState(() =>
        random.inSphere(new Float32Array(5000), { radius: 1.2 })
    );

    useFrame((state, delta) => {
        if (ref.current) { // Check if ref is valid before modifying
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
            <Points positions={sphere}>
                <PointMaterial color="white" size={0.005} />
            </Points>
        </group>
    );
};

export default StarBackground;
