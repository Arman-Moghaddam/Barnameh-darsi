let name_c = ""
let time_c = ""
function create_item(name_class="", time_class="",link_class=""){
    let new_list = document.getElementById("list")
    let new_list_item = document.createElement("li")
    let new_div = document.createElement("div")
    let new_h3 = document.createElement("h3")
    let new_p = document.createElement("p")
    let new_a = document.createElement("a")
    new_div.setAttribute("class", "box")
    new_h3.setAttribute("class", "time-class")
    new_a.setAttribute("href", link_class)
    new_p.setAttribute("class", "name-class")
    new_a.setAttribute("class", "link-class")
    new_div.append(new_h3)
    new_div.append(new_p)
    new_div.append(new_a)
    new_list_item.append(new_div)
    new_list.append(new_list_item)
    new_a.innerHTML = "برای ورود به کلاس کلیک کنید"
    new_h3.innerHTML = time_class
    new_p.innerHTML = name_class
}


function reset_plan(){
    let new_list = document.getElementById("list")
    new_list.innerHTML = null
}


function tdays(day){
    if (day == 1){
        reset_plan()
        name_c = "شبکه های کامپیوتری"
        time_c = "8-10"
        create_item(name_c, time_c)
        name_c = "تحلیل طراحی سیستم"
        time_c = "10-12 زوج"
        create_item(name_c, time_c)
        name_c = "طراحی کامپایلر"
        time_c = "10-12 فرد"
        create_item(name_c, time_c)
        name_c = "آزمایشگاه سیستم عامل"
        time_c = "13-15"
        create_item(name_c, time_c)
    } else if (day == 2){
        reset_plan()
        name_c = "تحلیل طراحی سیستم"
        time_c = "8-10"
        create_item(name_c, time_c)
        name_c = "طراحی کامپایلر"
        time_c = "10-12"
        create_item(name_c, time_c)
        name_c = "آزمایشگاه شبکه"
        time_c = "13-15"
        create_item(name_c, time_c)
    } else if (day == 3){
        reset_plan()
        time_c = "10-12 فرد"
        name_c = "شبکه های کامپیوتری"
        create_item(name_c, time_c)
        time_c = "10-12 زوج"
        name_c = "هوش مصنوعی"
        create_item(name_c, time_c)
        time_c = "14-16"
        name_c = "هوش مصنوعی"
        create_item(name_c, time_c)
        time_c = "16-18"
        name_c = "جبر خطی"
        create_item(name_c, time_c)
    }  else if (day == 4){
        reset_plan()
        time_c = "10-12 زوج"
        name_c = "جبر خطی"
        create_item(name_c, time_c)
        time_c = "13-15"
        name_c = "انقلاب اسلامی"
        create_item(name_c, time_c)
        time_c = "15-17"
        name_c = "آز مدار الکتریکی"
        create_item(name_c, time_c)
    }  else if (day == 5){
        reset_plan()
    }  else if (day == 6){
        reset_plan()
    }  else if (day == 7){
        reset_plan()
    }
}