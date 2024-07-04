import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { GT } from "../constants"

const GundamTypes = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {
        GT.map((gundamtype) => (
          <div 
            className="w-28 h-28"
            key={
              gundamtype.name
            }>

            <BallCanvas icon={gundamtype.icon} />
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(GundamTypes, "")