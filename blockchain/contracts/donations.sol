// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.7;

error DonationDeadLineReached();
error MaxFundsReached();


contract donations {
    
    
    

    struct BenificiaryCampaign{
    address localHead;
    string regionName;
    string decription;
    uint targetFunds;
    uint presentFundsBalance;
    uint deadline;
    string imageUrl;
    

}

uint private TotalBenificiary=0;
mapping(uint256 => BenificiaryCampaign) idToCampaign;
mapping(uint256 => address[] ) donatorsToCampaign;



event AmountDonatedsuccesfull(address indexed donor, uint indexed amount);




function donateToBenificiary(uint256 _id) public payable {
    
    if(block.timestamp > idToCampaign[_id].deadline ){
        revert DonationDeadLineReached();
    }

    if(idToCampaign[_id].presentFundsBalance > idToCampaign[_id].targetFunds){
        revert MaxFundsReached();
    }
    uint amount= msg.value;
    
    idToCampaign[_id].presentFundsBalance+=amount;
    donatorsToCampaign[_id].push(msg.sender);
    (bool sent,)= payable(idToCampaign[_id].localHead).call{value:amount}("");

    if (sent){
        emit AmountDonatedsuccesfull(msg.sender,amount);
    }



}

function createCampaign(address _localHead,
    string memory _regionName,
    string memory _decription,
    uint _targetFunds,
    
    uint _deadline,
    string memory _imageUrl) public{
    BenificiaryCampaign memory tempCampaign = BenificiaryCampaign(_localHead, _regionName,_decription,_targetFunds,0, _deadline,_imageUrl);
    idToCampaign[TotalBenificiary]=tempCampaign;
    TotalBenificiary++;
}
   



function getDonators(uint _id) public view returns(address[] memory){
    return donatorsToCampaign[_id];
}





function getAllCampaign() public view returns (BenificiaryCampaign[] memory ){
 BenificiaryCampaign[] memory temp = new BenificiaryCampaign[](TotalBenificiary);
 for (uint256 index = 0; index < TotalBenificiary; index++) {
    BenificiaryCampaign storage item = idToCampaign[index];
    temp[index]=item;
    
 }

 return temp;

}
 
    



    

    



}