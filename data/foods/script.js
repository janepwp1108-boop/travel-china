const foods = {

    duck: {
        name: "เป็ดปักกิ่ง",
        region: "ปักกิ่ง",
        image: "images/duck.jpg",
        history: "เป็ดปักกิ่งเป็นอาหารขึ้นชื่อของกรุงปักกิ่ง มีหนังกรอบและเนื้อนุ่ม นิยมรับประทานกับแผ่นแป้งและซอสหวาน",
        ingredient: "เป็ด, ต้นหอม, แป้ง, ซอสเป็ดปักกิ่ง",
      
    },
    dimsum: {
        name: "ติ่มซำ",
        region: "กวางตุ้ง",
        image: "images/dimsum.jpg",
        history: "ติ่มซำเป็นอาหารว่างสไตล์กวางตุ้งที่ได้รับความนิยมทั่วโลก",
        ingredient: "กุ้ง, หมู, แป้ง, ผัก",
    },
    xlb: {
        name: "เสี่ยวหลงเปา",
        region: "เซี่ยงไฮ้",
        image: "images/xlb.jpg",
        history: "เสี่ยวหลงเปาเป็นซาลาเปาไส้น้ำซุปที่มีชื่อเสียงของเซี่ยงไฮ้",
        ingredient: "แป้ง, หมูสับ, น้ำซุป",
     
    },

    hotpot: {
        name: "หมาล่าหม้อไฟ",
        region: "เสฉวน",
        image: "images/hotpot.jpg",
        history: "หมาล่าหม้อไฟเป็นอาหารยอดนิยมของมณฑลเสฉวน มีรสเผ็ดและชาจากพริกเสฉวน",
        ingredient: "เนื้อสัตว์, ผัก, เห็ด, พริกเสฉวน",
        
    },
    Chicken: {
        name: "ไก่ผัดพริกเสฉวน",
        region: "เสฉวน",
        image: "images/Chicken.jpg",
        history: "ตั้งชื่อตามขุนนางในสมัยราชวงศ์ชิง มีชื่อเสียงจากรสเผ็ดและหอมเครื่องเทศ",
        ingredient: "เนื้อไก่, พริกแห้ง, ถั่วลิสง, กระเทียม",
       
    },
    pork: {
        name: "หมูเปรี้ยวหวาน",
        region: "เสฉวน",
        image: "images/pork.jpg",
        history: "ตั้งชื่อตามขุนนางในสมัยราชวงศ์ชิง มีชื่อเสียงจากรสเผ็ดและหอมเครื่องเทศ",
        ingredient: "เนื้อไก่, พริกแห้ง, ถั่วลิสง, กระเทียม",
       
    },
     mapotofu: {
        name: "เต้าหู้หม่าผัว",
        region: "เสฉวน",
        image: "images/mapotofu.jpg",
        history: "มีต้นกำเนิดจากร้านอาหารเล็ก ๆ ในเฉิงตู",
        ingredient: "เต้าหู้, หมูสับ, พริกเสฉวน",
     
    },
    SpringRolls: {
        name: "ปอเปี๊ยทอด",
        region: "จีนตะวันออก",
        image: "images/Spring Rolls.jpg",
        history: "เดิมเป็นอาหารในเทศกาลฤดูใบไม้ผลิ",
        ingredient: "แผ่นแป้ง, ผัก, หมู",
       
    },
   WontonSoup: {
        name: "เกี้ยวน้ำ",
        region: "ภาคเหนือ",
        image: "images/WontonSoup.jpg",
        history: "เป็นอาหารดั้งเดิมนิยมกินในวันตรุษจีน",
        ingredient: "แป้งเกี๊ยว, หมู, กุ้ง",
        
    },
    FriedRice: {
        name: "ข้าวผัด",
        region: "ทั่วประเทศจีน",
        image: "images/Fried-Rice.jpg",
        history: "เกิดจากการนำข้าวเหลือมาปรุงใหม่",
        ingredient: "ข้าว, ไข่, ผัก",
       
    },
    ChowMein: {
        name: "บะหมี่ผัด",
        region: "ภาคเหนือ",
        image: "images/Chow Mein.jpg",
        history: "มีประวัติยาวนานกว่าพันปี",
        ingredient: "เส้นบะหมี่, ผัก, เนื้อสัตว์",
       
    },
   CharSiu: {
        name: "หมูแดง",
        region: "กวางตุ้ง",
        image: "images/Char Siu.jpg",
        history: "พัฒนาจากวิธีการย่างเนื้อแบบจีนโบราณ",
        ingredient: "หมู, น้ำผึ้ง, ซอสถั่วเหลือง"
       
    },
    RoastGoose: {
        name: "ห่านย่าง",
        region: "กวางตุ้ง",
        image: "images/Roast-Goose.jpg",
        history: "อาหารขึ้นชื่อในภัตตาคารกวางตุ้ง",
        ingredient: "ห่าน, เครื่องเทศจีน",
        
    },
    SteamedFish: {
        name: "ปลานึ่งซีอิ๊ว",
        region: "กวางตุ้ง",
        image: "images/Steamed Fish.jpg",
        history: "สะท้อนแนวคิดการรักษารสชาติธรรมชาติของวัตถุดิบ",
        ingredient: "ปลา, ซีอิ๊ว, ขิง",
        
    },
    BraisedPorkBelly: {
        name: "หมูพะโล้",
        region: "เจ้อเจียง",
        image: "images/Braised Pork Belly.jpg",
        history: "อาหารพื้นเมืองที่มีชื่อเสียงในจีนตะวันออก",
        ingredient: "หมูสามชั้น, ซีอิ๊ว, น้ำตาล",
       
    },
    EggFriedRice: {
        name: "ข้าวผัดไข่",
        region: "ทั่วประเทศจีน",
        image: "images/Egg Fried Rice.jpg",
        history: "หนึ่งในอาหารจานง่ายที่ได้รับความนิยมสูง",
        ingredient: "ข้าว, ไข่, ต้นหอม",
       
    },
    ScallionPancake: {
        name: "แพนเค้กต้นหอม",
        region: "เซี่ยงไฮ้",
        image: "images/Scallion Pancake.jpg",
        history: "อาหารว่างริมทางยอดนิยมของจีน",
        ingredient: "แป้งสาลี, ต้นหอม",
       
    },
    CenturyEggPorridge: {
        name: "โจ้กไข่เจียวม้า",
        region: "กวางตุ้ง",
        image: "images/Century Egg Porridge.jpg",
        history: "นิยมรับประทานเป็นอาหารเช้า",
        ingredient: "ข้าว, ไข่เยี่ยวม้า, หมู",
        
    },
    Mooncake: {
        name: "ขนมไหว้พระจันทร์",
        region: "เจียงซู",
        image: "images/Mooncake.jpg",
        history: "ขนมประจำเทศกาลไหว้พระจันทร์",
        ingredient: "แป้ง, ถั่วแดง, เมล็ดบัว",
        
    },
    LionHeadMeatballs: {
        name: "ลูกชิ้นหัวสิงโต",
        region: "ทั่วประเทศจีน",
        image: "images/lion.jpg",
        history: "อาหารเก่าแก่ตั้งแต่สมัยราชวงศ์สุยร์",
        ingredient: "หมูสับ, ผักกาด",
        
    }

};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id && foods[id]) {

    document.getElementById("foodName").textContent = foods[id].name;
    document.getElementById("foodRegion").textContent = foods[id].region;
    document.getElementById("foodImage").src = foods[id].image;
    document.getElementById("foodHistory").textContent = foods[id].history;
    document.getElementById("foodIngredient").textContent = foods[id].ingredient;
    

}