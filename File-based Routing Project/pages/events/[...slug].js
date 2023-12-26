// this page is called catch-all page which content is rendered based on it's route queries

import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/Components/Events/EventList';
import ResultsTitle from '@/Components/UI/ResultsTitle';
import ErrorAlert from '@/Components/UI/ErrorAlert';
import Button from '@/Components/UI/Button';

function FilteredEvents () {
    const router = useRouter();
    let queryData = router.query.slug;
   
    // case query not catched yet:
    if(!queryData){
        return <ErrorAlert>Loading...</ErrorAlert>
    }
    
    // convert to number format
    let year = +queryData[0];
    let month = +queryData[1];
    let date = new Date(year, month - 1);

    // validate query values, case invalid:
    if(isNaN(year) || isNaN(month) || month < 1 || month > 12 || year > 2030 || year < 2021){
        return (
            <Fragment>
                <ErrorAlert>Invalid Filter, Please try again</ErrorAlert>
                <center><Button link={'/events'}>Show All Events</Button></center>
            </Fragment>
        )
    }
    
    let events = getFilteredEvents({year, month});
    if(events.length == 0){
        return (
            <Fragment>
                <ErrorAlert>No events found for {`${month}/${year}`}</ErrorAlert>
                <center><Button link={'/events'}>Show All Events</Button></center>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList events={events}/>
        </Fragment>
    )
}

export default FilteredEvents;