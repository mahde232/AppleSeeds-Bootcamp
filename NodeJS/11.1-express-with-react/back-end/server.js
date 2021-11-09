const express = require('express');
const app = express();
const cors = require('cors')
const itemsUTILS = require('./itemsUtils.js')
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/items', (req, res) => {
  res.status(200).json(itemsUTILS.getItemsFromJSON())
})

app.post('/items', (req, res) =>
  res.status(201).json(itemsUTILS.addItem(req.body))
)

app.delete('/items/:id', (req, res) => {
  res.status(200).json(itemsUTILS.deleteItem(req.params.id))
})

app.listen(4000)