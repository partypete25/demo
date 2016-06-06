function getMonths(x) {
    var months;
    var language = x;
    switch(language) {
        case "af":
            months = 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_');
            break;
        case "ar":
            months = 'كانون الثاني يناير_شباط فبراير_آذار مارس_نيسان أبريل__أيار مايو_حزيران يونيو_تموز يوليو_آب أغسطس_أيلول سبتمبر_تشرين الأول أكتوبر_تشرين الثاني نوفمبر_كانون الأول ديسمبر'.split('_');
            break;
        case "ar-ma":
            months = 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_');
            break;
        case "ar-sa":
            months = 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_');
            break;
        case "ar-tn":
            months = 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_');
            break;
        case "az":
            months = 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_');
            break;
        case "be":
            months = 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_');
            break;
        case "bg":
            months = 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_');
            break;
        case "bn":
            months = 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_');
            break;
        case "bo":
            months = 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_');
            break;
        case "br":
            months = 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_');
            break;
        case "bs":
            months = 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_');
            break;
        case "ca":
            months = 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_');
            break;
        case "cs":
            months = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
            break;
        case "cv":
            months = 'кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш'.split('_');
            break;
        case "cy":
            months = 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_');
            break;
        case "da":
            months = 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_');
            break;
        case "de":
            months = 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_');
            break;
        case "de-at":
            months = 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_');
            break;
        case "el":
            months = 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_');
            break;
        case "en-au":
            months = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
            break;
        case "en-ca":
            months = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
            break;
        case "en-gb":
            months = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
            break;
        case "eo":
            months = 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_');
            break;
        case "es":
            months = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
            break;
        case "et":
            months = 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_');
            break;
        case "eu":
            months = 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_');
            break;
        case "fa":
            months = 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_');
            break;
        case "fi":
            months = 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_');
            break;
        case "fo":
            months = 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');
            break;
        case "fr":
            months = 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_');
            break;
        case "fr-ca":
            months = 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_');
            break;
        case "fy":
            months = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_');
            break;
        case "gl":
            months = 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_');
            break;
        case "he":
            months = 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_');
            break;
        case "hi":
            months = ''.split('_');
            break;
        case "hr":
            months = ''.split('_');
            break;
        case "hu":
            months = ''.split('_');
            break;
        case "hy-am":
            months = ''.split('_');
            break;
        case "id":
            months = ''.split('_');
            break;
        case "is":
            months = ''.split('_');
            break;
        case "it":
            months = ''.split('_');
            break;
        case "ja":
            months = ''.split('_');
            break;
        case "ka":
            months = ''.split('_');
            break;
        case "km":
            months = ''.split('_');
            break;
        case "ko":
            months = ''.split('_');
            break;
        case "lb":
            months = ''.split('_');
            break;
        case "lt":
            months = ''.split('_');
            break;
        case "lv":
            months = ''.split('_');
            break;
        case "mk":
            months = ''.split('_');
            break;
        case "ml":
            months = ''.split('_');
            break;
        case "mr":
            months = ''.split('_');
            break;
        case "ms-my":
            months = ''.split('_');
            break;
        case "my":
            months = ''.split('_');
            break;
        case "nb":
            months = ''.split('_');
            break;
        case "ne":
            months = ''.split('_');
            break;
        case "nl":
            months = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
            break;
        case "nn":
            months = ''.split('_');
            break;
        case "pl":
            months = ''.split('_');
            break;
        case "pt":
            months = ''.split('_');
            break;
        case "pt-br":
            months = ''.split('_');
            break;
        case "ro":
            months = ''.split('_');
            break;
        case "ru":
            months = 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_');
            break;
        case "sk":
            months = ''.split('_');
            break;
        case "sl":
            months = ''.split('_');
            break;
        case "sq":
            months = ''.split('_');
            break;
        case "sr":
            months = ''.split('_');
            break;
        case "sr-cyrl":
            months = ''.split('_');
            break;
        case "sv":
            months = ''.split('_');
            break;
        case "ta":
            months = ''.split('_');
            break;
        case "th":
            months = ''.split('_');
            break;
        case "tl-ph":
            months = ''.split('_');
            break;
        case "tr":
            months = ''.split('_');
            break;
        case "tzm":
            months = ''.split('_');
            break;
        case "tzm-latn":
            months = ''.split('_');
            break;
        case "uk":
            months = ''.split('_');
            break;
        case "uz":
            months = ''.split('_');
            break;
        case "vi":
            months = ''.split('_');
            break;
        case "zh-cn":
            months = ''.split('_');
            break;
        case "zh-tw":
            months = ''.split('_');
            break;
    }
    return months;
}
