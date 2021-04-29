const { ethers } = require('ethers');
const { json } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());
const exec = require('./exec');
app.post('/rewards', async (req, res) => {
	const payload = req.body;
	try {
		R = parseInt(payload.rank);
		D = parseInt(payload.number);
		const output1 = await exec.setRewardNumber(R, D);
		res.json(output1);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.post('/summarizedRewards', async (req, res) => {
	try {
		const output1 = await exec.summarizedRewards();
		res.json(output1);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.listen(PORT, () => {
	console.log(`Application is running on port ${PORT}`);
});
