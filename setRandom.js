const { ethers } = require('ethers');
const INFURA_SECRET_KEY = process.env.INFURA_SECRET_KEY || require('./config');
const WALLET_SECRET_KEY = process.env.WALLET_SECRET_KEY || require('./config');
const ETHERS_CONTRACT_KEY =
	process.env.ETHERS_CONTRACT_KEY || require('./config');
module.exports = {
	async drawRandomReward() {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/RandomGenerator.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.drawRandomReward();
		return result;
	},
};
