import classes from "./index.module.css";

import Select from 'react-select';
import DonationCard from "../../components/donationCard";
import HeatMap from "../../components/heatmap";

const options = [
    { value: 'asani', label: 'Cyclone Asani - Odisha' },
    { value: 'amarnath', label: 'Amarnath Floods - Jammu' },
]

export default function HomePage() {
    return (
        <section className={classes.headerSec}>
            <div className={classes.heatMap}>
                <HeatMap />
            </div>
            <h2>Recent Disasters</h2>
            <Select options={options} className={classes.selectBox} isSearchable defaultValue={options[0]} />
            <h2>Provide Financial Aid</h2>
            <div className={classes.donationWrap}>
                <DonationCard pin={"752001"} address={"Puri sadar, Puri"} goal={2500000} current={1700000} priority={0} name="asani" />
                <DonationCard pin={"752002"} address={"Gopinathpur, Puri"} goal={2000000} current={1200000} priority={1} name="asani" />
                <DonationCard pin={"752003"} address={"Srivihar, Puri"} goal={1000000} current={600000} priority={2} name="asani" />
            </div>
        </section >
    );
}