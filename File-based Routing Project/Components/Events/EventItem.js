import styles from './EventItem.module.css';

import Button from "../UI/Button";
import AddressIcon from "../UI/address-icon";
import ArrowRightIcon from "../UI/arrow-right-icon";
import DateIcon from "../UI/date-icon";


function EventItem (props) {
    let {id, title, image, description, date, location} = props.item;

    const humanReadableDateFormat = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    const formattedAddress = location.replace(', ', '/n');
    const exploreLink = `/events/${id}`;

    return <li className={styles.item}>
        <img src={'/'+image} alt={title}/>
        <div className={styles.content}>
            <div className={styles.summery}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <DateIcon/>
                    <item>{humanReadableDateFormat}</item>
                </div>
                <div className={styles.address}>
                    <AddressIcon/>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={styles.icon}>
                        <ArrowRightIcon/>
                    </span>
                </Button>
            </div>
        </div>
    </li>
}

export default EventItem;