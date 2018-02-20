var VERGAL = VERGAL || {};
VERGAL.body_top = 0;
VERGAL.loading = document.getElementById("VERGALloading");
VERGAL.box = document.getElementById("VERGALbox");

VERGAL.close = document.getElementById("closeVERGAL");
VERGAL.close.addEventListener("click",function(){
  VERGAL.clear();
},false);

VERGAL.gallry_set = document.getElementsByClassName("vertical-gallery");
Array.prototype.forEach.call(VERGAL.gallry_set,function(el_g){
  Array.prototype.forEach.call(el_g.children,function(el_f){
    el_f.addEventListener("click",function(){
      VERGAL.disp(el_f);
    },false);
  });
});

VERGAL.disp = function(el_f){
  VERGAL.keepbody();
  VERGAL.box.style.display = "block";
  VERGAL.loading.style.display = "block";
  var now_gallery = el_f.parentNode;
  var el_top;
  var img_loaded = 0;
  var img_count = 0;
  
  Array.prototype.forEach.call(now_gallery.children,function(el_fs){
    if(el_fs.getElementsByTagName("img")[0].dataset.tagname == "img"){
      img_count++; 
    }
  });
  
  Array.prototype.forEach.call(now_gallery.children,function(el_fs){
    var addnode = document.createElement("figure");
    var el_main = el_fs.getElementsByTagName("img")[0];
    var content = document.createElement(el_main.dataset.tagname);
    switch(el_main.dataset.tagname){
      case "img":
        content.addEventListener("load",function(){
          img_load();
        },false);
        content.addEventListener("error",function(){
          img_load();
        },false);
        content.setAttribute("src",el_main.dataset.href);
        content.setAttribute("alt",el_main.alt);
        break;
      default:
        break;
    }
    addnode.appendChild(content);
    var el_fcap = el_fs.getElementsByTagName("figcaption")[0];
    if(el_fcap != undefined){
      var fig_cap = document.createElement("figcaption");
      fig_cap.appendChild(document.createTextNode(el_fcap.textContent));
      addnode.appendChild(fig_cap);
    }
    VERGAL.box.insertBefore(addnode, VERGAL.close);
    if(el_f == el_fs){
      el_top = addnode;
    }
  });

  function img_load(){
    img_loaded++;
    if(img_loaded == img_count){
      VERGAL.loading.style.display = "none";
      el_top.scrollIntoView();
    }
  }

};

VERGAL.clear = function(){
  var nl = VERGAL.box.getElementsByTagName("figure");
  for(var i=nl.length-1;i>=0;i--){
    nl[i].parentNode.removeChild(nl[i]);
  }
  VERGAL.box.style.display = "none";
  VERGAL.loading.style.display = "none";
  VERGAL.relesebody();
};

VERGAL.keepbody = function(){
  VERGAL.body_top = 
    (window.pageYOffset !== undefined) ? window.pageYOffset : 
    (document.documentElement || document.body.parentNode || document.body).scrollTop;
  document.body.classList.add("VERGALbody");
}

VERGAL.relesebody = function(){
  document.body.classList.remove("VERGALbody");
  scrollTo(0,VERGAL.body_top);
}

window.addEventListener("load",function(){
  var img = new Image();
  img.src = "../img/nowloading.gif";
},false);