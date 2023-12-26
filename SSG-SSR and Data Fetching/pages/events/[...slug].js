// this page is called catch-all page which content is rendered based on it's route queries

import { Fragment } from 'react';
import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/Components/Events/EventList';
import ResultsTitle from '@/Components/UI/ResultsTitle';
import ErrorAlert from '@/Components/UI/ErrorAlert';
import Button from '@/Components/UI/Button';

function FilteredEvents (props) {
    const {events, date, year, month, notValid} = props;

    // validate query values, case invalid:
    if(notValid){
        return (
            <Fragment>
                <ErrorAlert>Invalid Filter, Please try again</ErrorAlert>
                <center><Button link={'/events'}>Show All Events</Button></center>
            </Fragment>
        )
    }
    
    if(!events || events.length == 0){
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

// On the fly dynamic-pages server-side rendering
export async function getServerSideProps (context) {
    const { params } = context;
    const year = +params.slug[0];
    const month = +params.slug[1];

    if(isNaN(year) || isNaN(month) || month < 1 || month > 12 || year > 2030 || year < 2021)
    return {props: {notValid: true}}
    
    const events = getFilteredEvents({year, month});
    const date = '' + new Date(year, month - 1);

    return{
        props:{
            events: events || [],
            date: date,
            year: year,
            month: month,
        }
    }

}

// On the fly dynamic-pages static generation
// export async function getStaticProps (context) {
//     const { params } = context;
//     const year = +params.slug[0];
//     const month = +params.slug[1];

//     if(isNaN(year) || isNaN(month) || month < 1 || month > 12 || year > 2030 || year < 2021)
//     return {props: {notValid: true}}
    
//     const events = getFilteredEvents({year, month});
//     const date = '' + new Date(year, month - 1);

//     return{
//         props:{
//             events: events || [],
//             date: date,
//             year: year,
//             month: month,
//         }
//     }

// }

// export async function getStaticPaths () {
//     return {
//         paths: [],
//         fallback: 'blocking',
//     }
// }

export default FilteredEvents;