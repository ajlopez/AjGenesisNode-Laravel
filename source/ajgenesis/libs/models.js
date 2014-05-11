
var utils = require('./utils');

function getEntityByName(entities, name) {
    for (var n in entities) {
        var entity = entities[n];
        
        if (entity.name == name)
            return entity
    }
    
    return null;
}

function completeProperty(property, entities) {
    if (!property)
        return;
        
    if (property.name && !property.title)
        property.title = utils.capitalize(property.name);
        
    if (!property.type)
        property.type = 'string';
        
    if (property.reference) {
        property.type = 'reference';
        property.reference = getEntityByName(entities, property.reference);
    }
}

function completeEntity(entity, entities) {
    if (!entity)
        return;
        
    if (entity.name && !entity.title)
        entity.title = utils.capitalize(entity.name);
        
    if (entity.title && !entity.settitle)
        entity.settitle = utils.pluralize(entity.title);
        
    if (entity.properties)
        entity.properties.forEach(function (property) {
            completeProperty(property, entities);
        });
}

function completeModel(model) {
    if (!model)
        return;
        
    if (model.name && !model.title)
        model.title = utils.capitalize(model.name);
        
    if (model.project && model.project.name && !model.project.title)
        model.project.title = utils.capitalize(model.project.name);
        
    if (model.entities)
        model.entities.forEach(function (entity) {
            completeEntity(entity, model.entities);
        });
}

module.exports = {
    completeModel: completeModel
};
