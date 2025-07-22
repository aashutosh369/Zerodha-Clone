require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
//browser me cross origine resourse share kr ne ke liye CORS ka use
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionModel } = require("./model/PositionModel");
const { WatchlistModel } = require("./model/WatchlistModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const URL = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(express.json());

// app.get("/addHoldings", async (req, res) => {
//   let tempHoldings = [
//     {
//       name: "BHARTIARTL",
//       qty: 2,
//       avg: 538.05,
//       price: 541.15,
//       net: "+0.58%",
//       day: "+2.99%",
//     },
//     {
//       name: "HDFCBANK",
//       qty: 2,
//       avg: 1383.4,
//       price: 1522.35,
//       net: "+10.04%",
//       day: "+0.11%",
//     },
//     {
//       name: "HINDUNILVR",
//       qty: 1,
//       avg: 2335.85,
//       price: 2417.4,
//       net: "+3.49%",
//       day: "+0.21%",
//     },
//     {
//       name: "INFY",
//       qty: 1,
//       avg: 1350.5,
//       price: 1555.45,
//       net: "+15.18%",
//       day: "-1.60%",
//       isLoss: true,
//     },
//     {
//       name: "ITC",
//       qty: 5,
//       avg: 202.0,
//       price: 207.9,
//       net: "+2.92%",
//       day: "+0.80%",
//     },
//     {
//       name: "KPITTECH",
//       qty: 5,
//       avg: 250.3,
//       price: 266.45,
//       net: "+6.45%",
//       day: "+3.54%",
//     },
//     {
//       name: "M&M",
//       qty: 2,
//       avg: 809.9,
//       price: 779.8,
//       net: "-3.72%",
//       day: "-0.01%",
//       isLoss: true,
//     },
//     {
//       name: "RELIANCE",
//       qty: 1,
//       avg: 2193.7,
//       price: 2112.4,
//       net: "-3.71%",
//       day: "+1.44%",
//     },
//     {
//       name: "SBIN",
//       qty: 4,
//       avg: 324.35,
//       price: 430.2,
//       net: "+32.63%",
//       day: "-0.34%",
//       isLoss: true,
//     },
//     {
//       name: "SGBMAY29",
//       qty: 2,
//       avg: 4727.0,
//       price: 4719.0,
//       net: "-0.17%",
//       day: "+0.15%",
//     },
//     {
//       name: "TATAPOWER",
//       qty: 5,
//       avg: 104.2,
//       price: 124.15,
//       net: "+19.15%",
//       day: "-0.24%",
//       isLoss: true,
//     },
//     {
//       name: "TCS",
//       qty: 1,
//       avg: 3041.7,
//       price: 3194.8,
//       net: "+5.03%",
//       day: "-0.25%",
//       isLoss: true,
//     },
//     {
//       name: "WIPRO",
//       qty: 4,
//       avg: 489.3,
//       price: 577.75,
//       net: "+18.08%",
//       day: "+0.32%",
//     },
//     {
//       name: "AXISBANK",
//       qty: 3,
//       avg: 940.2,
//       price: 915.3,
//       net: "-2.65%",
//       day: "+0.42%",
//       isLoss: true,
//     },
//     {
//       name: "ULTRACEMCO",
//       qty: 1,
//       avg: 8495.5,
//       price: 8612.0,
//       net: "+1.37%",
//       day: "+0.26%",
//     },
//     {
//       name: "MARUTI",
//       qty: 2,
//       avg: 8800.0,
//       price: 8570.0,
//       net: "-2.61%",
//       day: "-0.30%",
//       isLoss: true,
//     },
//     {
//       name: "ICICIBANK",
//       qty: 4,
//       avg: 915.5,
//       price: 988.7,
//       net: "+7.99%",
//       day: "+0.85%",
//     },
//     {
//       name: "COALINDIA",
//       qty: 6,
//       avg: 240.0,
//       price: 285.5,
//       net: "+18.96%",
//       day: "-0.12%",
//       isLoss: true,
//     },
//     {
//       name: "LT",
//       qty: 2,
//       avg: 2800.0,
//       price: 2995.0,
//       net: "+6.96%",
//       day: "+0.48%",
//     },
//     {
//       name: "ADANIENT",
//       qty: 3,
//       avg: 2212.0,
//       price: 2150.0,
//       net: "-2.80%",
//       day: "-1.05%",
//       isLoss: true,
//     },
//   ];

//   tempHoldings.forEach((item) => {
//     let newHolding = new HoldingsModel({
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//     });
//     newHolding.save();
//   });
//   res.send("Done!")
// });

// app.get("/addPositions", async (req, res) => {
//   let tempposition = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];
//   tempposition.forEach((item) => {
//     let newPosition = new PositionModel({
//       product: item.product,
//       name: item.name,
//       qty: item.qty,
//       avg: item.avg,
//       price: item.price,
//       net: item.net,
//       day: item.day,
//       isLoss: item.isLoss,
//     });
//     newPosition.save();
//   });
//   res.send("Done")
// });

// Holdings ka data json fonmate me backend se lane ke liye
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
}); // iss ke baad holding.jsx me ja ke code kr na hai frontend me dikhane ke liye

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionModel.find({});
  res.json(allPositions);
}); // iss route se mai db se sare positions ka data le ke aayenge

// watchlist data ko DB me add krna
// app.get("/addWatchlist", async (req, res) => {
//   let tempWatchlist = [
//     {
//       name: "INFY",
//       price: 1555.45,
//       percent: "-1.60%",
//       isDown: true,
//     },
//     {
//       name: "ONGC",
//       price: 116.8,
//       percent: "-0.09%",
//       isDown: true,
//     },
//     {
//       name: "TCS",
//       price: 3194.8,
//       percent: "-0.25%",
//       isDown: true,
//     },
//     {
//       name: "KPITTECH",
//       price: 266.45,
//       percent: "3.54%",
//       isDown: false,
//     },
//     {
//       name: "QUICKHEAL",
//       price: 308.55,
//       percent: "-0.15%",
//       isDown: true,
//     },
//     {
//       name: "WIPRO",
//       price: 577.75,
//       percent: "0.32%",
//       isDown: false,
//     },
//     {
//       name: "M&M",
//       price: 779.8,
//       percent: "-0.01%",
//       isDown: true,
//     },
//     {
//       name: "RELIANCE",
//       price: 2112.4,
//       percent: "1.44%",
//       isDown: false,
//     },
//     {
//       name: "HUL",
//       price: 512.4,
//       percent: "1.04%",
//       isDown: false,
//     },
//   ];
//   tempWatchlist.forEach((item) => {
//     newWatchist = new WatchlistModel({
//       name: item.name,
//       price: item.price,
//       percent: item.percent,
//       isDown: item.isDown,
//     });
//     newWatchist.save();
//   });
//   res.send("done!");
// });

// watchlist data add hone ke baad uss ko get kr na

app.get("/watchlistStocks", async (req, res) => {
  let watchlistStocks = await WatchlistModel.find({});
  res.json(watchlistStocks);
});

//signup function ke liye route banana
app.post("/signup", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => console.log(err));
});
// login ke liye route 
app.post("/login",(req,res) => {
  const { email, password } = req.body;
  UserModel.findOne({email : email})
  .then((user) => {
    if(user) {
      if(user.password === password){
        res.json({status : "Success", massage : "Login Successfull!"})
      }else{
        res.json("Incorrect Password!")
      }
    }else{
      res.json("User do not exist!");
    }
  })
})

app.listen(PORT, () => {
  console.log("App Started...");
  mongoose.connect(URL);
  console.log("DB connnected!");
});
