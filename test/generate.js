
var generatetask = require('../source/ajgenesis/tasks/generate'),
    createtask = require('../create'),
    path = require('path'),
    fs = require('fs'),
    ajgenesis = require('ajgenesis');

exports['create and generate'] = function (test) {
    test.async(360000);
    
    var cwd = process.cwd();
    
    process.chdir('test');
    
    var model = ajgenesis.loadModel();
    test.ok(model.entities);
    test.ok(Array.isArray(model.entities));
    test.equal(model.entities.length, 2);
    
    createtask(null, ['build'], ajgenesis, function (err, result) {
        test.equal(err, null);
        test.ok(fs.existsSync('build'));
        
        model.builddir = 'build';
        
        generatetask(model, [], ajgenesis, function (err, result) {
            test.equal(err, null);
            test.equal(result, null);
            
            var appdir = path.join('build', 'app');
            var modelsdir = path.join('build', 'app', 'models');
            
            test.ok(fs.existsSync(appdir));
            test.ok(fs.existsSync(path.join(appdir, 'routes.php')));
            
            test.ok(fs.existsSync(modelsdir));
            test.ok(fs.existsSync(path.join(modelsdir, 'Customer.php')));
            test.ok(fs.existsSync(path.join(modelsdir, 'Supplier.php')));
            
            var controllersdir = path.join('build', 'app', 'controllers');
            
            test.ok(fs.existsSync(controllersdir));
            test.ok(fs.existsSync(path.join(controllersdir, 'CustomerController.php')));
            test.ok(fs.existsSync(path.join(controllersdir, 'SupplierController.php')));
            
            process.chdir(cwd);
            
            test.done();
        });    
    });
}

/*
exports['generate in directory'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir('test');
    
    var model = ajgenesis.loadModel();
    test.ok(model.entities);
    test.ok(Array.isArray(model.entities));
    test.equal(model.entities.length, 4);
    model.builddir = 'build';
    
    if (fs.existsSync('build') && !fs.existsSync(path.join('build', 'development.db')))
        removeDirSync('build');
    
    generatetask(model, [], ajgenesis, function (err, result) {
        test.equal(err, null);
        test.equal(result, null);
        
        test.ok(fs.existsSync(path.join('build', 'app.rb')));

        test.ok(fs.existsSync(path.join('build', 'public')));
        
        test.ok(fs.existsSync(path.join('build', 'views')));
        //test.ok(fs.existsSync(path.join('views', 'index.erb')));

        test.ok(fs.existsSync(path.join('build', 'views', 'customerlist.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'customernew.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'customerview.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'customeredit.erb')));

        test.ok(fs.existsSync(path.join('build', 'views', 'supplierlist.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'suppliernew.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'supplierview.erb')));
        test.ok(fs.existsSync(path.join('build', 'views', 'supplieredit.erb')));

        test.ok(fs.existsSync(path.join('build', 'entities')));
        test.ok(fs.existsSync(path.join('build', 'entities', 'customer.rb')));
        test.ok(fs.existsSync(path.join('build', 'entities', 'supplier.rb')));
        test.ok(fs.existsSync(path.join('build', 'entities', 'department.rb')));
        test.ok(fs.existsSync(path.join('build', 'entities', 'employee.rb')));

        test.ok(fs.existsSync(path.join('build', 'controllers')));
        test.ok(fs.existsSync(path.join('build', 'controllers', 'customer.rb')));
        test.ok(fs.existsSync(path.join('build', 'controllers', 'supplier.rb')));
        test.ok(fs.existsSync(path.join('build', 'controllers', 'department.rb')));
        test.ok(fs.existsSync(path.join('build', 'controllers', 'employee.rb')));
        
        process.chdir(cwd);
        
        test.done();
    });    
}

exports['create and generate'] = function (test) {
    test.async();
    
    var cwd = process.cwd();
    
    process.chdir('test');
    
    var model = ajgenesis.loadModel();
    test.ok(model.entities);
    test.ok(Array.isArray(model.entities));
    test.equal(model.entities.length, 4);
    
    if (fs.existsSync('build') && !fs.existsSync(path.join('build', 'development.db')))
        removeDirSync('build');

    createtask(null, ['build'], ajgenesis, function (err, result) {
        test.equal(err, null);
        test.ok(fs.existsSync('build'));
        
        model.builddir = 'build';
        
        generatetask(model, [], ajgenesis, function (err, result) {
            test.equal(err, null);
            test.equal(result, null);
            
            test.ok(fs.existsSync(path.join('build', 'app.rb')));

            test.ok(fs.existsSync(path.join('build', 'public')));
            
            test.ok(fs.existsSync(path.join('build', 'views')));
            test.ok(fs.existsSync(path.join('build', 'views', 'index.erb')));

            test.ok(fs.existsSync(path.join('build', 'views', 'customerlist.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'customernew.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'customerview.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'customeredit.erb')));

            test.ok(fs.existsSync(path.join('build', 'views', 'supplierlist.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'suppliernew.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'supplierview.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'supplieredit.erb')));

            test.ok(fs.existsSync(path.join('build', 'views', 'departmentlist.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'departmentnew.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'departmentview.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'departmentedit.erb')));

            test.ok(fs.existsSync(path.join('build', 'views', 'employeelist.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'employeenew.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'employeeview.erb')));
            test.ok(fs.existsSync(path.join('build', 'views', 'employeeedit.erb')));

            test.ok(fs.existsSync(path.join('build', 'entities')));
            test.ok(fs.existsSync(path.join('build', 'entities', 'customer.rb')));
            test.ok(fs.existsSync(path.join('build', 'entities', 'supplier.rb')));
            test.ok(fs.existsSync(path.join('build', 'entities', 'department.rb')));
            test.ok(fs.existsSync(path.join('build', 'entities', 'employee.rb')));

            test.ok(fs.existsSync(path.join('build', 'controllers')));
            test.ok(fs.existsSync(path.join('build', 'controllers', 'customer.rb')));
            test.ok(fs.existsSync(path.join('build', 'controllers', 'supplier.rb')));
            test.ok(fs.existsSync(path.join('build', 'controllers', 'department.rb')));
            test.ok(fs.existsSync(path.join('build', 'controllers', 'employee.rb')));
            
            process.chdir(cwd);
            
            test.done();
        });    
    });
}

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
*/
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

