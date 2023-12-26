import { getFeaturedEvents } from '../dummy-data';
import EventList from '@/Components/Events/EventList';

function Home() {
  let featureEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={featureEvents}/>
    </div>
  )
}

export default Home;
