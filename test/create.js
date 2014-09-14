
var createtask = require('../create'),
    path = require('path'),
    fs = require('fs'),
    ajgenesis = require('ajgenesis');

exports['create application'] = function (test) {
    test.async(120000);
    
    var dirname = path.join('test', 'myapp');
    
    createtask(null, [dirname], ajgenesis, function (err, result) {
        test.equal(err, null);
        
        test.ok(fs.existsSync(dirname));
        test.ok(fs.existsSync(path.join(dirname, 'package.json')));
        
        var pack = require(path.resolve(path.join(dirname, 'package.json')));
        
        test.ok(pack);
        test.ok(pack.name);
        test.ok(pack.private);
        test.equal(pack.name, 'myapp');
        
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis')));
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'libs')));
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'tasks')));
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'templates')));
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'models')));
        test.ok(fs.existsSync(path.join(dirname, 'ajgenesis', 'models', 'project.json')));
        
        var project = require(path.resolve(path.join(dirname, 'ajgenesis', 'models', 'project.json')));
        
        test.ok(project);
        test.ok(project.project);
        test.equal(project.project.name, 'myapp');
        test.ok(project.project.version);
                
        test.ok(fs.existsSync(path.join(dirname, 'node_modules')));
        test.ok(fs.existsSync(path.join(dirname, 'node_modules', 'ajgenesisnode-model')));
        test.ok(fs.existsSync(path.join(dirname, 'node_modules', 'ajgenesisnode-entity')));
        
        test.done();
    });
};

function removeDirSync(dirname) {
    var filenames = fs.readdirSync(dirname);
    
    filenames.forEach(function (filename) {
        filename = path.join(dirname, filename);
        
        if (isDirectory(filename))
            removeDirSync(filename);
        else
            removeFileSync(filename);
    });
    
    fs.rmdirSync(dirname);
}

function removeFileSync(filename) {
    fs.unlinkSync(filename);
}

function isDirectory(filename)
{
    try {
        var stats = fs.lstatSync(filename);
        return stats.isDirectory();
    }
    catch (err)
    {
        return false;
    }
}

