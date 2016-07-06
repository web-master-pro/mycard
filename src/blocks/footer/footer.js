$(document).ready(function(){

    var validatorFormContact = $("#form-contact").validate({
        rules: {
            name: {required: true},
            phone: {required: true},
            email: {email: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"},
            email: {email: "Неправильный формат email"},
            // message: {required: "Это поле должно быть заполнено"}
        },
        focusInvalid: false,
        errorClass: "invalid-field",
        submitHandler: function(form) {
            form.preventDefault;
            $.ajax({
                type: "POST",
                url: $(form).attr("action"),
                data: $(form).serialize()
            }).done(function() {
                $.magnificPopup.open({
                    items:{
                        src:$('#popup-thankyou')
                    },
                    type:'inline',
                    midClick: true,
                    removalDelay: 500,
                    mainClass: 'mfp-zoom-in',
                    overflowY: 'scroll',
                    fixedContentPos: true
                });
            });
            return false;
        }
    });

    $("#form-contact input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-contact textarea" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-contact button").click(function (e) {
        $("#form-contact .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormContact.resetForm();
        return true;
    });

});
