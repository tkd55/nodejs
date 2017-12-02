var fs = require('fs');
var fileAction = (() => {
    return new Promise((resolve, reject) => {
        resolve();
    });
})();

// fileAction
// .then(() => {
//     return new Promise((resolve, reject) => {
//         fs.readFile('input.txt', 'utf-8', (err, text) => {
//             if(err){
//                 reject(err);
//             }
//             resolve(text);
//         });
//     });
// })
// .then((text) => {
//     return new Promise((resolve, reject) => {
//         var write = text + '\nwrite';
//         fs.writeFile('output.txt', write, (err) => {
//             if(err){
//                 reject(err)
//             }
//             resolve();
//         });
//     });
// })
// .then(() => {
//     fs.readFile('output.txt', 'utf8', (err, text) => {
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(text);
//     });
// })
// .catch(() => {
//     console.log('reject');
// });




const fileProcess = async () => {
    //
    let txt = await new Promise((resolve, reject) => {
        fs.readFile('input.txt', 'utf-8', (err, text) => {
            if(err){
                reject(err);
            }
            resolve(text);
        });
    });


    let xxx = new Promise((resolve, reject) => {
        var write = txt + '\nwrite';
        fs.writeFile('output.txt', write, (err) => {
            if(err){
                reject(err)
            }
            resolve();
        });
    });

    //
    let yyy = await new Promise((resolve, reject) => {
        fs.readFile('output.txt', 'utf-8', (err, text) => {
            if(err){
                reject(err);
            }
            resolve(text);
        });
    });


    console.log('====================================');
    console.log(yyy);
    console.log('====================================');
};

fileProcess();