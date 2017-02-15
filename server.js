var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var ArticleOne= {
title: 'Article-one',
heading:'Article One',
date: 'Sept 5,2016',
content: `<p>this is article one.</p>`
};

function createTemplate (data) {
    var title = data.title;
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

app.get('/Article-one',function (req, res){
    res.send(createTemplate(ArticleOne));
});

app.get('/Article-2',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'Article-2.html'));
});
app.get('/Article-3',function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'Article-3.html'));
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
