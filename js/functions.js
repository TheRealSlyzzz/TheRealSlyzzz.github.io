function clickOnAccountBox(){
    window.open("youtube.com","_self")
}

function openSite(id){
    switch(id){
        case "maps": window.open("html/maps.html","_self");
        break;
        case "map_overworld": window.open("../rsc/maps/overworld/overworld.html","_self");
        break;
        case "map_nether": window.open("../rsc/maps/nether/nether.html","_self");
        break;
        case "map_end": window.open("../rsc/maps/end/end.html","_self");
        break;
    }
}