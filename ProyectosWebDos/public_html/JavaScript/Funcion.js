$(function()
{
    $("#btnIniciarSesion").bind("click", function()
    {
        var vectorUsuariosLogin = JSON.parse(localStorage.getItem('Usuario'));
        debugger;
        if (vectorUsuariosLogin === null)
        {
            alert('No hay datos registrados en la base de datos');
        } else {
            var $txtNombreUsuario = $('#txtNombreUsuarioLogin');
            var $txtContrasenna = $('#txtContrasennaLogin');

            var strNombreUsuario = $.trim($txtNombreUsuario.val());
            var strContrasenna = $.trim($txtContrasenna.val());
            for (var pos = 0; pos < vectorUsuariosLogin.length; pos++) {
                if (strNombreUsuario === vectorUsuariosLogin[pos].cedulaUsuario && strContrasenna === vectorUsuariosLogin[pos].contrasennaUsuario)
                {
                    debugger;
                    $(location).attr('href', 'DashBoard.html');
                } else
                {
                    alert('No existe un usuario registrado con los datos ingresados');

                }
            }
        }
    });
});