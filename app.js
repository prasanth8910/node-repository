
// setTimeout(function(){

//     console.log('Hola Batti');

// }, 3000);


// var time = 0;

// timer = setInterval(function(){

//     time += 1;

//     console.log(time+ " seconds have been passed");

//     if(time == 5){  

//     clearInterval(timer);
// }

// }, 1000)

// var fun = function(funInput){
//     funInput();
//     console.log('fun-01 invoking the funciton 0');
// };


// var fun0 = function(){

//     console.log("function - 0 exectution \n ");

// }


// fun(fun0);


// var stuff = require('./stuff.js')


// stuff.counter(['jack','jill','beckham'])

// console.log(stuff.adder(10,20))

// console.log(stuff.pi);



// var myEmitter = new event.EventEmitter();

// myEmitter.on("someEvent",function (msg){

//     console.log(msg)
// })

// myEmitter.emit('someEvent','This is the event handler Emitting')


// var event = require('events')
// var util = require('util')

// var person = function(name){

//     this.name = name;
// }

// util.inherits(person, event.EventEmitter)

// var james = new person('james');
// var mary = new person('mary');
// var david = new person('david');


// var people = [james,mary,david];    

// people.forEach(function(person){

//     person.on('speak', function(msg){

//         console.log(person.name+' is speaking '+msg);
//     })
// })


// james.emit('speak','Hola Batt');


// var fs = require("fs");

// console.log("Program Started");

// fs.readFile("sample1.txt",function(err, data){

//     if(err)  return console.log("\n"+err.toString());


//     console.log(data.toString()); 


// });

// // console.log((fs.readFileSync("sample.txt").toString()));


// console.log("File Reading is Ended");

// var fs = require("fs");
// var events = require("events");

// var emitter = new events.EventEmitter();

// fs.readFile("sample.txt", function(err,data){

//     if (err) {
//         throw err;
//     }  

//     console.log(data.toString());


// })


//var emitter = new require('events.EventEmitter');

// var event = require("events");
// var emitter =  new event.EventEmitter();

// emitter.on('myEvent', (msg) => console.log("arrow funciton parameter : "+msg) )

// emitter.emit('myEvent','Msg Parameter');


// var fs = require("fs");

// var readFile = fs.readFileSync("sample.txt")

// console.log( readFile.toString());

// var writeFile = fs.writeFileSync("writeMe.txt",readFile)


// var fs = require('fs');

// fs.readFile('sample.txt' ,function(err, data){

// fs.writeFile("textFile.txt", data);

// });



//  var fs = require("fs");



// fs.mkdir("jack_folder", function(){

//     fs.readFile("sample.txt", function(err, data){

//         fs.writeFile("jack_folder\\writeFile.txt", data, (e)=>{});

//     });
// });

// /////////////////////////////////////////////////////////////////////

// fs.unlink("./jack_folder/writeFile.txt", function(){

//     fs.rmdir("jack_folder",(e)=>{});

//     });


/////////////////////////////////////////////////////////////////
//fs.unlinkSync("./jack_folder/writeFile.txt");
// fs.rmdirSync("jack_folder");

// Write stream in NodeJS Server side

// var http = require('http');

// var server = http.createServer(function(req, res){

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end("Hey Ninjas");


// });


// server.listen(2, '127.0.0.1',function(){
//     console.log('server is started');

// });


// var http = require('http');
// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname + '/sample.txt', "utf8");
// var myWriteStream =  fs.createWriteStream(__dirname+'/StreamFile.txt');

// myReadStream.pipe(myWriteStream);





// myReadStream.on('data', function (chunk) {

// console.log('\nChunck is received....'+Date.toString());

// myWriteStream.write(chunk);

// });

// console.log( new Date().toString());


// var http = require("http");
// var fs = require("fs");

// var server = http.createServer(function(req, res){

// res.writeHead(200, {'ContentType':'text/plain'});
// var readMyStream = fs.createReadStream(__dirname+'/Sample.txt','utf8');

// readMyStream.pipe(res);

// });

// server.listen(89, '127.0.0.1');

// console.log('Started to listening to port : 89');




// var http = require("http");
// var fs = require("fs");

// setTimeout(function () {
//     var server = http.createServer(function (req, res) {

//         res.writeHead(200, { 'ContentType': 'text/html' });
//         var readMyStream = fs.createReadStream(__dirname + '/index.html', 'utf8');



//         readMyStream.pipe(res);

//     });

//     server.listen(89, '127.0.0.1');
// }, 3000);

// console.log('Started to listening to port : 89');
// var http = require("http");
// var fs = require("fs");

// setTimeout(function () {
//     var server = http.createServer(function (req, res) {

//         res.writeHead(200, { 'ContentType': 'text/html' });
//         var readMyStream = fs.createReadStream(__dirname + '/index.html', 'utf8');



//         readMyStream.pipe(res);

//     });

//     server.listen(89, '127.0.0.1');
// }, 3000);

// console.log('Started to listening to port : 89');


// var http = require("http");
// var fs = require("fs");

// setTimeout(function () {
//     var server = http.createServer(function (req, res) {

//     console.log("Request has made "+req.url);

//         res.writeHead(200, { 'ContentType': 'application/jason' });

//         myObj = {
//             name :"david", age:23, job:"Waitor"
//         }

//         res.end(JSON.stringify( myObj));

//     });

//     server.listen(89, '127.0.0.1');
// }, 3000);

// console.log('Started to listening to port : 89');


var http = require("http");
var fs = require("fs");


var server = http.createServer(function (req, res) {

    console.log("Request has made " + req.url);

    if (req.url === '/home' || req.url === '/') {

        // Send data to the Client
        // res.writeHead(200, { 'ContentType': 'text/html' });

        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }
    else if(req.url === '/contact'){

        res.writeHead(200, {'ContentType':'text/html'});

        fs.createReadStream(__dirname+'/contact.html').pipe(res);

    }
    else if(req.url === '/api/nin'){

        res.writeHead(200, {'ContentType':'text/html'});
        var ninjas = [{name: 'jack', age:34, job:"waiter"},{name:"david", age:45, job:"Cleaner"}]
   
        res.end(JSON.stringify(ninjas));
   
    }else{

        // res.writeHead(404, {'ContentType':'text/html'});

        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }

 });
    
    server.listen(89, '127.0.0.1');


    console.log('Started to listening to port : 89');
