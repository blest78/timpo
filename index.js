import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const finalServers = [
'https://blst.onrender.com',
'https://lop-wmjz.onrender.com',
'https://arf-rpwc.onrender.com',
'https://blst009.onrender.com',
'https://lop-zwgs.onrender.com',
'https://blst-dufa.onrender.com',
'https://blst-1li3.onrender.com',
'https://blst-1wwr.onrender.com',
'https://blst-fajn.onrender.com',
'https://blst-ohte.onrender.com',
'https://blst-fac3.onrender.com',
'https://blst-tugj.onrender.com',
'https://blst-4kfw.onrender.com',
'https://blst-33u2.onrender.com',
'https://blst-31sa.onrender.com',
'https://blst-l7ih.onrender.com',
'https://blst-v80w.onrender.com',
'https://blst-dweh.onrender.com',
'https://blst-a1tt.onrender.com',
'https://blst-d78v.onrender.com',
'https://blst-5x51.onrender.com'
];

app.post('/forward-requests', (req, res) => {
  const { accessToken } = req.body;

  if (!accessToken) {
    return res.status(400).send('Access token is required');
  }

  const requests = finalServers.flatMap(url =>
    Array.from({ length: 21 }).map(() =>
      axios.post(url, { accessToken })
        .catch(() => {}) 
    )
  );

  Promise.all(requests);

  res.status(200).send('Requests forwarded by sub distributor');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Sub distributor server listening on port ${port}`);
});
