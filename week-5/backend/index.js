const express = require("express");
const { Card } = require("./db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

app.get("/get", async (req, res) => {
  const data = await Card.find({});
  res.json({ cards: data });
});

app.get("/get-one", async (req, res) => {
  const { id } = req.body;

  const card = await Card.findOne({ id });
  res.json({
    card,
  });
});

app.put("/put", async (req, res) => {
  const { name, description, intrests, linkedIn, instagram, twitter, id } =
    req.body;
  console.log(id);

  const updatedCard = await Card.findOneAndUpdate(
    { id: id },
    {
      $set: { name, description, intrests, linkedIn, instagram, twitter },
    }
  );
  res.json({ msg: `Card updated successfully` ,updatedCard });
});
app.post("/post", async (req, res) => {
  const { name, description, intrests, linkedIn, instagram, twitter } =
    req.body;
  const newCard = await Card.create({
    id: Math.floor(Math.random() * 100000),
    name,
    description,
    intrests,
    linkedIn,
    instagram,
    twitter,
  });
  res.json({ msg: "Card created successfully", newCard });
});
app.delete("/delete", async (req, res) => {
  const id = req.body.id;
  const deletedUser = await Card.findOneAndDelete({ id });
  res.json({ msg: `Successfully deleted : ${deletedUser}` });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});
