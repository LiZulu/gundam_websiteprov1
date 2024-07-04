import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { timelines } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const TimelineCard = ({ timeline }) => (
  <VerticalTimelineElement
    contentStyle={{ 
      background: '#1d1836',
      color: '#fff'}}
    contentArrowStyle={{
      borderRight: '7px solid #232631'}}
    date={timeline.date}
    iconStyle={{ background: timeline.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={timeline.icon}
          alt={timeline.timeline_details}
          className="w-[60px] h-[60%] object-contain" />
      </div>
    }>
    
    <div>
      <h3 className="text-white text-[24px] font-bold"> {timeline.title} </h3>
      <p className="
        text-secondary text-[16px] font-semibold"
        style={{
          margin: 0
        }}> {timeline.company_name} </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {timeline.points.map((point, index) => (
        <li
          key={`timeline-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Timeline = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className= {styles.sectionSubText}> Timelines </p>
        <h2 className= {styles.sectionHeadText}> The universes </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {timelines.map((timeline, index) => (
            <TimelineCard key={index} timeline={timeline} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Timeline, "timeline")