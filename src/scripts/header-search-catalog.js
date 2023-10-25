 
// поиск результат при вводе 
function gid(a_id) {
	return document.getElementById (a_id)	;
}

function close_all(){// hide all divs
    var o_res = gid("search-result");
    
    for (i=0;i<7; i++) {// to simplify the story I have here the hardcoded number of elements. In real life make it better.
        var o = gid("user_"+i);
        if (o) { //just to make sure this object really exists
            o.style.display = "none";
        }
    }
    o_res.style.display = "none";
    overlay.classList.remove("show")
}

function find_my_div(){ // find and show
close_all(); // close previous searhc results

var o_res = gid("search-result");
var overlay = gid("overlay");
var str_needle = edit_search.value;
str_needle = str_needle.toUpperCase();


if (str_needle != "") {// we will not search for empty strings
    for (i=0;i<7; i++) {
    var o = gid("user_"+i);
    if (o) { //just to make sure this object really exists
        // we want case insensitive search, so bring the both parts to upper case and compare
        var str_haystack = o.innerHTML.toUpperCase();
        if (str_haystack.indexOf(str_needle) ==-1) {
            // not found, do nothing
        }
        else{
            // yes, we got it, show it

            o.style.display = "flex";
            o_res.style.display = "block";
            overlay.classList.add("show")
            }	
        }
    }
}

}

  