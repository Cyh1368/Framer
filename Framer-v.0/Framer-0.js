var queue="";
function appendQueue(){
  console.log("appendQueue")
  
  var i, k;
  var ans = [];
  var folder = []
  for (i=0; i<9; i++){
    ans = []
    for(k=0; k<16; k++){
      if (document.getElementById("box"+i+"-"+k).style.background=="black"){
        ans[k]=1
      } else{
        ans[k]=0
      }
    }
    if (i<8){
      ans = "["+ans+"],";
    } else {
      ans = "["+ans+"]"
    }
    folder+=ans;
  }
  queue=queue+"["+folder+"],"
  alert("Queued")
  console.log(folder)
}
function copyQueue(){
  console.log("copyQueue")
  document.getElementById("queueOutput").value=queue;
  var copyText = document.getElementById("queueOutput");
  copyText.select();
  document.execCommand("copy");
  alert("Copied the text: "+copyText.value);
}
function changeBgColor(id){
  if (document.getElementById(id).style.background=="black"){
    document.getElementById(id).style.background = "#e3e3e3";
  } else {
  document.getElementById(id).style.background = "black";}
}

function applyGaps(){
  len = document.getElementsByClassName("box").length;
  var i;
  for (i=0; i<len; i++){
    document.getElementsByClassName("box")[i].style.margin = document.getElementById("gapApplyTextarea").value
  }
}

function clearAll(){
  len = document.getElementsByClassName("box").length;
  var i;
  for (i=0; i<len; i++){
    document.getElementsByClassName("box")[i].style.background = "#e3e3e3"
  }
}
function colorAll(){
  len = document.getElementsByClassName("box").length;
  var i;
  for (i=0; i<len; i++){
    document.getElementsByClassName("box")[i].style.background = "black";
  }
}



function frame(){
  console.log("frame")
  
  var i, k;
  var ans = [];
  var folder = []
  for (i=0; i<9; i++){
    ans = []
    for(k=0; k<16; k++){
      if (document.getElementById("box"+i+"-"+k).style.background=="black"){
        ans[k]=1
      } else{
        ans[k]=0
      }
    }
    if (i<8){
      ans = "["+ans+"],";
    } else {
      ans = "["+ans+"]"
    }
    folder+=ans;
  }
  document.getElementById("frameOutput").value=folder
  
  var copyText = document.getElementById("frameOutput");
  copyText.value = "["+copyText.value+"]";
  copyText.select()
  document.execCommand("copy")
  alert("Copied the text: "+copyText.value)
}
function moveToLeft(){
  len = document.getElementsByClassName("box").length;
  var i;
  for (i=1; i<len; i++){
    if (document.getElementsByClassName("box")[i].style.background == "black"){
      document.getElementsByClassName("box")[i-1].style.background = "black"
      document.getElementsByClassName("box")[i].style.background = "#e3e3e3"
    }
  }
}

function moveToRight(){
  len = document.getElementsByClassName("box").length;
  var i;
  for (i=len-1; i>=0; i--){
    if (document.getElementsByClassName("box")[i].style.background == "black"){
      document.getElementsByClassName("box")[i+1].style.background = "black"
      document.getElementsByClassName("box")[i].style.background = "#e3e3e3"
    }
  }
}

function toggle(){
  len = document.getElementsByClassName("box").length;
  var i;
  for (i=0; i<len; i++){
    if (document.getElementsByClassName("box")[i].style.background == "black"){
      document.getElementsByClassName("box")[i].style.background = "#e3e3e3"
    } else {
      document.getElementsByClassName("box")[i].style.background = "black"
    }
  }
}
