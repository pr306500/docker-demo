let app = require('express')(),
      bodyParser = require('body-parser');

      app.use(bodyParser.json());

      app.get('/',(req, res)=>{
            res.send('Hello World');
        });

      app.listen(3003,()=>{
          console.log('server is up');
      });