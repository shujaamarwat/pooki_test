const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const dashboardData = require('./test/dashboardData.json');
const submissionData = require('./test/submissionData.json');

app.get('/api/dashboard', (req, res) => {
  res.json(dashboardData);
});

app.get('/api/submissions', (req, res) => {
  res.json(submissionData.submissions);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


