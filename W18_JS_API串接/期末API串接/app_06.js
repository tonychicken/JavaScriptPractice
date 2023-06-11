import presentAnimals from "./src/presentAnimals_06.js";

import './src/searchForm_06.js';

import { LOCAL_URL,hasNetwork,serchItems } from "./api/search/config_06.js";


debugger
const URL ='https://data.coa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=25';

    function mbar(sobj) {
    var docurl =sobj.options[sobj.selectedIndex].value;
    if (docurl != "") {
    open(docurl,'_blank');
    sobj.selectedIndex=0;
    sobj.blur();
    }
    }
window.addEventListener('DOMContentLoaded',()=>{
    if(hasNetwork){
        presentAnimals(URL);
        console.log('Online',URL);
    }else{
        presentAnimals(LOCAL_URL);
        console.log('config_06.js',{LOCAL_URL,hasNetwork,serchItems})
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var animalDropdown = document.getElementById('animalDropdown');
    var defaultOption = ''; // 设置默认值为5
    var optionValues = ["",5, 10, 15, 20,25,30,35,40,45,50]; // 设置选项的值

    // 动态生成选项
    for (var i = 0; i < optionValues.length; i++) {
      var option = document.createElement('option');
      option.value = optionValues[i];
      option.textContent = optionValues[i];
      animalDropdown.appendChild(option);
    }

    // 设置默认选中的选项
    for (var j = 0; j < animalDropdown.options.length; j++) {
      if (animalDropdown.options[j].value === defaultOption) {
        animalDropdown.options[j].selected = true;
        break;
      }
    }
  });


  document.addEventListener('DOMContentLoaded', function() {
    var ddlShelter = document.getElementById('ddlShelter');
    var defaultOption = ''; // 设置默认值为5
    var optionValues = ["","新北市政府動物保護防疫處", "新北市新店區公立動物之家", "新北市板橋區公立動物之家", "新北市中和區公立動物之家", "新北市淡水區公立動物之家", "新北市瑞芳區公立動物之家", "新北市五股區公立動物之家", "新北市八里區公立動物之家", "新北市三芝區公立動物之家", "宜蘭縣流浪動物中途之家", "桃園市動物保護教育園區", "新竹縣公立動物收容所", "苗栗縣生態保育教育中心(動物收容所)", "臺中市動物之家南屯園區", "臺中市動物之家后里園區", "彰化縣流浪狗中途之家", "南投縣公立動物收容所", "雲林縣流浪動物收容所", "嘉義縣流浪犬中途之家", "高雄市壽山動物保護教育園區", "高雄市燕巢動物保護關愛園區", "屏東縣公立犬貓中途之家", "臺東縣動物收容中心", "花蓮縣狗貓躍動園區", "澎湖縣流浪動物收容中心", "基隆市寵物銀行", "新竹市動物保護教育園區", "嘉義市動物保護教育園區", "臺南市動物之家灣裡站", "臺南市動物之家善化站", "臺北市動物之家", "連江縣流浪犬收容中心", "金門縣動物收容中心"];


    // 动态生成选项
    for (var i = 0; i < optionValues.length; i++) {
      var option = document.createElement('option');
      option.value = optionValues[i];
      option.textContent = optionValues[i];
      ddlShelter.appendChild(option);
    }

    // 设置默认选中的选项
    for (var j = 0; j < ddlShelter.options.length; j++) {
      if (ddlShelter.options[j].value === defaultOption) {
        ddlShelter.options[j].selected = true;
        break;
      }
    }
  });

  
  document.addEventListener('DOMContentLoaded', function() {
    var animalchange = document.getElementById('animalchange');
    var defaultOption = ''; // 设置默认值为5
    var optionValues = ["","狗", "貓", "其他"];


    // 动态生成选项
    for (var i = 0; i < optionValues.length; i++) {
      var option = document.createElement('option');
      option.value = optionValues[i];
      option.textContent = optionValues[i];
      animalchange.appendChild(option);
    }

    // 设置默认选中的选项
    for (var j = 0; j < animalchange.options.length; j++) {
      if (animalchange.options[j].value === defaultOption) {
        animalchange.options[j].selected = true;
        break;
      }
    }
  });
