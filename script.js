$(function() {

    $.ajax({
        url:'https://api.b7web.com.br/cinema/',
        type:'GET',
        dataType:'json',
        beforeSend:function() {
            $('.filmes').html('<div class="col-md-12">Carregando...</div>')
        },
        success:function(json) {

            var html = '';

            for(var i in json) {
                html += '<div class="col-md-4"><div class="filme"><img src="'+json[i].avatar+'">'+'<div class="titulo">'+json[i].titulo+'</div></div></div>'
            }

            $('.filmes').html(html);
        }
    });

})


// //Bootstrap 5 - sem jquery
// (async function () {
//     document.querySelector(".filmes").innerHTML = "carregando...";
//     let req = await fetch("https://api.b7web.com.br/cinema/");
//     let json = await req.json();
//     console.log(json);
//     montarBlog(json);
 
//   function montarBlog(lista) {
//     let html = "";

//     for (let i in lista) {
//       html +=
//         `<div class="col-md-4  bg-light p-3"><div class="filme"><img class="img-thumbnail"src="${lista[i].avatar}"/><h5 class="mb-3 text-warning text-center">${lista[i].titulo}</h5></div></div>`;
//     }
//     document.querySelector(".filmes").innerHTML = html;
//   }
// })();