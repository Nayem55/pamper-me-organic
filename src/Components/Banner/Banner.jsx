import React, { Suspense, useRef } from "react";
import banner from "../../assets/Images/banner1.jpg";
import bottleModel from "../../assets/Images/bottle2.glb";
import { motion, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

// BottleModel Component with Auto-Rotation
const BottleModel = ({ position, scale }) => {
  const { scene } = useGLTF(bottleModel);
  const modelRef = useRef();

  // Add auto-rotation on the X-axis
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Adjust rotation speed
    }
  });

  return <primitive ref={modelRef} object={scene} position={position} scale={scale} />;
};

const Banner = () => {
  const bannerContainer = useRef();
  const isInView = useInView(bannerContainer, { once: true });
  const isMobile = window.innerWidth <= 768;

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center sm:px-[150px] 2xl:px-4"
      style={{
        backgroundImage: `url(${banner})`,
      }}
      ref={bannerContainer}
    >
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center text-center md:text-left space-y-6 md:space-y-0 md:space-x-10 p-6">
        {/* Left side text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={
            isInView && { x: 0, opacity: 1, transition: { duration: 1 } }
          }
          className="w-full md:w-[50%] text-[#0C2E01]"
        >
          <h1 className="text-[18px] md:text-[38px] leading-snug md:leading-tight font-extrabold mb-4">
            Unleash the Power of Pure <br /> Ingredients for Lush, Beautiful{" "}
            <br /> Hair with <span className="text-[#98A375]">Pamper Me</span>
          </h1>
          {/* Bottle model for mobile */}
          <div className="w-full h-[300px] md:w-[50%] justify-center items-center flex sm:hidden">
            <Canvas
              style={{
                width: "100%",
                height: "100%",
                maxWidth: isMobile ? "350px" : "600px",
              }}
              camera={{ position: [0, 2, 5], fov: 25 }} // Adjust camera height
            >
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1.2} />
              <Suspense fallback={null}>
                <BottleModel
                  position={[0, -1, 0]} // Adjust model's Y-axis position
                  scale={isMobile ? 0.8 : 0.8} // Adjust scale for mobile
                />
              </Suspense>
              <Environment preset="city" /> {/* Adds environment lighting */}
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                maxPolarAngle={Math.PI / 2} // Restrict Y-axis movement
                minPolarAngle={Math.PI / 2} // Restrict Y-axis movement
              />
            </Canvas>
          </div>
          <p className="text-[#6F7364] text-md mt-6 sm:mt-0 md:text-3xl font-semibold">
            100% Organic Care for Your Hair, The Way Nature Intended
          </p>
        </motion.div>

        {/* Right side bottle model */}
        <div className="w-full h-[300px] md:w-[50%] justify-center items-center hidden sm:flex">
          <Canvas
            style={{
              width: "100%",
              height: "150%",
              maxWidth: "600px",
            }}
            camera={{ position: [0, 2, 5], fov: 60 }} // Adjust camera height
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} />
            <Suspense fallback={null}>
              <BottleModel
                position={[0, -2, 0]} // Adjust model's Y-axis position
                scale={2} // Full-size model for desktop
              />
            </Suspense>
            <Environment preset="city" /> {/* Adds environment lighting */}
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2} // Restrict Y-axis movement
              minPolarAngle={Math.PI / 2} // Restrict Y-axis movement
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

export default Banner;
