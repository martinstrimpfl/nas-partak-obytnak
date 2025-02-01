$(document).ready(function(){
    $(document).on("change",'input[type="checkbox"]', function(){
        var inputValue = $(this).attr("name");
	var inputId = $(this).attr("id");
        if (inputId !== inputValue) {
            $('#' + inputValue).toggle();
        }
    });
});

$(document).ready(function(){
    $(document).on("change",'input[type="radio"]', function(){
        var inputValue = $(this).attr("data-radioname");
        $('#' + inputValue).show();
        $('#' + inputValue).siblings().hide();
    });
});

$(document).ready(function(){
    $(document).on("change",'.form_select', function(){
        var inputValue = $(this).find("option[value='"+this.value+"']").attr("data-selectname");
        $('#' + inputValue).show();
        $('#' + inputValue).siblings().hide();
    });

    $("form").find(".form_select").each(function() {
        $(this).find("option:first-child").prop('selected', true);
        var inputValue = $(this).find("option[value='"+this.value+"']").attr("data-selectname");
        $('#' + inputValue).show();
        $('#' + inputValue).siblings().hide();
    });
});

$(document).ready(function(){
    $(document).on("change",'input[type="checkbox"].email_odesilatel_admin', function(){
        var checked = $(this).prop("checked");
        var id = $(this).attr("name").match(/\[(.*)\]/)[1];
        var form = $("#box"+id);

        if (checked) {
            formulare.Add(id, 'email');
        } else {
            form.find("[data-form=\"email\"]").remove();
        }
    });

    $(document).on("change",'input[type="checkbox"].vypocty_admin', function(){
        var checked = $(this).prop("checked");
        var id = $(this).attr("name").match(/\[(.*)\]/)[1];
        var form = $("#box"+id);

        if (checked) {
            formulare.Add(id, 'vypocty');
        } else {
            form.find("[data-form=\"vypocty\"]").remove();
        }
    });
});

$(document).ready(function(){
    if ($(".form_datetime").length > 0) {
        $(".form_datetime").datetimepicker({
            format:'d.m.Y H:i',
        });
    }
});

$( document ).ready(function() {
    $(document).on("keyup", "[data-textid]", function() {
        var data = $(this).data("textid");
        var value = $(this).val();
        $("#" + data).text(value);
    });
});

///////denni_menu

$(document).ready(function(){
    $('#denni_menu_jidla_edit_select').on("change", function(){

        $('[name=jidlo_id]').val($(this).find('option:selected').attr('data-id'));
        $('[name=jidlo_nazev]').val($(this).find('option:selected').attr('data-nazev'));
        $('[name=jidlo_cena]').val($(this).find('option:selected').attr('data-cena'));
        $('[name=jidlo_alergeny]').val($(this).find('option:selected').attr('data-alergeny'));
        $('[name=jidlo_poznamka]').val($(this).find('option:selected').attr('data-poznamka'));
        var diety = $(this).find('option:selected').attr('data-diety');
        if (diety.includes("vegan")) $('[name="jidlo_diety\[vegan\]"]').prop('checked', true);
        else  $('[name="jidlo_diety\[vegan\]"]').prop('checked', false);
        if (diety.includes("vegetarian")) $('[name="jidlo_diety\[vegetarian\]"]').prop('checked', true);
        else  $('[name="jidlo_diety\[vegetarian\]"]').prop('checked', false);
        if (diety.includes("lepek")) $('[name="jidlo_diety\[lepek\]"]').prop('checked', true);
        else  $('[name="jidlo_diety\[lepek\]"]').prop('checked', false);
        if (diety.includes("laktoza")) $('[name="jidlo_diety\[laktoza\]"]').prop('checked', true);
        else  $('[name="jidlo_diety\[laktoza\]"]').prop('checked', false);
    });
});

$(document).ready(function(){
    $('#denni_menu_jidla_ovladani').children().on("click", function(){
        var value = $(this).attr('data-control');
        $('#'+value).show();
        $('#'+value).siblings().hide();
    });
});
$(document).ready(function(){
    $('#denni_menu_jidelnicek_ovladani').children().on("click", function(){
        var value = $(this).attr('data-control');
        $('#'+value).show();
        $('#'+value).siblings().hide();
    });
});


$(document).ready(function(){
    $('#novesablony_ovladani').children().on("click", function(){
        var value = $(this).attr('data-control');
        $('#'+value).show();
        $('#'+value).siblings().hide();
    });
});


$(document).ready(function(){
    $(document).on("input",'input[type="range"]', function(){
        var inputValue = $(this).attr("data-id");
        var hodnota = $(this).val();
        $('#' + inputValue).css('-webkit-filter','hue-rotate('+hodnota+'deg');
    });
});

$(document).ready(function(){
    $(document).on("click",'.preset', function(){
        var ids = $(this).data("id").split(',');
        var values = $(this).data("value").split(',');
        $.each( ids, function( key, value ) {
            $('#' + value).val(values[key]);
            $('#' + value).trigger("input");
        });
    });
});

$(document).ready(function(){
    $('.bform').find('input:not([type="hidden"], [type="submit"]), textarea, select').each(function(){
        if($(this).prop('required')) {
            $(this).addClass('isRequired');
            if($(this).not(":visible")){
                $(this).prop('required', false);
            }
        }
        if($(this).is(":visible")){
            $(this).prop('disabled', false);
        } else {
            $(this).prop('disabled', true);
        }
    });

    $(document).on("change", function(){
        $('.bform').find('input:not([type="hidden"],[type="submit"]), textarea, select').each(function(){
            if($(this).is(":visible") && $(this).hasClass('isRequired')){
                $(this).prop('required', true);
            } else {
                $(this).prop('required', false);
            }
            if($(this).is(":visible")){
                $(this).prop('disabled', false);
            } else {
                $(this).prop('disabled', true);
            }
        });
    });

 $(document).trigger("change");
});

$(document).ready(function(){
    function FadeAndRemove(elm) {
        $(elm).fadeOut(8000, function() {
            $(this).remove();
        });
    }

    FadeAndRemove($('#flashForm'));

    $('#flashForm').on("mouseover", function(e) {
        $(this).stop(true).fadeIn(0);
    })

    $('#flashForm').on("mouseleave", function(e) {
        FadeAndRemove(this);
    })
});
