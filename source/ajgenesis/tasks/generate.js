
var path = require('path'),
    models = require('../libs/models');

function generate(model, args, ajgenesis, cb) {
    models.completeModel(model);
    
    var builddir = model.builddir;
    var appdir = path.join(builddir, 'app');
    var modelsdir = path.join(builddir, 'app', 'models');
    
    ajgenesis.createDirectory(builddir);
    ajgenesis.createDirectory(appdir);
    ajgenesis.createDirectory(modelsdir);
    
    model.entities.forEach(function (entity) {
        model.entity = entity;

        ajgenesis.fileTransform(path.join(__dirname, '..', 'templates', 'models', 'entity.php.tpl'), path.join(modelsdir, entity.classname + '.php'), model);

        delete model.entity;
    });
    
    cb(null, null);
}

module.exports = function (model, args, ajgenesis, cb) {
    generate(model, args, ajgenesis, cb);
}
