import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

const FloorPlan = () => {
  return ( 
    <>
      <Bedroom bedNum={1}/>
      <Kitchen />
      <Bath size={'Full'}/>
      <LivingRoom />
      <Bedroom bedNum={2}/>
      <Bath size={'Half'}/>
      <Bedroom bedNum={3}/>
    </>
  );
}

export default FloorPlan;

