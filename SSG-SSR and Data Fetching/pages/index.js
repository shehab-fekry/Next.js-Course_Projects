import { getFeaturedEvents } from '../dummy-data';
import EventList from '@/Components/Events/EventList';

function Home (props) {
  const { featuredEvents } = props;

  if(featuredEvents.length == 0){
    return (
      <center>
        <p>No Featured Events Yet!</p>
      </center>
    )
  }

  return (
    <div>
      <EventList events={featuredEvents}/>
    </div>
  )
}

// Pre-Rendering with SSG (every 30min)
export async function getStaticProps (context) {
  console.log('Home Re-Generating...')
  const featuredEvents = getFeaturedEvents();

  if(!featuredEvents || featuredEvents.length == 0)
  return {notFound: true};
  
  return {
    props: {
      featuredEvents: featuredEvents,
    },
    revalidate: 1800, // 30min
  }
}

export default Home;
