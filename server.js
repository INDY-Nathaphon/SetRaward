const { ethers } = require('ethers');
const { json } = require('express');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 9000;
app.use(express.json());
const exec = require('./exec');
const random = require('./setRandom');
//เพิ่มรางวัล
app.post('/rewards', async (req, res) => {
	const payload = req.body;
	try {
		R = parseInt(payload.rank);
		D = parseInt(payload.number);
		const output1 = await exec.setRewardNumber(R, D);
		res.json({ status: 'success', rank: R, number: D, data: output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.get('/rewards', async (req, res) => {
	const payload = req.body;
	try {
		R = parseInt(payload.round);
		D = parseInt(payload.rank);
		const output1 = await exec.getReward(R, D);
		res.json({ status: 'success', round: R, rank: D, data: output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.put('/rewards', async (req, res) => {
	const payload = req.body;
	try {
		R = parseInt(payload.rank);
		D = parseInt(payload.percentage);
		const output1 = await exec.setReward(R, D);
		res.json({ status: 'success', rank: R, percentage: D, data: output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.post('/summarizes', async (req, res) => {
	try {
		const output1 = await exec.summarizedRewards();
		res.json({ status: 'success', data: output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.get('/buying-periods', async (req, res) => {
	try {
		const output1 = await exec.getBuyingPeriod();
		res.json({ status: 'success', data: output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.post('/buying-periods', async (req, res) => {
	const payload = req.body;
	try {
		B = parseInt(payload.bool);
		const output1 = await exec.setBuyingPeriod(B);
		res.json({ status: 'success', bool: B, data: output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.get('/claim-infos', async (req, res) => {
	const payload = req.body;
	try {
		R = parseInt(payload.round);
		D = parseInt(payload.number);
		const output1 = await exec.getClaimInfo(R, D);
		res.json({ status: 'success', round: R, number: D, output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.post('/next-draws', async (req, res) => {
	const payload = req.body;
	try {
		B = parseInt(payload.sec);
		const output1 = await exec.setNextDraw(B);
		res.json({ status: 'success', sec: B, data: output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.post('/before-draws', async (req, res) => {
	const payload = req.body;
	try {
		B = parseInt(payload.sec);
		const output1 = await exec.setlockBeforeDraw(B);
		res.json({ status: 'success', sec: B, data: output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.post('/random-rewards', async (req, res) => {
	try {
		const output1 = await random.drawRandomReward();
		res.json({ status: 'success', random: 'true', data: output1 });
		res.status(200);
	} catch (error) {
		res.status(400).json(error);
	}
});
app.listen(PORT, () => {
	console.log(`Application is running on port ${PORT}`);
});
