const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const TODOLIST = [
  {
    id: 1,
    name: 'Go to shopping mall',
  },
  {
    id: 2,
    name: 'Prepare a presentation for meeting',
  },
  {
    id: 3,
    name: 'Time to workout',
  },
];

app.get('/todolist', (req, res) => {
  res.send(TODOLIST);
});

app.post('/todolist', (req, res) => {
  let list = [...TODOLIST, req.body];
  res.send(list);
});

app.patch('/todolist', (req, res) => {
  let list = [...TODOLIST];
  list = list.map((v) => {
    if (v.id === req.body.id) {
      return {
        id: v.id,
        name: req.body.name,
      };
    }
    return v;
  });
  res.send(list);
});

app.delete('/todolist', (req, res) => {
  let list = [...TODOLIST].filter((v) => v.id !== req.body.id);
  res.send(list);
});

app.listen(3000, () => {
  console.log('Start server at port 3000.');
});
