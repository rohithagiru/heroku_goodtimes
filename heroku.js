//This  app  will  be  deployed  to  Herokulet  
express  =  require('express')  
var  bodyParser  =  require('body-parser')  
let  app  =  express()  
let  url  =  require('url')  
let  querystring  =  require('querystring')  
app.use(bodyParser.json()); //  for  parsing  application/json
app.use(bodyParser.urlencoded({ extended:  true  }));  //  for  parsing  application/x-www-form-urlencoded
var minimum = 0;
var maximum = 0;
var mean = 0;
var sd =0 ;

app.get('/',  function  (request,  response)  {       
     
   response.send( "{ Minimum" + minimum+"}"+"{ Maximum" + maximum+"}"+"{ Mean" + mean+"}"+"{ Stdev" + sd+"}");
   minimum =0;
   maximum = 0;
   mean = 0;
   sd =0;
   //console.log("data"+myJSON.data)
   //  var myJSON = JSON.stringify(request.body);
   //  console.log(myJSON)
})  

app.post('/',  function  (request,  response)  { 
   
   console.log("Body:  "  + JSON.stringify(request.body)) //  Body:  {"event":"pulse","data":"65","published_at":"2018-11-26","coreid":"ddd"}   
   console.log("Data:  "  + request.body.data)

   let x = querystring.parse(request.body.data);
   minimum = querystring.parse(request.body.data).minimum;
   maximum = querystring.parse(request.body.data).maximum;
   mean = querystring.parse(request.body.data).mean;
   sd = querystring.parse(request.body.data).sd;
                          //  Data:  65   
   response.send('POST  request  to  the  homepage\n')  })

app.listen(process.env.PORT ||  3030,  ()  => console.log('App listening  on  port  3000!'))