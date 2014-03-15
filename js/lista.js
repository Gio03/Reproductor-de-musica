$(function(){
    document.addEventListener("deviceready",function(){
        $("#home ul.rounded li").tap(function(){
            if($(this).index()==0){
                muestraLista("pet");
            }
        });
    },false);
});



function muestraLista(variable){
$.ajax({type:'POST',
    url:'http://carlos.igitsoft.com/apps/ringtonesPlatform/servApp.php', 
    data:{variable:vari},
    dataType:'json',
    success:function(data){
        $("#ListMusica").html("");
        for(i=0;i<=data.length;i++)
        {
            $('<li rel="'+data[i].nombre+'"> <a href="#">'+data[i].ruta+'</a> </li>').appendTo("#ListMusica");
        }
    },
    error:function(xhr,type){alert('Ajax error!')
    }
})
}

