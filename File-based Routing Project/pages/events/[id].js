import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { getEventById } from '@/dummy-data';

import EventSummary from '@/Components/EventDetail/EventSummary';
import EventLogistics from '@/Components/EventDetail/EventLogistics';
import EventContent from '@/Components/EventDetail/EventContent';
import ErrorAlert from '@/Components/UI/ErrorAlert';
import Button from '@/Components/UI/Button';

function EventDetails () {
    let router = useRouter();
    let eventID = router.query.id;
    const event = getEventById(eventID);

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

export default EventDetails;