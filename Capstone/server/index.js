import express from "express";
import mongoose from "mongoose"; // Data Base
import cors from "cors"; // for Cross-Origin
import dotenv from "dotenv";
import bookingRoutes from "./routes/hotelBookingsRouter.js";
import roomRoutes from "./routes/rooms.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
// import paymentRoutes from "./routes/payment.js"
import adminRoutes from "./routes/admin.js";
import hotelDetailsRouter from "./routes/hotelDetailsRouter.js";
import roomDetailsRouter from "./routes/roomDetailsRouter.js";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')
const bodyParser = require('body-parser')
const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));

app.use(express.json({ limit: "30mb" }));

app.use(cors());

app.use(bodyParser.json())
// 0
app.use("/rooms", roomRoutes);
// app.use("/payment",paymentRouters);

// 1
app.use("/bookings", bookingRoutes);


// 1
app.use("/auth", authRoutes);

//1
app.get("/", (req, res) => {
  res.send("Hello to Suay Resort API");
});


//1
app.use("/user", userRoutes);

//1
app.use("/admin", adminRoutes);

//1
app.use("/hotel", hotelDetailsRouter)

//1
app.use("/room", roomDetailsRouter)


const razorpay = new Razorpay({
	key_id: 'rzp_test_UluvnZES4hwa1H',
	key_secret: 'Ku9dqRRljLEVScGsZ5ZmlRcs'
})

app.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	const payment_capture = 1
	const amount = 12000
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})


const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(()=>{console.log("COnnected to DB")})
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);


