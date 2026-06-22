const foods = {

    duck:{
        name:"เป็ดปักกิ่ง",
        region:"ปักกิ่ง",
        image:"images/duck.jpg",
        history:"เป็ดปักกิ่งเป็นอาหารขึ้นชื่อของกรุงปักกิ่ง มีหนังกรอบและเนื้อนุ่ม นิยมรับประทานกับแผ่นแป้งและซอสหวาน",
        ingredient:"เป็ด, ต้นหอม, แป้ง, ซอสเป็ดปักกิ่ง",
        source:"https://en.wikipedia.org/wiki/Peking_duck"
    },

    dimsum:{
        name:"ติ่มซำ",
        region:"กวางตุ้ง",
        image:"images/dimsum.jpg",
        history:"ติ่มซำเป็นอาหารว่างสไตล์กวางตุ้งที่ได้รับความนิยมทั่วโลก",
        ingredient:"กุ้ง, หมู, แป้ง, ผัก",
        source:"https://en.wikipedia.org/wiki/Dim_sum"
    },

    xlb:{
        name:"เสี่ยวหลงเปา",
        region:"เซี่ยงไฮ้",
        image:"images/xlb.jpg",
        history:"เสี่ยวหลงเปาเป็นซาลาเปาไส้น้ำซุปที่มีชื่อเสียงของเซี่ยงไฮ้",
        ingredient:"แป้ง, หมูสับ, น้ำซุป",
        source:"https://en.wikipedia.org/wiki/Xiaolongbao"
    },

    hotpot:{
        name:"หมาล่าหม้อไฟ",
        region:"เสฉวน",
        image:"images/hotpot.jpg",
        history:"หมาล่าหม้อไฟเป็นอาหารยอดนิยมของมณฑลเสฉวน มีรสเผ็ดและชาจากพริกเสฉวน",
        ingredient:"เนื้อสัตว์, ผัก, เห็ด, พริกเสฉวน",
        source:"https://en.wikipedia.org/wiki/Hot_pot"
    }

};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(id && foods[id]){

    document.getElementById("foodName").textContent = foods[id].name;
    document.getElementById("foodRegion").textContent = foods[id].region;
    document.getElementById("foodImage").src = foods[id].image;
    document.getElementById("foodHistory").textContent = foods[id].history;
    document.getElementById("foodIngredient").textContent = foods[id].ingredient;
    document.getElementById("foodSource").href = foods[id].source;

}