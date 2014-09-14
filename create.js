
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
        
    model = model || { };
    
    function copySource(err, data) {
        var source = path.resolve(path.join(__dirname, 'source'));
        
        ajgenesis.copyDirectory(source, dirname, function (err, result) {
            if (err) {
                cb(err, null);
                return;
            }
        
            var projmodel;

            if (model.project)
                projmodel = model.project;
            else
                model = projmodel = { project: { name: path.basename(dirname), version: '0.0.1'} };
                
            ajgenesis.createDirectory(ajgenesis.getModelDirectory(dirname));
            ajgenesis.saveModel(path.join(ajgenesis.getModelDirectory(dirname), 'project.json'), projmodel);
            
            ajgenesis.fileTransform(path.join(__dirname, 'templates', 'package.json.tpl'), path.join(dirname, 'package.json'), model);
            
            cb(null, result);
        });
    }
}
