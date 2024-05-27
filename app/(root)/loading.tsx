import DroneLoader from "@/components/DroneLoader";

export default function Loading() {
  return (
    <section className="h-screen bg-blue-200 flex justify-center items-center w-screen">
      {/* <div id="bowlG" className="fixed top-1/3">
        <div id="bowl_ringG">
          <div className="ball_holderG">
            <div className="ballG"></div>
          </div>
        </div>
      </div> */}
       <DroneLoader show={true} theme="blue"/>
    </section>
  );
}
