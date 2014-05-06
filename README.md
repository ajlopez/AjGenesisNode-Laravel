# AjGenesisNode Lavarel

AjGenesisNode Lavarel tasks and templates, to generate web sites using Lavarel. WIP.

## Setup

Install [Node.js](http://nodejs.org).

Install globally latests version of AjGenesis for Node, Entity and Lavarel modules:
```
npm install ajgenesis -g
npm install ajgenesisnode-entity -g
npm install ajgenesisnode-lavarel -g
```

## Quick start

In any directory, create an application
```
ajgenesis lavarel:create demo
cd demo
```

The AjGenesis `lavarel` module is installed automatically from `ajgenesisnode-lavarel`, if it is not already installed.

The new directory has subdirectories:

- `models`: where the free model files reside.
- `ajgenesis`: additional tasks and remplates for AjGenesis.
- `site`: initial static files for a new web site.

Add some entities and propeties:

```
ajgenesis entity:add customer
ajgenesis entity:addproperty customer name
ajgenesis entity:addproperty customer address
ajgenesis entity:add supplier
ajgenesis entity:addproperty supplier name
ajgenesis entity:addproperty supplier address
```

The new .json files will be added to `models` director.

Generate the web site:

```
ajgenesis generate
```

The web site is generated in a new directory `build`.

Install the dependencies
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

## Versions

TBD

## References

TBD

## Contribution

Feel free to [file issues](https://github.com/ajlopez/AjGenesisNode-Lavarel) and submit
[pull requests](https://github.com/ajlopez/AjGenesisNode-Lavarel/pulls) � contributions are
welcome.

If you submit a pull request, please be sure to add or update corresponding
test cases, and ensure that `npm test` continues to pass.
