var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Articles = {
      
  'Article-one': {
      title: 'Article-one',
heading:'Article One',
date: 'Sept 5,2016',
content: `<p>this is article one.</p>`
},

  'Article-two': {title: 'Article-Two',
heading:'Article Two',
date: 'Sept 10,2016',
content: `<p>this is article two.</p>`
},

'Article-three' :{title: 'Article-Three',
heading:'Article Three',
date: 'Sept 15,2016',
content: `<p>this is article three.</p>`
},
};

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate =
`   <html>
    <head>
    <title>
    ${title}
    </title>
    <meta name="viewport" content="width=devic-width, initial-scale=1"/>
     <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
  <div class="container">
    <a href="/">Home</a>
    <div>
   </div>
    <hr/>
  
  
    <h3>${heading}</h3>
<div>
${date}
</div>
<div>
 ${content}
</div>
</div>
</body>
</html>
`;
  return htmlTemplate;

}

 app.get('/',function (req, res){
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:ArticleName',function (req, res){
    var ArticleName = req.params.ArticleName;
    res.send(createTemplate(Articles(ArticleName)));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
