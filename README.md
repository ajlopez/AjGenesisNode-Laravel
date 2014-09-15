# AjGenesisNode Lavarel

AjGenesisNode Lavarel tasks and templates, to generate web sites using Lavarel. WIP.

## Setup

Install [Node.js](http://nodejs.org).

Install globally latests version of AjGenesis for Node, Entity and Lavarel modules:
```
npm install ajgenesis -g
npm install ajgenesisnode-lavarel -g
```

## Quick start

In any directory, create an application
```
ajgenesis lavarel:create demo
cd demo
```
You must have `composer` and `npm` in your path.

The new directory is a Laravel application, with an additionally subdirectory:

- `ajgenesis`: additional tasks and remplates for AjGenesis.

Add `node_modules` to the project `.gitignore` file.

Now, add some entities and propeties:

```
ajgenesis entity:add customer
ajgenesis entity:addproperty customer name
ajgenesis entity:addproperty customer address
ajgenesis entity:add supplier
ajgenesis entity:addproperty supplier name
ajgenesis entity:addproperty supplier address
```

The new `.json` files will be added to `ajgenesis/models` directory.

You must start your database server (default is `mysql`). And you must create
the database and tables (migration support is pending).

Generate the web site:
```
ajgenesis generate
```

The web site is generated in a new directory `build`.

Launch the web site as a Laravel 
```
php artisan serve
```

Browse to `http://localhost:8000`

TBD

Run the site
TBD

## Development

```
npm install -g ajgenesis
git clone git://github.com/ajlopez/AjGenesisNode-Lavarel.git
cd AjGenesisNode-Lavarel
npm link ajgenesis
npm install
npm test
```

## Laravel Master

The internal site was downloaded from https://github.com/laravel/laravel/archive/master.zip

See http://laravel.com/docs/quick Via Composer

## Versions

TBD

## References

TBD

## Contribution

Feel free to [file issues](https://github.com/ajlopez/AjGenesisNode-Lavarel) and submit
[pull requests](https://github.com/ajlopez/AjGenesisNode-Lavarel/pulls) — contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
