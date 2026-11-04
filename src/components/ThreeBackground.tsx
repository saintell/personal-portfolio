import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';

interface StarsProps {
  theme: 'dark' | 'light';
}

const Stars: React.FC<StarsProps> = ({ theme }) => {
  const ref = useRef<THREE.Points>(null);
  const [sphere] = useMemo(() => {
    // Generate random points in a sphere
    // Use a length that is a multiple of 3 (stride for position)
    const points = random.inSphere(new Float32Array(5001), { radius: 1.5 });

    // Validate to remove any NaN values that might cause BufferGeometry errors
    for (let i = 0; i < points.length; i++) {
      if (isNaN(points[i])) {
        points[i] = 0;
      }
    }
    return [points];
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  const isLight = theme === 'light';

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={isLight ? '#18181b' : '#ffffff'}
          opacity={isLight ? 0.75 : 0.9}
          size={isLight ? 0.0028 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const ThreeBackground: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars theme={theme} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
