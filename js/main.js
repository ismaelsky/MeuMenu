$(document).ready(function() {

    comanda = [];


    Lanche = [
        { id: "1", nome: 'Hamburger', valor: '10,00', descricao: 'Hamburger,Batata,Queijo' },
        { id: "2", nome: 'Misto', valor: '7,00', descricao: 'Queijo,Presunto' },
        { id: "3", nome: 'Hot Dog', valor: '10,00', descricao: 'HotDog' }
    ];
    Pastel = [
        { id: "1", nome: 'Carne', valor: '5,00', descricao: 'Carne e Queijo' },
        { id: "2", nome: 'Frango', valor: '5,00', descricao: 'Frango e Queijo' },
        { id: "3", nome: 'Queijo e Presunto', valor: '6,00', descricao: 'Queijo e Presunto' }
    ];
    Pizza = [
        { id: "1", nome: 'Calabreza', valor: '15,00', descricao: 'Calabreza,Queijo, Orêgano' },
        { id: "2", nome: 'Frango', valor: '15,00', descricao: 'Frango,Queijo, Orêgano' },
        { id: "3", nome: 'Queijo e Presunto', valor: '16,00', descricao: 'Queijo, Presunto e Orêgano' }
    ];
    Bebida = [
        { id: "1", nome: 'Suco', valor: '5,00', descricao: 'Copo 500ML' },
        { id: "2", nome: 'Coca-Cola Refrig 1L', valor: '6,00', descricao: 'Pet 1L' },
        { id: "3", nome: 'Kuat Refrig 1L', valor: '6,00', descricao: 'Pet 1L' }
    ];

    $('#abrir_mesa').click(function() {
        var mesa = $('#val_mesa').val();
        var item = "3";
        var bebi = "2";

        if (mesa == false) {
            $("#alert").html("<div class='alert alert-danger' role='alert'>Favor, informa sua mesa</div>");
        } else {
            $("#l_mesa").html('');
            $(".menu").show('');
            document.getElementById("catalogo").style.display = "flex";
            //$("#catalogo").attr('display','flex');
            $("#btn_finalizar").show('');

            $(".alert").hide('');
            $(".selecionar_mesa").hide();

            $('#l_mesa').append("Mesa " + mesa + " ");

            $('#l_item').append("<span class='mt-1 badge badge-light p-2'>Pedidos <span class='badge badge-dark'>" + item + "</span></span>");

            $('#l_bebi').append("<span class='mt-1 badge badge-light p-2'>Bebida <span class='badge badge-dark'>" + bebi + "</span></span>");

        }

    });

    $('.item_catg').click(function() {
        $("#catalogo").hide('');
        $('#box_list_itens').html('');
        document.getElementById("items_list").style.display = "flex";
        var nome_list = $(this).attr('alt');

        $('#sub_Local').append(nome_list);

        box_list_item = '';

        if (nome_list == 'Lanche') {
            $.each(Lanche, function(index, tb_lista) {
                box_list_item = " " +
                    "<li class='item_l list-group-item list-group-item-action flex-column align-items-start'" +
                    "data-toggle='modal' data-target='#modalExemplo' alt='" + tb_lista.nome + ";" + tb_lista.valo + ";" + tb_lista.descricao + ";" + tb_lista.id + "'>" +
                    "<div class='d-flex w-100 justify-content-between'>" +
                    "<h5 class='mb-1'>" + tb_lista.nome + "</h5>" +
                    "<small>" + tb_lista.valor + "</small>" +
                    "</div>" +
                    "<p class='mb-1'>" + tb_lista.descricao + "</p>" +
                    "</li>";

                $('#box_list_itens').append(box_list_item);
            });
        };

        if (nome_list == 'Pastel') {
            $.each(Pastel, function(index, tb_lista) {
                box_list_item = " " +
                    "<li class='item_l list-group-item list-group-item-action flex-column align-items-start'" +
                    "data-toggle='modal' data-target='#modalExemplo' alt='" + tb_lista.nome + ";" + tb_lista.valo + ";" + tb_lista.descricao + ";" + tb_lista.id + "'>" +
                    "<div class='d-flex w-100 justify-content-between'>" +
                    "<h5 class='mb-1'>" + tb_lista.nome + "</h5>" +
                    "<small>" + tb_lista.valor + "</small>" +
                    "</div>" +
                    "<p class='mb-1'>" + tb_lista.descricao + "</p>" +
                    "</li>";

                $('#box_list_itens').append(box_list_item);
            });
        };

        if (nome_list == 'Pizza') {
            $.each(Pizza, function(index, tb_lista) {
                box_list_item = " " +
                    "<li class='item_l list-group-item list-group-item-action flex-column align-items-start'" +
                    "data-toggle='modal' data-target='#modalExemplo' alt='" + tb_lista.nome + ";" + tb_lista.valo + ";" + tb_lista.descricao + ";" + tb_lista.id + "'>" +
                    "<div class='d-flex w-100 justify-content-between'>" +
                    "<h5 class='mb-1'>" + tb_lista.nome + "</h5>" +
                    "<small>" + tb_lista.valor + "</small>" +
                    "</div>" +
                    "<p class='mb-1'>" + tb_lista.descricao + "</p>" +
                    "</li>";

                $('#box_list_itens').append(box_list_item);

            });
        };

        if (nome_list == 'Bebida') {
            $.each(Bebida, function(index, tb_lista) {
                box_list_item = " " +
                    "<li class='item_l list-group-item list-group-item-action flex-column align-items-start'" +
                    "data-toggle='modal' data-target='#modalExemplo' alt='" + tb_lista.nome + ";" + tb_lista.valo + ";" + tb_lista.descricao + ";" + tb_lista.id + "'>" +
                    "<div class='d-flex w-100 justify-content-between'>" +
                    "<h5 class='mb-1'>" + tb_lista.nome + "</h5>" +
                    "<small>" + tb_lista.valor + "</small>" +
                    "</div>" +
                    "<p class='mb-1'>" + tb_lista.descricao + "</p>" +
                    "</li>";

                $('#box_list_itens').append(box_list_item);

            });
        };













    });
    $('.volt_ctlg').click(function() {
        $("#items_list").hide('');
        $('#sub_Local').html(' ');
        document.getElementById("catalogo").style.display = "flex";

    });

    $('.item_l').click(function() {
        $("#mod_nome_item").html('');
        $('#mod_preco_item').html('');
        $('#mod_desc_item').html(' ');
        $('#mod_qtd_item').val('1');
        $('#mod_obs_item').html('');
        $('#btn_mod_add').attr('alt', '');


        var item = $(this).attr('alt');
        var item = item.split(";");

        $("#mod_nome_item").append(item[0]);
        $('#mod_preco_item').append(item[1]);
        $('#mod_desc_item').append(item[2]);
        $('#mod_obs_item').append(item[3]);
        $('#btn_mod_add').attr('alt', item[4]);
    });


    $('#btn_mod_add').click(function() {

        var item_comanda1 = $("#mod_nome_item").html();
        var item_comanda2 = $('#mod_preco_item').html();
        var item_comanda3 = $('#mod_desc_item').html();
        var item_comanda4 = $('#mod_qtd_item').val();
        var item_comanda5 = $('#mod_obs_item').val();

        var item_codg = Math.floor((Math.random() * 1000) + 1);

        var item = { id: item_codg, nome: item_comanda1, preco: item_comanda2, descricao: item_comanda3, quantidade: item_comanda4, obs: item_comanda5 };
        comanda.push(item);
        console.log(comanda);

    });
    $('#btn_show_coman').click(function() {
        $("#btn_show_coman").hide();
        $("#btn_hide_coman").show();
        $("#comanda").show();
    });
    $('#btn_hide_coman').click(function() {
        $("#btn_show_coman").show();
        $("#btn_hide_coman").hide();
        $("#comanda").hide();
    });



    $('#teste').click(function() {

        var arr = [
            { id: 1, name: 'Duplicado' },
            { id: 2, name: 'John Snow' },
            { id: 3, name: 'Michael Scolfield' },
            { id: 4, name: 'Dexter Morgan' }
        ];

        console.log(arr);

        arr = removerPorId2(arr, 2);

        // Opção 2
        function removerPorId2(array, id) {
            return array.filter(function(el) {
                return el.id !== id;
            });
        }
        console.log(arr);



    });






    /*
     $.ajax({
     type: 'GET',
     url: 'http://connectsatrastreamento.com/kanban/php/read.php',
     contentType: 'text/plain',
     xhrFields: {
     withCredentials: false
     },
     headers: {
     // Set any custom headers here.
     // If you set any non-simple headers, your server must include these
     // headers in the 'Access-Control-Allow-Headers' response header.
     },
     
     success: function() {
     // Here's where you handle a successful response.
     },
     
     error: function() {
     // Here's where you handle an error response.
     // Note that if the error was due to a CORS issue,
     // this function will still fire, but there won't be any additional
     // information about the error.
     }
     });
     

    sessao_perfil();
    time();

     var time_sessao;
    function time() {
        time_sessao = setInterval(sessao_perfil, 60000);
    }


    // sessao
    function sessao_perfil() {

        //rotina atual 
        $.getJSON("https://connectsatrastreamento.com/kanban/php/read.php", { id_rotina: '2' },
            function (tb_rotina) {
                array_id_processo = [];//array com id da tabela processo
                array_processo = [];//array com dados da tabela processo
                processos = " ";//array para criar processos

                //chamar processos existentes depois os card referentes a eles.
                $.getJSON("https://connectsatrastreamento.com/kanban/php/read.php", { fk_rot_proc: tb_rotina[0][0] },
                    function (data) {

                        $.each(data, function (index, tb_processo) {

                            processos += " " +
                                "<div class='proc'>" +
                                "<div class='window wd-proc'>" +
                                "<div class='window-caption'>" +
                                "<span class='icon mif-inbox'></span>" +
                                "<span class='title'>" + tb_processo.stg_nome + "</span>" +
                                "<div class='buttons'>" +
                                "<span id='button_show_novo_card' class='icon mif-add'></span>" +
                                "</div>" +
                                "</div>" +
                                "<div id='processo_id" + tb_processo.id_processo + "' class='window-content p-2'>" +
                                // recebe dados dos cards da tabela

                                "</div>" +
                                "</div>" +
                                "</div >";

                            $('#trilho_processos').html(processos);

                            var id = tb_processo.id_processo;
                            var nome = tb_processo.stg_nome;
                            array_processo.push([id, nome]);
                            array_id_processo.push(id);
                        });


                        id_process = '';
                        cards = " ";//array para criar cards

                        update();

                        function update() {
                            $.each(array_id_processo, function (index, id_process) {


                                $.getJSON("https://connectsatrastreamento.com/kanban/php/read.php", { cards: id_process },
                                    function (data) {
                                        $.each(data, function (index, tb_card) {

                                            cards += "<br /> <div data-role='panel' data-title-caption='" + tb_card.stg_nome + "' data-collapsed='true' data-collapsible='true' 'data-custom-buttons='customButtons'>"
                                                + tb_card.stg_o_q_fazer +
                                                "<div class='dropdown-button'>" +
                                                "<button class='button dropdown-toggle'>Mover</button>" +
                                                "<ul id='list_move" + tb_card.id_card + "' class='d-menu' data-role='dropdown'>" +

                                                // valores adicionados pelo for() logo a baixo;
                                                "</ul>" +
                                                "</div>" +
                                                "</div>";

                                            $("#processo_id" + tb_card.fk_proc_card).append(cards);
                                            i = 0;
                                            for (i += 0; i < array_processo.length; i++) {
                                                //console.log(array_processo[i][0] +"-- >"+array_processo[i][1]);

                                                list_processos = "<li alt='" + tb_card.id_card + ";" + array_processo[i][0] + "' id='list_id_proc" + array_processo[i][0] + "' class='mover_card'><a> " + array_processo[i][1] + " </a></li>";

                                                $("#list_move" + tb_card.id_card).append(list_processos);



                                                //chama ao clicar no card


                                            }
                                            ;




                                            $('.mover_card').click(function () {

                                                var retorno = $(this).attr('alt').split(";");

                                                var tf_id = retorno[0];
                                                var tf_process = retorno[1];

                                                $.post("https://connectsatrastreamento.com/kanban/php/update.php", { id_card: tf_id, fk_proc_card: tf_process, mover_card: tf_id }, // mover_card e somente para informa qual função executar
                                                    function (data) {

                                                        update();

                                                    });
                                                //window.location.replace("/");


                                            });



                                            cards = " ";
                                        });



                                    });

                            });
                        };

                    });

            });



    };


   


*/





});

//localStorage.setItem('lastname','Smith'); // gravar
//Storage.removeItem('lastname');           // apagar a entrada "lastname"
//Storage.clear();                          // apagar tudo o que está no local storage
//alert(localStorage.getItem('lastname'));