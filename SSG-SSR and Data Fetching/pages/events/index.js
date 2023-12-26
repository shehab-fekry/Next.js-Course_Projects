import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';

import { getAllEvents } from '@/dummy-data';
import EventList from '@/Components/Events/EventList';
import EventSearch from '@/Components/Events/EventSearch';
import ErrorAlert from '@/Components/UI/ErrorAlert';

function AllEvents (props) {
    let [events, setEvents] = useState(props.events);
    const router = useRouter();

    // get latest events
    useEffect(() => {
        let updatedEvents = getAllEvents();
        setEvents(updatedEvents);
        console.log(updatedEvents)
    }, [])
    
    if(!events || events.length == 0) return (
        <Fragment>
            <ErrorAlert>There are no events yet!</ErrorAlert>
        </Fragment>
    )

    // navigating programatically to FilterdEvents
    const searchFilter = (year, month) => {
        let fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventSearch onSearch={searchFilter}/>
            <EventList events={events}/>
        </Fragment>
    )
}

// Pre-Rendering with SSG (every 30min) and (client-side data fetching)
export async function getStaticProps (context) {
    const events = getAllEvents();

    return {
        props: {
            events: events,
        },
        revalidate: 1800, // 30min
    }
}

export default AllEvents;