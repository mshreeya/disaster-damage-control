import classes from "./index.module.css";
import { useParams } from 'react-router-dom';

export default function DonationsPage() {
    const { disaster, pincode } = useParams();

    return (
        <section className={classes.sectionw}>
            <h2>Cyclone Asani</h2>
            <div className={classes.pinCode}>
                <div>Pincode</div>
                <div>{pincode}</div>
            </div>
            <div className={classes.pinCode}>
                <div>Aids going to</div>
                <div>Shri Samarth Verma, DM, Puri</div>
            </div>
            <div className={classes.pinCode}>
                <div>Total amount</div>
                <div>₹1700000</div>
            </div>
            <div className={classes.card}>
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Provided By</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>₹1300000</th>
                            <td>30/03/2023</td>
                            <td>Government of India</td>
                        </tr>
                        <tr>
                            <th>₹300000</th>
                            <td>30/03/2023</td>
                            <td>Red Cross</td>
                        </tr>
                        <tr>
                            <th>₹100000</th>
                            <td>30/03/2023</td>
                            <td>Rotary Club</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}