import { useRouter } from 'next/router';
import { Fragment } from 'react';

import { getAllEvents } from '@/dummy-data';
import EventList from '@/Components/Events/EventList';
import EventSearch from '@/Components/Events/EventSearch';

function AllEvents () {
    const router = useRouter();
    let events = getAllEvents();

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

export default AllEvents;