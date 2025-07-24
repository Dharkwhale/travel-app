
import banner from "../assets/images/banner1.png"
import Arrow from "../assets/images/Arrow.png"
export const Hero = () => {
  return (
    <div className="relative">
    <div className="">
    <div className="">   
      <img src={banner} className="h-[150px] w-[1330px]" alt="" />
      
    </div>
    <div className="absolute top-6 left-5 ">
        <img src={Arrow} alt="" />
    </div>
    </div>
    </div>
  )
}

