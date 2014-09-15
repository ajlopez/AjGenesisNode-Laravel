<!DOCTYPE html>
<html>
  <head>
    <title>${project.title} - {{{ $title }}}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="/css/bootstrap.min.css" rel="stylesheet" media="screen">
    <link href="/css/jumbotron.css" rel="stylesheet">
    <link href="/css/style.css" rel="stylesheet" media="screen">

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="../../assets/js/html5shiv.js"></script>
      <script src="../../assets/js/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
 <!-- Static navbar -->
      <div class="navbar navbar-inverse navbar-fixed-top">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">${project.title}</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Entities <b class="caret"></b></a>
              <ul class="dropdown-menu"><# entities.forEach(function (entity) { #>
                <li><a href="/${entity.name}">${entity.settitle}</a></li><# }); #>              
              </ul>
            </li>
            <li><a href="/about">About</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
      
      <div class="container">
        <div class="row">
            <h1>{{{ $title }}}</h1>
        </div>
          @yield('content')
      </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="/js/jquery.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="/js/bootstrap.min.js"></script>
  </body>
</html>