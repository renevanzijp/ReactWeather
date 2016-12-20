function getTempCallback(location, callback){
    callback(undefined, 78);
    callback("city not found");
}

getTempCallback("Delft", function (err, temp) {
    if(err){
        console.log("error", err);
    } else{
        console.log("succes", temp);
    }
});

function getTempPromise(location, sec){
    return new Promise( function (resolve, reject) {
            setTimeout( function () {
                resolve(78);
                reject("city not found");
            }, sec * 1000);
        }
    );
}

getTempPromise("delft", 1).then(function (temp) {
        console.log("succes", temp);
    }, function (err) {
        console.log("err", err);
    }
);
console.log("na promisecall");
getTempPromise("delft", 2).then(function (temp) {
        console.log("succes", temp);
    }, function (err) {
        console.log("err", err);
    }
);

console.log("na promisecall");
getTempPromise("delft", 7).then(function (temp) {
        console.log("succes", temp);
    }, function (err) {
        console.log("err", err);
    }
);

console.log("na promisecall");
getTempPromise("delft", 3).then(function (temp) {
        console.log("succes", temp);
    }, function (err) {
        console.log("err", err);
    }
);
console.log("na promisecall");
getTempPromise("delft", 2).then(function (temp) {
        console.log("succes", temp);
    }, function (err) {
        console.log("err", err);
    }
);
console.log("na promisecall");
