const { ethers } = require('ethers');
const { json } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());
const exec = {
	async setRewardNumber(rank, data) {
		const provider = new ethers.providers.JsonRpcProvider(
            'https://kovan.infura.io/v3/15ce6797248643989c8b2b44aa15df19'
        );
        const contract = new ethers.Contract(
            '0xD8b01EbC76278d4DA891CE77c4C416c362886003',
            require('./abis/ChokchanaLottery.json'),
            provider
        );
        const signer = new ethers.Wallet(
            '0xa6605fb3ced01024a51c59bc984e33ef6f418bae237bc2d766d36555fd858aea',
            provider
        );
        const contractWithSigner = contract.connect(signer);
        const result = await contractWithSigner.setRewardNumber(rank, data);
        console.log(result);
		return result;
	},
    async summarizedRewards() {
		const provider = new ethers.providers.JsonRpcProvider(
            'https://kovan.infura.io/v3/15ce6797248643989c8b2b44aa15df19'
        );
        const contract = new ethers.Contract(
            '0xD8b01EbC76278d4DA891CE77c4C416c362886003',
            require('./abis/ChokchanaLottery.json'),
            provider
        );
        const signer = new ethers.Wallet(
            '0xa6605fb3ced01024a51c59bc984e33ef6f418bae237bc2d766d36555fd858aea',
            provider
        );
        const contractWithSigner = contract.connect(signer);
        const result = await contractWithSigner.summarizedRewards();
        console.log(result);
		return result;
	},
};
app.post('/PostReward', async (req, res) => {
	const payload = req.body;
	try {
        console.log("product");
		const product = payload;
		console.log(product);
		R = parseInt(product.Rank);
		D = parseInt(product.Data);
		const output1 = await exec.setRewardNumber(R, D);
        res.json(output1);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.get('/summarizedRewards', async (req, res) => {
	const products = await exec.summarizedRewards();
	res.json(products);
});
app.get('/post0/:id', async (req, res) => {
    const { id } = req.params;
    let data = parseInt(id)
	const products = await exec.setRewardNumber(0,data);
	res.json(products);
});
app.get('/', async (req, res) => {
	const products = "For Post Reward to chain"
	res.send(products);
});
app.get('/post1/:id', async (req, res) => {
    const { id } = req.params;
    let data = parseInt(id)
	const products = await exec.setRewardNumber(1,data);
	res.json(products);
});
app.get('/post2/:id', async (req, res) => {
    const { id } = req.params;
    let data = parseInt(id)
	const products = await exec.setRewardNumber(2,data);
	res.json(products);
});
app.listen(PORT, () => {
	console.log(`Application is running on port ${PORT}`);
});

