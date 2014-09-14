
var path = require('path');
var fs = require('fs');

// from http://krasimirtsonev.com/blog/article/Nodejs-managing-child-processes-starting-stopping-exec-spawn
function runCommand(cmd, cb) {
    var exec = require('child_process').exec;

    console.log('executing:', cmd);
    var child = exec(cmd);
    
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    child.on('close', function(code) {
        cb(code, null);
    });
}

function composerCreate(dirname, cb) {
    var cmd = 'composer create-project laravel/laravel ' + dirname + ' --prefer-dist';
    runCommand(cmd, cb);
}

module.exports = function (model, args, ajgenesis, cb) {
    var dirname = args[0];

    if (!fs.existsSync(dirname))
        composerCreate(dirname, copySource);
    else
        copySource(0, null);
        
    function copySource(err, data) {
        var source = path.resolve(path.join(__dirname, 'source'));
        
        ajgenesis.copyDirectory(source, dirname, function (err, result) {
            if (err) {
                cb(err, null);
                return;
            }
        
    //        ajgenesis.fileTransform(path.join(__dirname, 'templates', 'project.json.tpl'), path.join(dirname, 'models', 'project.json'), { name: dirname });
            
            cb(null, result);
        });
    }
}
