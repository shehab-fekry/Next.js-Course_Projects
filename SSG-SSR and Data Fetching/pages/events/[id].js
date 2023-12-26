import { Fragment } from 'react';
import { getEventById, getFeaturedEvents } from '@/dummy-data';

import EventSummary from '@/Components/EventDetail/EventSummary';
import EventLogistics from '@/Components/EventDetail/EventLogistics';
import EventContent from '@/Components/EventDetail/EventContent';
import ErrorAlert from '@/Components/UI/ErrorAlert';
import Button from '@/Components/UI/Button';

function EventDetails (props) {
    const { event } = props;

    if(!event) return (
        <Fragment>
            <ErrorAlert>No event found!</ErrorAlert>
            <center><Button link={'/events'}>Show All Events</Button></center>
        </Fragment>
    )

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics
            date={event.date}
            address={event.location}
            image={event.image}
            imageAlt={event.title}/>
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

// Pre-Rendering with SSG (every 5min) and (some on the fly dynamic-page static generation)
export async function getStaticProps (context) {
    console.log('EventID Re-Generating...')
    const { params } = context;
    const event = getEventById(params.id);

    return {
        props: {
            event: event || null,
            revalidate: 300, // 5min
        }
    }
}

export async function getStaticPaths () {
    const events = getFeaturedEvents();
    const eventsPaths = events.map(event => ( {params: {id: event.id}} ));

    return {
        paths: eventsPaths,
        fallback: true,
    }
}

export default EventDetails;