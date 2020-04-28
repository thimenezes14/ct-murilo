$(document).ready( function () {
    let tabela = $('#tabela').DataTable({
        "language": {
            "sProcessing":    "Processando...",
            "sLengthMenu":    "Mostrar _MENU_ registros",
            "sZeroRecords":   "Não foram encontrados resultados",
            "sEmptyTable":    "Nenhum dado para mostrar",
            "sInfo":          "Mostrando  _START_-_END_ de _TOTAL_ registros",
            "sInfoEmpty":     "Mostrando 0-0 de 0 registro",
            "sInfoFiltered":  "(Total: _MAX_)",
            "sInfoPostFix":   "",
            "sSearch":        "Buscar:",
            "sUrl":           "",
            "sInfoThousands":  ".",
            "sLoadingRecords": "Carregando...",
            "oPaginate": {
                "sFirst":    "Primeiro",
                "sLast":    "Último",
                "sNext":    "Próximo",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Ordenar em Modo Ascendente",
                "sSortDescending": ": Ordenar em Modo Descendente"
            }
        },
        responsive: true,
        ajax: {
            url: "http://localhost:3000/obterdados",
            dataSrc: function (json) {
                return json;
            },
        },
        columns: [
            {"data": "id"},
            {"data": "usuario"},
            {"data": "temperatura_ambiente"},
            {"data": "temperatura_banho"},
            {"data": "dia"},
            {"data": "horario"},
        ]
    });

    $('#btn_atualizar').click(function() {
        console.log("oi");
        tabela.ajax.reload( null, false );
    });
});