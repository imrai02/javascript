var btn1 = document.getElementById("btn1");
var div4 = document.getElementById("div4");
var name2 = document.getElementById("name2");
var addadd = document.getElementById("addadd");
var des = document.getElementById("des");
var types = [];
var emps = [];
var empl = (function () {
    function empl() {
    }

    empl.prototype.f1 = function () {
        div1.style.display = "block";
        div2.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        //display : block; 
    };
    empl.prototype.f2 = function () {
        div2.style.display = "block";
        div1.style.display = "none";
        div3.style.display = "none";
        div4.style.display = "none";
        var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
        var listoftypes = "";
        for (var i = 0; i < types.length; i++) {
            console.log(types[i]);
            // listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
            listoftypes += "<option value= " + i + ">" + types[i] + "</option>";
            document.getElementById("select1").innerHTML = listoftypes;
        }
        //display : block; 
    };
    empl.prototype.f3 = function () {
        div3.style.display = "block";
        div4.style.display = "none";
        div2.style.display = "none";
        div1.style.display = "none";
        //display : block; 
        var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
        var listoftypes = "";
        for (var i = 0; i < types.length; i++) {
            console.log(types[i]);
            // listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
            listoftypes += "<li id=" + types[i] + ">" + types[i] + "</li>";
            document.getElementById("listemp").innerHTML = listoftypes;
        }
        //adding default values
        var devs = [];
        var x = window.localStorage.getItem("emps");
        if (x) {
            emps = JSON.parse(x);
        }
        for (var i = 0; i < emps.length; i++) {
            if (emps[i].addtype == types[0]) {
                devs.push(emps[i].addname);
                console.log(emps[i].addname);
            }
        }
        document.getElementById("list1").innerHTML = '';
        var listoftypes = "";
        for (var i = 0; i < devs.length; i++) {
            console.log(devs[i]);
            listoftypes += "<li idx=" + devs[i] + ">" + devs[i] + "</li><br>";
            document.getElementById("list1").innerHTML = listoftypes;
        }
    };
    empl.prototype.f4 = function () {
        div4.style.display = "block";
        div3.style.display = "none";
        div2.style.display = "none";
        div1.style.display = "none";
        //display : block; 
        var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
        var listoftypes = "";
        for (var i = 0; i < types.length; i++) {
            console.log(types[i]);
            // listoftypes+="<option value= "+types[i]+">"+types[i]+"</option>";
            listoftypes += "<option value= " + i + ">" + types[i] + "</option>";
            document.getElementById("select2").innerHTML = listoftypes;
        }
    };
    return empl;
}());
var obj = new empl();
btn1.onclick = function () { obj.f1(); };
btn2.onclick = function () { obj.f2(); };
btn3.onclick = function () { obj.f3(); };
btn4.onclick = function () { obj.f4(); };
//btn1.on("click", "button", f1);
var createType = (function () {
    function createType() {
    }
    createType.prototype.f6 = function () {
        div4.style.display = "none";
        div3.style.display = "none";
        div2.style.display = "none";
        div1.style.display = "none";
        //display : block; 
    };
    createType.prototype.f5 = function () {
        //console.log(name1.value);
        var x = window.localStorage.getItem("types");
        if (x) {
            types = JSON.parse(x);
        }
        types.push(name1.value);
        window.localStorage.setItem("types", JSON.stringify(types));
        for (var i = 0; i < types.length; i++)
            console.log(types[i]);
        document.getElementById("name1").value = "";
        // document.getElementById("name1").innerHTML="";
    };
    createType.prototype.f7 = function () {
        //selectx.innerHTML
        var selectx = document.getElementById("select1").value;
        // var j=0;
        // for(var i=0;i<types.length;i++)
        // {
        //     if(types[i])
        // }
        types.splice(Number(selectx), 1);
        // console.log(selectx);
        // for(var i=0;i<types.length;i++)
        // console.log(types[i]);
        window.localStorage.setItem("types", JSON.stringify(types));
        var obj = new empl();
        obj.f2();
    };
    return createType;
}());
