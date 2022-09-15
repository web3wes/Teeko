// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../interfaces/IVault.sol";
import "../interfaces/ICoin.sol";
import "hardhat/console.sol";
import "openzeppelin-solidity/contracts/utils/math/SafeMath.sol";



  // Variables
struct Vault {
        uint256 collateralAmount; // The amount of collateral held by the vault contract
        uint256 debtAmount; // The amount of stable coin that was minted against the collateral
    }
  
contract Vaults is IVault {
    using SafeMath for uint256;


mapping(address => Vault) VaultList;
mapping(address => bool) public knownEntity;
uint256 public ETHUSD = 3000;
uint256 EthToAUDC; 
uint256 EthForAUDC;
uint256 debtAmount;
uint256 RedeemableEth;




    constructor() {}

    function deposit(uint256 amountToDeposit) override external{
        

       if  (knownEntity[msg.sender])  {
        //  if (knownEntity[msg.sender]) { // Considering knownEntity bool
             VaultList[msg.sender].collateralAmount = VaultList[msg.sender].collateralAmount.add(amountToDeposit);
            

            if (getadJustedRatio(ETHUSD) < 1000000){
                EthToAUDC =  (amountToDeposit * ETHUSD)/(1 ether);
                ICoin(0xB17667F7566cE22e7B66698f0fb7323a3252046a).mint(msg.sender, EthToAUDC);
                VaultList[msg.sender].debtAmount = VaultList[msg.sender].debtAmount.add(EthToAUDC);
                address(this).call{value:amountToDeposit, gas:100000};
            }

         } else if (!knownEntity[msg.sender]){
             //new valut

            EthToAUDC =  (amountToDeposit * ETHUSD)/(1 ether);
            ICoin(0xB17667F7566cE22e7B66698f0fb7323a3252046a).mint(msg.sender, EthToAUDC);
            
            Vault memory newVault = Vault({
            collateralAmount: amountToDeposit,
            debtAmount: EthToAUDC
        });

            knownEntity[msg.sender] = true;

            VaultList[msg.sender] = newVault;
         
            address(this).call{value:amountToDeposit, gas:100000};
            
            //Vault[msg.sender](msg.value, EthToAUDC)
    
         }
         emit Deposit(amountToDeposit, EthToAUDC);
         
        //   return true;
        // open a vault or increase the debt in exsiting vault X
    }

    function depositPayable(uint256 amountToDeposit)payable external{
        

        
        // debtAmount = IVault(Vault[msg.sender][debtAmount]);
        // getVault(msg.sender);


       if  (knownEntity[msg.sender])  {
        //  if (knownEntity[msg.sender]) { // Considering knownEntity bool
             VaultList[msg.sender].collateralAmount = VaultList[msg.sender].collateralAmount.add(amountToDeposit);
            

            if (getadJustedRatio(ETHUSD) < 1000000){
                EthToAUDC =  (amountToDeposit * ETHUSD)/(1 ether);
                ICoin(0xB17667F7566cE22e7B66698f0fb7323a3252046a).mint(msg.sender, EthToAUDC);
                VaultList[msg.sender].debtAmount = VaultList[msg.sender].debtAmount.add(EthToAUDC);
                address(this).call{value:amountToDeposit, gas:100000};
            }

         } else if (!knownEntity[msg.sender]){
             //new valut

            EthToAUDC =  (amountToDeposit * ETHUSD)/(1 ether);
            ICoin(0xB17667F7566cE22e7B66698f0fb7323a3252046a).mint(msg.sender, EthToAUDC);
            
            Vault memory newVault = Vault({
            collateralAmount: amountToDeposit,
            debtAmount: EthToAUDC
        });

            knownEntity[msg.sender] = true;

            VaultList[msg.sender] = newVault;
            require(msg.value == amountToDeposit);
            address(this).call{value:amountToDeposit, gas:100000};
            
            //Vault[msg.sender](msg.value, EthToAUDC)
    
         }
         emit Deposit(amountToDeposit, EthToAUDC);
         
        //   return true;
        // open a vault or increase the debt in exsiting vault X
    }

    function withdraw(uint256 tokenRepay) public override{
            //require Vault[msg.sender]
            //if repaid x dollars should recieve current dollar to ETH conversion worth eth
            // repay $200 recieve $200 worth eth, up to max deposit 

            // RedeemableEth = repaymentAmount / ETHUSD;

            RedeemableEth =  tokenRepay*(1 ether)/ETHUSD;
            
            // If ratio is 100% & withdrawing less amount
            // Allow redeemaable eth withdrawl less than or eqaul to total deposit
            if  ((getadJustedRatio(ETHUSD) >= 1000000) &&
                RedeemableEth <= VaultList[msg.sender].collateralAmount)
                
            {
            VaultList[msg.sender].debtAmount = VaultList[msg.sender].debtAmount.sub(tokenRepay);
            VaultList[msg.sender].collateralAmount = VaultList[msg.sender].collateralAmount.sub(RedeemableEth);
            ICoin(0xB17667F7566cE22e7B66698f0fb7323a3252046a).burn(msg.sender, tokenRepay);
                
            // payable(msg.sender).transfer(RedeemableEth);
            // } else if {
                
             } else if 
                ((getadJustedRatio(ETHUSD) < 1000000) &&
                RedeemableEth > VaultList[msg.sender].collateralAmount)
            
            {
                revert("Collateral ratio is Above 100% the selected amount is more than collarate on deposit for this wallet. Please use withdrawAll or withdrawIncrement");

            } else 
                ((getadJustedRatio(ETHUSD) >= 1000000) &&
                RedeemableEth > VaultList[msg.sender].collateralAmount);
            
            {
                revert("Redeemable ETH less than amount of ETH request. Please use Please use withdrawAll or withdrawIncrement");

            }

    }

    // function AUDCfromETH(uint256 DepositAmount) public {
    function estimateTokenAmount(uint256 depositAmount) public  view  override  returns(uint256 tokenAmount){
        depositAmount =  (depositAmount * ETHUSD)/(1 ether);
        return depositAmount;
    }

    function estimateCollateralAmount(uint256 TokenRepay) external  view  override  returns(uint256 tokenAmount){
        TokenRepay =  TokenRepay*(1 ether)/ETHUSD;
        return TokenRepay;
    }

   function roundingEstimate(uint percent) public view returns(uint256 noRound){
        // uint multiplier = 10;
        uint256 x = (VaultList[msg.sender].collateralAmount * percent) / 100;
        uint256 amount = (estimateTokenAmount(x));
        return amount;

 }

    function withdrawIncrement(uint256 percent) public returns(bool){
        withdraw(roundingEstimate(percent));
        return true;

    }

function adjustETH(uint256 NewETH) external returns(bool){
        ETHUSD = NewETH;
        return true;
        // return percentOfTokens;
    }





   function getVault(address userAddress) public view override returns(Vault memory vault){
        
        
        return VaultList[userAddress];
 }

//  function getRatio() public view returns(uint256 collateralAmount){
            
            
//         return VaultList[msg.sender].debtAmount / ((VaultList[msg.sender].collateralAmount * ETHUSD)/(1 ether))*100;

//  }

//  function getadJustedRatio(uint256 NewEthPrice) public view returns(uint256 collateralAmount){


//          // caution, check safe-to-multiply here
//         uint256 _numerator  = VaultList[msg.sender].debtAmount * 10 ** (8+1);
//         // with rounding of last digit
//         uint256 _denominator = ((VaultList[msg.sender].collateralAmount * NewEthPrice).div(1 ether)).mul(100);
//         uint256 _quotient =  ((_numerator / _denominator) + 5) / 10;


//         return ( _quotient);
            
            
//         // return  VaultList[msg.sender].debtAmount.div(((VaultList[msg.sender].collateralAmount * NewEthPrice).div(1 ether)).mul(100));

//  }

 function getRatio(uint256 NewEthPrice) public view returns(uint256 collateralAmount){

        uint256 numerator = (100 * VaultList[msg.sender].debtAmount);
        uint256 dom = (VaultList[msg.sender].collateralAmount*NewEthPrice)/(1 ether);
        uint256 ratio = numerator/dom ;
        return (ratio);
 }

// function fallback() public payable {
// }

    // Require ratio =<100% or no AUDC mint, even with deposits

    // Require ratio > 100% must repay, all AUDC before

    // 1 Valut per pair , 1 vault per user, opened or debt increased ETH for AUDC

    // User req: User must be ablet to make Eth/AUDC swap

    // User req: Must get estimate based on of AUDC value return from ETH/AUDC swap 4000/ETH  = AUDC

    // User req: Must get estimate of ETH return from AUDC/ETH swap

    // Must pass Slither
}
