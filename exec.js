const INFURA_SECRET_KEY = process.env.INFURA_SECRET_KEY || require('./config');
const WALLET_SECRET_KEY = process.env.WALLET_SECRET_KEY || require('./config');
const ETHERS_CONTRACT_KEY =
	process.env.ETHERS_CONTRACT_KEY || require('./config');
const  ethers  = require('ethers');
module.exports = {
	async setRewardNumber(rank, data) {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.setRewardNumber(rank, data);
		return result;
	},
	async setReward(rank, percentage) {
		console.log('setRewardNumber');
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.setReward(rank, percentage);

		return result;
	},
	async summarizedRewards() {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.summarizedRewards();

		return result;
	},
	async getBuyingPeriod() {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.getBuyingPeriod();

		return result;
	},
	async getClaimInfo(round, number) {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.getClaimInfo(round, number);

		return result;
	},
	async getReward(round, rank) {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.getReward(round, rank);

		return result;
	},
	async setBuyingPeriod(bool) {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.setBuyingPeriod(bool);

		return result;
	},
	async setlockBeforeDraw(sec) {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.setlockBeforeDraw(sec);

		return result;
	},
	async setNextDraw(sec) {
		const provider = new ethers.providers.JsonRpcProvider(
			`https://kovan.infura.io/v3/${INFURA_SECRET_KEY}`
		);
		const contract = new ethers.Contract(
			ETHERS_CONTRACT_KEY,
			require('./abis/ChokchanaLottery.json'),
			provider
		);
		const signer = new ethers.Wallet(`${WALLET_SECRET_KEY}`, provider);
		const contractWithSigner = contract.connect(signer);
		const result = await contractWithSigner.setNextDraw(sec);
		return result;
	},
};
