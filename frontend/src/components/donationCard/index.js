import classes from "./index.module.css";
import { HashLink } from "react-router-hash-link";
import { ethers } from "ethers"
import abi from "./abi.json"
import { useState } from "react";

export default function DonationCard(props) {
    const priorityColours = ["#ff0000", "#ff8000", "#e8e350"];
    const [donator,setDonator] = useState("")
    const url = 'https://rpc.ankr.com/eth_goerli';
    const ContractAddress= "0x9c98c79dFBb3F3d245d1c6DeD063a3A43dA9E85d"
    const receiver ='0xCc92cB052E95ed84ca5d97930C52E5BE0079e596';
    
   
   
   
 const handelContribute = async()=>{
    if(window.ethereum ){

    
        const accounts = await window.ethereum.request({
            method:"eth_requestAccounts",
        })
        console.log(accounts)
        setDonator(accounts[0])
       const provider= new ethers.providers.Web3Provider(window.ethereum)
       const signer = provider.getSigner()
       const Contract = new ethers.Contract(ContractAddress,abi.abi,provider)


       console.log("Balance before transfer")
       console.log(`${ receiver}:${await provider.getBalance(receiver)}`)


       
//  Transaction logic goes here
try {
    

    

const tx =await signer.sendTransaction({
    to: receiver,
    value: ethers.utils.parseEther('0.001')
});

await tx.wait(1)



console.log("Balance after transfer")
console.log(`${ receiver}:${await provider.getBalance(receiver)}`)
alert(`Contribution successfull ,${ receiver}:${await provider.getBalance(receiver)}`)
console.log(tx.blockHash)
} catch (error) {

alert(error)


}

  
        

        console.log("clicked")
        console.log(ethers)
        console.log("connected to provider")
    }else{
        alert("Please make sure u have meta mask wallet in order to donate ")
    }
    }





    return (
        <div className={classes.doantionCard}>
            <div className={classes.dCardBar} style={{ backgroundColor: priorityColours[props.priority] }} />
            <div className={classes.pinCode}>{props.pin}</div>
            <div className={classes.location}>{props.address}</div>
            <div className={classes.cardBox}>
                <div>Estimated aid requirement</div>
                <div>₹{props.goal}</div>
            </div>
            <div className={classes.cardReceived}>
                <div>Currently received</div>
                <div>₹{props.current} <HashLink to={`/aid/${props.name}/${props.pin}`}><img src="/info.svg" alt="info" /></HashLink></div>
            </div>
            <div className={classes.dCardBtn} onClick={handelContribute}>
                Contribute
            </div>
        </div>
    );
}