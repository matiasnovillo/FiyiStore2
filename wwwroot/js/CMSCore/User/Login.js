$(document).ready(function () {
});

$("#loginbutton").on("click", function (e) {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName("needs-validation");
    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            event.stopPropagation();

            if ($("#email").val() == "" || $("#password").val() == "") {
                $.notify({
                    message: `<p class='text-white text-center'>
                                <i class='fas fa-circle-info fa-xl'></i>
                                Por favor, complete todos los campos.
                              </p> ` },
                    {
                        type: "info",
                        placement: { from: "bottom", align: "center" },
                        allow_dismiss: false,
                        delay: 1000,
                    });
                return;
            }

            if (form.checkValidity() === true) {
                //Create a formdata object
                var formData = new FormData();

                formData.append("email", $("#email").val());
                formData.append("password", $("#password").val());

                //Setup request
                var xmlHttpRequest = new XMLHttpRequest();
                //Set event listeners
                xmlHttpRequest.onload = function () {
                    if (xmlHttpRequest.status >= 400) {
                        //ERROR
                        console.log(xmlHttpRequest);
                        $.notify({
                            message: `<p class='text-white text-center'>
                                <i class='fas fa-triangle-exclamation fa-xl'></i>
                                Hubo un error durante el proceso. Intente nuevamente
                              </p> ` },
                            {
                                type: "warning",
                                placement: { from: "bottom", align: "center" },
                                allow_dismiss: false,
                                delay: 1000,
                            });
                    }
                    else {
                        if (xmlHttpRequest.response == "Usuario no encontrado") {
                            $.notify({
                                message: `<p class='text-white text-center'>
                                <i class='fas fa-triangle-exclamation fa-xl'></i>
                                Usuario no encontrado
                              </p> ` },
                                {
                                    type: "warning",
                                    placement: { from: "bottom", align: "center" },
                                    allow_dismiss: false,
                                    delay: 1000,
                                });
                        }
                        else {
                            window.location.href = xmlHttpRequest.response;
                        }
                    }
                };
                //Open connection
                xmlHttpRequest.open("POST", "/api/CMSCore/User/1/Login", false);
                //Send request
                xmlHttpRequest.send(formData);
            }
            else {
                $.notify({
                    message: `<p class='text-white text-center'>
                                <i class='fas fa-circle-info fa-xl'></i>
                                Por favor, complete todos los campos.
                              </p> ` },
                    {
                        type: "info",
                        placement: { from: "bottom", align: "center" },
                        allow_dismiss: false,
                        delay: 1000,
                    });
            }
        }, false);
    });
});