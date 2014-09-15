
var path = require('path'),
    models = require('../libs/models');

function generate(model, args, ajgenesis, cb) {
    models.completeModel(model);
    
    var builddir = model.builddir;
    var appdir = path.join(builddir, 'app');
    var modelsdir = path.join(builddir, 'app', 'models');
    var controllersdir = path.join(builddir, 'app', 'controllers');
    var viewsdir = path.join(builddir, 'app', 'views');
    
    ajgenesis.createDirectory(builddir);
    ajgenesis.createDirectory(appdir);
    ajgenesis.createDirectory(modelsdir);
    ajgenesis.createDirectory(controllersdir);
    ajgenesis.createDirectory(viewsdir);
    
    ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'routes.php.tpl'), path.join(appdir, 'routes.php'), model);
    ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'layout.blade.php.tpl'), path.join(viewsdir, 'layout.blade.php'), model);
    ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'index.blade.php.tpl'), path.join(viewsdir, 'index.blade.php'), model);
    
    model.entities.forEach(function (entity) {
        model.entity = entity;

        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'models', 'entity.php.tpl'), path.join(modelsdir, entity.classname + '.php'), model);
        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'controllers', 'entity.php.tpl'), path.join(controllersdir, entity.classname + 'Controller.php'), model);

        ajgenesis.createDirectory(path.join(viewsdir, entity.name));
        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'entity.list.blade.php.tpl'), path.join(viewsdir, entity.name, 'list.blade.php'), model);
        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'views', 'entity.view.blade.php.tpl'), path.join(viewsdir, entity.name, 'view.blade.php'), model);

        delete model.entity;
    });
    
    cb(null, null);
}

module.exports = function (model, args, ajgenesis, cb) {
    generate(model, args, ajgenesis, cb);
}
