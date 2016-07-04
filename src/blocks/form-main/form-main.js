$(document).ready(function(){

    var validatorFormMain = $("#form-main").validate({
        rules: {
            name: {required: true},
            phone: {required: true}
        },
        messages: {
            name: {required: "Это поле должно быть заполнено"},
            phone: {required: "Это поле должно быть заполнено"}
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
                    fixedContentPos: false
                });
            });
            return false;
        }
    });

    $("#form-main input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-main textarea" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-main button").click(function (e) {
        $("#form-main .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormMain.resetForm();
        return true;
    });

});
