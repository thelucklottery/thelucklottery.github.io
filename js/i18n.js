var LANGUAGE_CODE = "en_US";

function loadProperties(type) {
    jQuery.i18n.properties({
        name: 'strings',
        path: 'assets/i18n/',
        mode: 'map',
        language: type,
        cache: false,
        encoding: 'UTF-8',
        callback: function () {
            // $('#text').html($.i18n.prop('string_text'));
            // $('#lang').html($.i18n.prop('string_lang'));
            // alert($.i18n.prop('string_text'))
            $('.text0').text($.i18n.prop('text0'));
            $('.text1').text($.i18n.prop('text1'));
            $('.text2').text($.i18n.prop('text2'));
            $('.text3').text($.i18n.prop('text3'));
            // $('.text4').text($.i18n.prop('text4'));
            $('.text5').text($.i18n.prop('text5'));
            $('.text6').text($.i18n.prop('text6'));
            $('.text7').text($.i18n.prop('text7'));
            $('.text8').text($.i18n.prop('text8'));
            $('.text9').text($.i18n.prop('text9'));
            $('.text10').text($.i18n.prop('text10'));
            $('.text11').text($.i18n.prop('text11'));
            $('.text12').text($.i18n.prop('text12'));
            $('.text13').text($.i18n.prop('text13'));
            $('.text14').text($.i18n.prop('text14'));
            $('.text15').text($.i18n.prop('text15'));
            $('.text16').text($.i18n.prop('text16'));
            $('.text17').text($.i18n.prop('text17'));
            $('.text18').text($.i18n.prop('text18'));
            $('.text19').text($.i18n.prop('text19'));
            $('.text20').text($.i18n.prop('text20'));
            $('.text21').text($.i18n.prop('text21'));
            $('.text22').text($.i18n.prop('text22'));
            $('.text23').text($.i18n.prop('text23'));
            $('.text24').text($.i18n.prop('text24'));
            $('.text25').text($.i18n.prop('text25'));
            $('.text26').text($.i18n.prop('text26'));
            $('.text27').text($.i18n.prop('text27'));
            $('.text28').text($.i18n.prop('text28'));
            $('.text29').text($.i18n.prop('text29'));
            $('.text30').text($.i18n.prop('text30'));
            $('.text31').text($.i18n.prop('text31'));
            $('.text32').text($.i18n.prop('text32'));
            $('.text33').text($.i18n.prop('text33'));
            $('.text34').text($.i18n.prop('text34'));
            $('.text35').text($.i18n.prop('text35'));
            $('.text36').text($.i18n.prop('text36'));
            $('.text37').text($.i18n.prop('text37'));
            $('.text38').text($.i18n.prop('text38'));
            $('.text39').text($.i18n.prop('text39'));
            $('.text40').text($.i18n.prop('text40'));
            $('.text41').text($.i18n.prop('text41'));
            $('.text42').text($.i18n.prop('text42'));
            $('.text43').text($.i18n.prop('text43'));
            $('.text44').text($.i18n.prop('text44'));
            $('.text45').text($.i18n.prop('text45'));
            $('.text46').text($.i18n.prop('text46'));
            $('.text47').text($.i18n.prop('text47'));
            $('.text48').text($.i18n.prop('text48'));
            $('.text49').text($.i18n.prop('text49'));
            $('.text50').text($.i18n.prop('text50'));
            $('.text51').text($.i18n.prop('text51'));
            $('.text52').text($.i18n.prop('text52'));
            $('.text53').text($.i18n.prop('text53'));
            $('.text54').text($.i18n.prop('text54'));
        }
    });
}

function switchLang() {
    LANGUAGE_CODE = LANGUAGE_CODE == 'zh_CN' ? 'en_US' : 'zh_CN';
    loadProperties(LANGUAGE_CODE);
    sessionStorage.setItem("LANG_CODE", LANGUAGE_CODE);
}

$(document).ready(function () {
    LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({});
    let LANG_CODE = sessionStorage.getItem("LANG_CODE");
    if(LANG_CODE == undefined || LANG_CODE == null || LANG_CODE == ''){
        LANGUAGE_CODE = 'en_US';
    }else{
        LANGUAGE_CODE = LANG_CODE;
    }
    loadProperties(LANGUAGE_CODE);
})