import classes from "./index.module.css";
import DisastersCard from "../../components/disasterCard";

export default function DisastersPage() {
    return (
        <section className={classes.sectionw}>
            <h2>Tracked Disasters</h2>
            <div className={classes.donationWrap}>
                <DisastersCard date="December 2022" name="Cyclone Mandous" donations="2100000" places={["Andhra Pradesh", "Tamil Nadu"]} />
                <DisastersCard date="October 2022" name="Balrampur floods" donations="3200000" places={["Uttar Pradesh"]} />
                <DisastersCard date="October 2022" name="Cyclone Sitrang" donations="2400000" places={["West Benal", "Tripura", "Assam"]} />
                <DisastersCard date="July 2022" name="Amarnath Floods" donations="3800000" places={["Jammu and Kashmir"]} />
                <DisastersCard date="May 2022" name="Cyclone Asani" donations="2700000" places={["Andhra Pradesh", "Telengana", "Odisha"]} />
            </div>
        </section>
    );
}