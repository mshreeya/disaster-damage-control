import classes from "./index.module.css";

export default function DisastersCard(props) {
    return (
        <div className={classes.disCard}>
            <div>{props.date}</div>
            <div className={classes.info}>{props.name}</div>
            <div className={classes.cardBox}>
                <div>Affected places</div>
                <div>{props.places.map(
                    e => <>{e}<br /></>
                )}</div>
            </div>
            <div>Aid Received</div>
            <div className={classes.info}>₹{props.donations}</div>
        </div>
    );
}