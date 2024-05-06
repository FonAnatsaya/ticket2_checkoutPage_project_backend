const express = require("express");
const cors = require("cors");
const webServer = express();
const port = 8000;
const host = "127.0.0.1";

webServer.use(express.json());
webServer.use(cors());

const corsOptions = {
  origin: "http://localhost:3000.com",
  optionsSuccessStatus: 200,
  method: "GET",
};

const ticketListsData = [
  {
    id: 1,
    title: "Siam Amazing Park",
    img: "siam.jpeg",
    price: 1000,
    descriptionEng: "Siam Amazing Park Everyday is Amazing",
    descriptionThai: "สยามอะเมซิ่งเป็นอาณาจักรแห่งความสุขสนุกไม่รู้ลืม...",
  },
  {
    id: 2,
    title: "Safari World",
    img: "siam.jpeg",
    price: 1200,
    descriptionEng: "Safari World Everyday is Amazing",
    descriptionThai: "ซาฟารีเวิร์ลเป็นอาณาจักรแห่งความสุขสนุกไม่รู้ลืม...",
  },
  {
    id: 3,
    title: "Dream World",
    img: "siam.jpeg",
    price: 1500,
    descriptionEng: "Dream World Everyday is Amazing",
    descriptionThai: "ดรีมเวิร์ลเป็นอาณาจักรแห่งความสุขสนุกไม่รู้ลืม...",
  },
  {
    id: 4,
    title: "Sea Life Bangkok Ocean World",
    img: "siam.jpeg",
    price: 2000,
    descriptionEng: "Sea Life Bangkok Ocean World Everyday is Amazing",
    descriptionThai: "ซีไลฟ์กรุงเทพเป็นอาณาจักรแห่งความสุขสนุกไม่รู้ลืม...",
  },
];

webServer.get("/ticketLists", (_, res) => {
  try {
    res.json({ ticketListsData });
  } catch (error) {
    console.error("Error occurs:", error);
    res.status(500).json({ error: "Internal Server Error", status: "error" });
  }
});

webServer.listen(port, host, () => {
  console.log(`SERVER IS ONLINE => http://${host}:${port}`);
});
