const { INFURA_SECRET_KEY, WALLET_SECRET_KEY } = require('./config');
const { ethers } = require('ethers');
const ethersContract = '0x79349822E83e55bF87e56d2771d3e30Cae03D12d'
module.exports = {
	async drawRandomReward() {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ethersContract,
			require('./abis/RandomGenerator.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.drawRandomReward();
		console.log(result);
		return result;
	},
}