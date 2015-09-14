App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/perfil', { templateUrl: '/UfscarEgressos/Views/perfil.html', controller: 'PerfilController'}).
      when('/timeline', { templateUrl: '/UfscarEgressos/Views/timeline.html', controller: 'TimelineController'}).
      when('/questionario', { templateUrl: '/UfscarEgressos/Views/questionario.html', controller: 'QuestionarioController'}).//A FAZER
      when('/post', { templateUrl: '/UfscarEgressos/Views/post.html', controller: 'PostController'}).
      when('/curriculo', { templateUrl: '/UfscarEgressos/Views/curriculo.html', controller: 'CurriculoController'}).
      when('/visualizarVagas', { templateUrl: '/UfscarEgressos/Views/visualizarVagas.html', controller: 'VisualizarVagasController'}).
      when('/vagas', { templateUrl: '/UfscarEgressos/Views/cadastrarVagas.html', controller: 'CadastrarVagasController'}).
      when('/eventos', { templateUrl: '/UfscarEgressos/Views/cadastrarEventos.html', controller: 'CadastrarEventosController'}).
      when('/empregador', { templateUrl: '/UfscarEgressos/Views/empregador.html', controller: 'EmpregadorController'}).
      when('/postagemNoticia', { templateUrl: '/UfscarEgressos/Views/postagemNoticia.html', controller: 'PostagemNoticiaController'}).
      otherwise({
        redirectTo: '/Erro/'
      });
  }
]);