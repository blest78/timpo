import express from 'express';
import axios from 'axios';

const app = express();
app.use(express.json());

const finalServers = [
'https://blst.onrender.com/forward-requests',
'https://lop-wmjz.onrender.com/forward-requests',
'https://arf-rpwc.onrender.com/forward-requests',
'https://blst009.onrender.com/forward-requests',
'https://lop-zwgs.onrender.com/forward-requests',
'https://blst-dufa.onrender.com/forward-requests',
'https://blst-1li3.onrender.com/forward-requests',
'https://blst-1wwr.onrender.com/forward-requests',
'https://blst-fajn.onrender.com/forward-requests',
'https://blst-ohte.onrender.com/forward-requests',
'https://blst-fac3.onrender.com/forward-requests',
'https://blst-tugj.onrender.com/forward-requests',
'https://blst-4kfw.onrender.com/forward-requests',
'https://blst-33u2.onrender.com/forward-requests',
'https://blst-31sa.onrender.com/forward-requests',
'https://blst-l7ih.onrender.com/forward-requests',
'https://blst-v80w.onrender.com/forward-requests',
'https://blst-dweh.onrender.com/forward-requests',
'https://blst-a1tt.onrender.com/forward-requests',
'https://blst-d78v.onrender.com/forward-requests',
'https://blst-5x51.onrender.com/forward-requests'
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
