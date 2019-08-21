$(document).ready(function () {

    $('#abrir_mesa').click(function () {
        var mesa = $('#val_mesa').val();

        if (mesa == false) {
            $("#alert").html("<div class='alert alert-danger' role='alert'>Favor, informa sua mesa</div>");
        } else {
            $("#l_mesa").html('');
            $(".nav_menu").show('');           
            document.getElementById("catalogo").style.display = "flex";
            //$("#catalogo").attr('display','flex');
            $("#btn_finalizar").show('');

            $(".alert").hide('');
            $(".selecionar_mesa").hide();

            $('#l_mesa').append("<span class='badge badge-primary span_mesa'>Mesa: " + mesa + "</span>");
          
            
        }

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