const { INFURA_SECRET_KEY, WALLET_SECRET_KEY } = require('./config');
module.exports = {
	async setRewardNumber(rank, data) {
		console.log("setRewardNumber")
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			'0xD8b01EbC76278d4DA891CE77c4C416c362886003',
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.setRewardNumber(rank, data);
		console.log(result);
		return result;
	},
	async summarizedRewards() {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			'0xD8b01EbC76278d4DA891CE77c4C416c362886003',
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.summarizedRewards();
		console.log(result);
		return result;
	},
};
