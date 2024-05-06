const express = require("express");
const cors = require("cors");
const webServer = express();
const port = 8000;
const host = "127.0.0.1";
const { ticketListsData, discountsData } = require("./constantData");

webServer.use(express.json());
webServer.use(cors());

const corsOptions = {
  origin: "http://localhost:3000.com",
  optionsSuccessStatus: 200,
  method: "GET,POST",
};

webServer.get("/ticketLists", (_, res) => {
  try {
    res.json({ ticketListsData });
  } catch (error) {
    console.error("Error occurs:", error);
    res.status(500).json({ error: "Internal Server Error", status: "error" });
  }
});

webServer.post("/discount", (req, res) => {
  try {
    const code = req.body.discountCode;
    const totalPrice = req.body.totalPrice;

    const discountData = discountsData.find((each) => each.code === code);

    if (!discountData) {
      return res.json({ discount: 0 });
    }

    const discount =
      discountData.type === "percentage"
        ? (discountData.discount / 100) * totalPrice
        : discountData.discount;
    return res.json({ discount });
  } catch (error) {
    console.error("Error occurs:", error);
    res.status(500).json({ error: "Internal Server Error", status: "error" });
  }
});

webServer.listen(port, host, () => {
  console.log(`SERVER IS ONLINE => http://${host}:${port}`);
});
