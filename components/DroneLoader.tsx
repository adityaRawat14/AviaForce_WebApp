"use client";
import { AnimatePresence, motion } from "framer-motion";
import blackDroneLoader from "@/public/assets/drone-loader-black.png";
import blueDroneLoader from "@/public/assets/drone-loader-blue.png";
import Image from "next/image";
interface droneLoaderProps {
  theme?: "black" | "blue";
  show?: boolean;
  height?: number,
  width?:  number
}

const DroneLoader: React.FC<droneLoaderProps> = ({
  theme = "blue",
  show = false,
  height=70,
  width=70
}) => {

    return (
      <AnimatePresence>
       {show && <motion.div
        animate={{ rotateZ: 360 , }}
        transition={{duration:0.6,repeat:Infinity}}
        exit={{ rotateZ: 0 }}
        className={`w-[${width}]`} >
          <Image src={blueDroneLoader} alt="loading.." height={height} className="" />
        </motion.div>}
      </AnimatePresence>
      
    
  );

}

export default DroneLoader;
