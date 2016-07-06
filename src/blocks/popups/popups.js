$(document).ready(function(){

    $('.js-popup').magnificPopup({
        type:'inline',
        midClick: true,
        removalDelay: 500,
        mainClass: 'mfp-zoom-in',
        overflowY: 'scroll',
        fixedContentPos: true
    });

    $(".js-close-button").click(function (e) {
        e.preventDefault();
        $.magnificPopup.close();
        return false;
    });

    var validatorFormPopup = $("#form-popup").validate({
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
                    fixedContentPos: true
                });
            });
            return false;
        }
    });

    $("#form-popup input" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-popup textarea" ).focus(function() {
        $(this).next(".invalid-field").addClass("hidden");
    });

    $("#form-popup button").click(function (e) {
        $("#form-popup .invalid-field").removeClass("hidden").css({"display":""});
        validatorFormPopup.resetForm();
        return true;
    });

});
