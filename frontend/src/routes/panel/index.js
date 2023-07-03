import classes from "./index.module.css";
import Select from 'react-select';
import { useState } from "react";

const options = [
    { value: 'chocolate', label: 'Cyclone Asani - Odisha' },
    { value: 'strawberry', label: 'Amarnath Floods - Jammu' },
]

const optionsType = [
    { value: 'chocolate', label: 'Cyclone' },
    { value: 'strawberry', label: 'Flood' },
    { value: 'strawberry', label: 'Earthquake' },
    { value: 'strawberry', label: 'Tsunami' },
    { value: 'strawberry', label: 'Other' },
]

export default function PanelPage() {
    const [data, setData] = useState({
        name: "",
        id: "",
        type: "",
        trx: "",
        try: "",
        blx: "",
        bly: "",
        pincodes: []
    });
    const [newD, setNewD] = useState(false)

    return (
        <section className={classes.sectionw}>
            <h2>Edit details</h2>
            <Select options={options} className={classes.selectBox} isSearchable placeholder="Select a disaster" />
            <div className={classes.dCardBtn} onClick={() => setNewD(true)}>Track New</div>
            {newD ? <div className={classes.card}>
                <div className={classes.inputWrap}>
                    <div>Name</div>
                    <input type="text" placeholder="Disaster name" />
                </div>
                <div className={classes.inputWrap}>
                    <div>Unique ID</div>
                    <input type="text" placeholder="Unique identifier for disaster" />
                </div>
                <div className={classes.inputWrap}>
                    <div>Process damage on</div>
                    <input type="date" />
                </div>
                <div className={classes.inputWrap}>
                    <div>Type</div>
                    <Select options={optionsType} className={classes.selectBox} isSearchable placeholder="Select disaster type" />
                </div>
                <div className={classes.inputWrap}>
                    <div>Total financial aid goal</div>
                    <input type="text" placeholder="Total financial aid goal" />
                </div>
                <div className={classes.inputWrap}>
                    <div>Tracking co-ordinates</div>
                    <div className={classes.location}>
                        <span>Top right</span>
                        <input type="text" placeholder="x co-ordinate" />
                        <input type="text" placeholder="y co-ordinate" />
                    </div>
                    <div className={classes.location}>
                        <span>Bottom left</span>
                        <input type="text" placeholder="x co-ordinate" />
                        <input type="text" placeholder="y co-ordinate" />
                    </div>
                </div>
                <div className={classes.inputWrap + " " + classes.pincodes}>
                    <div>Pincodes</div>
                    <div className={classes.dCardBtn} onClick={() => {
                        let pc = data.pincodes;
                        pc.push({
                            pin: "",
                            id: "",
                            name: ""
                        });
                        setData({ ...data, pincodes: pc });
                    }}>Add new</div>
                    {data.pincodes.map((e, idd) =>
                        <p>
                            <h2><span>[ {idd + 1} ]</span><span className={classes.deleteBtn} onClick={() => {
                                let pc = data.pincodes;
                                pc.splice(idd, 1);
                                setData({ ...data, pincodes: pc });
                            }}>Delete</span></h2>
                            <div>Pincode</div>
                            <input type="text" placeholder="Pincode" value={e.pin} onChange={(e, id) => {
                                let pc = data.pincodes;
                                pc[id].pin = e.target.value;
                                setData({ ...data, pincodes: pc });
                            }} />
                            <div>Wallet ID</div>
                            <input type="text" placeholder="Wallet ID for receiving financial aid" value={e.id} onChange={(e, id) => {
                                let pc = data.pincodes;
                                pc[id].id = e.target.value;
                                setData({ ...data, pincodes: pc });
                            }} />
                            <div>Receiver</div>
                            <input type="text" placeholder="Name and designation of person receiving the aid" value={e.name} onChange={(e, id) => {
                                let pc = data.pincodes;
                                pc[id].name = e.target.value;
                                setData({ ...data, pincodes: pc });
                            }} />
                        </p>
                    )}
                </div>
                <div className={classes.dCardBtn}>Save</div>
            </div> : null}
        </section>
    );
}