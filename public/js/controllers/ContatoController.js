angular.module('ifsp').controller('ContatoController',
    function($scope, $routeParams, $resource) {
        var Contato = $resource('/contatos/:id');
        Contato.get({ id: $routeParams.contatoId },
            function(contato) {
                $scope.contato = contato;
            },
            function(erro) {
                $scope.mensagem = {
                    texto: 'Não foi possível obter o contato.'
                };
                console.log($routeParams.contatoId);
            }
        );

    } else {$scope.contato = new.contato();}

    $scope.salva = function() {
        $scope.contato.$save()
        .then(function(){
            $scope.mensagem = {texto: 'Salvo com sucesso'};
            //limpar formulário
            $scope.contato = new.contato();
        })
        .catch(function(erro) {
            $scope.mensagem = {texto: 'Não foi possível salvar'}
        })
    });