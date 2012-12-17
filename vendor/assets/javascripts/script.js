//ACTIONS WITH CLASSES
$(document).ready(function(){
    var clas = {
        add: function(element, name) {
            var has = clas.has(element, name);
            if (has != undefined && element != undefined) {
                if (typeof has != "boolean") {
                    for (var i = 0; i < element.length; i++) {
                        if (element[i] != undefined && !has[i]) {
                            element[i].className += " " + name;
                        }
                        console.log(element[i].className);
                    }
                } else if (!has) element.className += " " + name;
            }
        },
        del: function(element, name) {
            var exp = new RegExp("(?:^|\\s)" + name + "(?!\\S)", "g");
            if (element != undefined) {
                if (element.length != undefined) {
                    for (var i = 0; i < element.length; i++)
                    if (element[i] != undefined) element[i].className = element[i].className.replace(exp, '');
                } else element.className = element.className.replace(exp, '');
            }
        },
        has: function(element, cls) {
            var r = new RegExp('\\b' + cls + '\\b'),
                arr = [];
            if (element != undefined) {
                if (element.length != undefined) {
                    for (var i = 0; i < element.length; i++) {
                        arr.push(r.test(element[i].className));
                    }
                    return arr;
                } else {
                    return r.test(element.className);
                }
            }

        }
    };
    //END ACTIONS WITH CLASSES

    //SHOW || HIDE AUTHBLOCK
    if ($('#authorization').length > 0) {
        document.getElementById("authorization").addEventListener("click", function(){
            var authBlock = document.getElementById("authBlock"),
            display = authBlock.style.display,
            overlay = document.createElement("div");
            overlay.className = "overlay";
            overlay.addEventListener("click",function(){
                var elm = document.getElementsByClassName("overlay")[0];
                elm.parentNode.removeChild(elm);
                authBlock.style.display = "none";
            });
            if(display=="none"||display==""){
                authBlock.style.display = "block";
                document.body.appendChild(overlay);
            }
        });
    }
    //END SHOW || HIDE AUTHBLOCK


//    //ADD ERROR CLASS TO AUTHBLOCK
//    document.getElementById("auth").addEventListener("click", function(){
//        var authBlock = document.getElementById("authBlock");
//        if(clas.has(authBlock, "error")) clas.del(authBlock, "error")
//        else clas.add(authBlock, "error");
//    });
//    //END ADD ERROR CLASS TO AUTHBLOCK

    //CLOSE POPUPS
    function closePop(elm){
        document.getElementById(elm).style.display = "none";
        var overlay = document.getElementsByClassName("overlay")[0];
        overlay.parentNode.removeChild(overlay);
    }
    //END CLOSE POPUPS

    //SHOW/HIDE REPORT WINDOW
    document.getElementById("report").addEventListener("click", function(){
        var repContent = document.getElementById("reportContent"),
        display = repContent.style.display,
        overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.addEventListener("click",function(){
            var elm = document.getElementsByClassName("overlay")[0];
            elm.parentNode.removeChild(elm);
            repContent.style.display = "none";
        });
        if(display=="none"||display==""){
            repContent.style.display = "block";
            document.body.appendChild(overlay);
        }
    });
    //END SHOW/HIDE REPORT WINDOW


    //REMOVE DEFAULT EVENTS FROM ELM
    var elms = document.getElementsByClassName("default"),
    length = elms.length;
    for(var i=0;i<length;i++){elms[i].href = "javascript:void(0)"}
    //END REMOVE DEFAULT EVENTS FROM ELM


    //SHOW || HIDE ACTIONS BLOCK
    if ($('#actions').length > 0) {
        document.getElementById("actions").addEventListener("click", function(){
            console.log();
            var actionsBl = document.getElementById("actionBlock"),
            display = actionsBl.style.display;
            if(display=="none"||display=="") actionsBl.style.display = "block"
            else actionsBl.style.display = "none";
        });
    }
    //END SHOW || HIDE ACTIONS BLOCK

    $(function(){
        //PLACEHOLDER
        $('#contentino:not([data-info=registration]) input[placeholder]:not(.big), #contentino:not([data-info=registration]) textarea[placeholder]').placeholder({ color: '#9b9b9b' });
        $("#authBlock input[placeholder]").placeholder({
            color: "#9b9b9b",
            placeholderCSS: {
                "top": "4px",
                "position": "absolute",
                "left": "4px"
            }
        });
        $("#contentino[data-info=registration] input[placeholder]").placeholder({
            color: "#9b9b9b",
            placeholderCSS: {
                "top": "2px",
                "position": "absolute",
                "left": "15px"
            }
        });
        $("#contentino input.big[placeholder]").placeholder({
            color: "#9b9b9b",
            placeholderCSS: {
                "top": "12px",
                "position": "absolute",
                "left": "4px",
                "font-size":"16px"
            }
        });
        //END PLACEHOLDER

        //SHOW/HIDE INPUTS IN HANDBOOK/NEWS/USERS
        $(".filters .add i").live("click", function(e){
            $(this).parent().next(".added").addClass("add");
        });
        $(".filters .added span").live("click", function(e){
            $(this).parent().removeClass("add");
        });
        //END SHOW/HIDE INPUTS IN HANDBOOK/NEWS/USERS

        //SHOW/HIDE PHONE INPUTS IN RESTAURANT_EDIT
        $("div[data-class='phones'] .add i").live("click", function(e){
            var isAdd = this.className=="addInpt";
            if(isAdd) $(this).parent().next(".added").addClass("add");
            else $(this).parent().removeClass("add");
        });
        //END SHOW/HIDE PHONE INPUTS IN RESTAURANT_EDIT

        //ADD ACTIVE CLASS TO SERVICE ICONS
        $("div[data-class='services'] .right div i").click(function(){$(this).toggleClass("active")});
        //END ADD ACTIVE CLASS TO SERVICE ICONS

        //SHOW TEXTAREA IN TRADE_EDIT
        $('.edit div[data-class="road"] a').click(function(e){
            e.preventDefault();
            var txt = $(this).parent().find("textarea");
            txt.toggleClass("show");
            if(txt.hasClass("show")) $(this).parents().filter(".last").css("padding-bottom","55px");
            else $(this).parents().filter(".last").css("padding-bottom","0");
        });
        //END SHOW TEXTAREA IN TRADE_EDIT

        //CLICK TO LIST IN RIGHT PART
        var curr = 1;
        $(".actionList .arrows a").click(function(e){
            e.preventDefault();
            var top = $(this).hasClass("top"),
            container = $(".actionList").find("ul"),
            length = container.find("li").length,
            height = 268;
            /*
            if(top){
                if(curr<length){
                    $(".actionList").find("ul .first").css({marginTop: -height*curr});
                    curr++;
                }
            } else {
                if(curr>=1){
                    var mt = parseFloat($(".actionList").find("ul .first").css("margin-top"));
                    console.log(mt-height*curr);
                    $(".actionList").find("ul .first").css({marginTop: -mt-height*curr});
                    curr--;
                }
            }
            */

        });
        //END CLICK TO LIST IN RIGHT PART

        //ADDING NEW ELEMENT IN FILTERS(*_search.html)
        $(".filterPop li").live("click", function(){
            var id = $(this).parents().filter(".filterPop").attr("id"),
            obj = $(this).clone().addClass("active clone"),
            wrap = $("div[data-id="+id+"]").find("ul");

            wrap.prepend(obj);
            closePop(id);
        });

        $(".clone i").live("click", function(){
            $(this).parent().remove();
        });
        //END ADDING NEW ELEMENT IN FILTERS(*_search.html)
    });
});