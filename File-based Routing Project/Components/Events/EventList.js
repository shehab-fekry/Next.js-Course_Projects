import styles from './EventList.module.css';

import EventItem from './EventItem';

function EventList (props) {
    const events = props.events;
    return <ul className={styles.list}>
        {events.map(item => <EventItem key={item.id} item={item}/>)}
    </ul>
}

export default EventList;