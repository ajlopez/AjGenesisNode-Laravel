<?php

class ${entity.classname}Controller extends BaseController {
    public function getList($id)
    {
        $${entity.setname} = {${entity.classname}::all();

        return View::make('${entity.name}.list', array('${entity.setname}' => $${entity.setname}));
    }
    
    public function get${entity.classname}($id)
    {
        $${entity.name} = {${entity.classname}::find($id);

        return View::make('${entity.name}.view', array('${entity.name}' => $${entity.name}));
    }
}

?>
