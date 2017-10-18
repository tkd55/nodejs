var fs = require('fs');

fs.readFile('input.txt', 'utf8', function(err, text) {
    if (err) {
        console.log(err);
        return;
    }
    
    var write = text + '\nwrite';
    fs.writeFile('output.txt', write, function(err) {
        if (err) {
            console.log(err);
            return;
        }
        fs.readFile('output.txt', 'utf8', function(err, text) {
            if (err) {
                console.log(err);
                return;
            }
            console.log(text);
        });
    });
});