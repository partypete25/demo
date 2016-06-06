 function getMonths(x) {
  var months;
  var language = x;
  switch(language) {
    case "af":
      months = 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_');
      break;   
    case "ar":
      
      break;
    case "ar":
      months = 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_');
      break;
    case "ru":
      months = 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_');
      break;
    case "nl":
      months = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
      break;
  }
  return months;
 }
