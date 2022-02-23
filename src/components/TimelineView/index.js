import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import {BgContainer, Heading} from './styledComponents'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimelineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard key={item.id} courseDetails={item} />
  }
  return (
    <BgContainer>
      <Heading color="True" fontSize="True">
        MY JOURNEY OF <br />
        <Heading>CCBP 4.0</Heading>
      </Heading>

      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </BgContainer>
  )
}

export default TimelineView
