let request = require('request');
let jsdom = require('jsdom');
let JSDOM = jsdom.JSDOM;
let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/表白墙";
let document = new JSDOM("/test.html").window.document;
MongoClient.connect(url,function(err,db)
    {
        if (err)
        {
            throw err;
        }
        console.log("表白墙已创建!");
        let dbase = db.db("表白墙");
        dbase.createCollection("User", function (err, res) {
                if (err) {
                    throw err;
                }
                console.log("集合已创建");
                db.close().then(r => console.log(r));
            }
        );
    }
);