const express = require('express');
const app = express();
const port = 5000;

app.use('/api/goals', require('./backend/routes/routes/goalRoutes.js'));

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
