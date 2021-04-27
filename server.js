const { ethers } = require("ethers");
const exec = async () => {
    const provider = new ethers.providers.JsonRpcProvider('https://kovan.infura.io/v3/15ce6797248643989c8b2b44aa15df19');
    const contract = new ethers.Contract('0xDe2e130722bdC3322ad2323Ac45e888a7Df58c59', require('./abis/ExternalLottery.json'), provider);
    const signer = new ethers.Wallet('0xa6605fb3ced01024a51c59bc984e33ef6f418bae237bc2d766d36555fd858aea', provider);
    const contractWithSigner = contract.connect(signer); 
    const result = await contractWithSigner.claimableReward(0);
    console.log(result);
}
exec();