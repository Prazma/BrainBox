//BrainBox JS/PHP framework by Tomoyoshi Yamamoto. Under MIT License.
var bb = {
  fetch : function (q) {
    var qPattern = [];
    for(i=0;i<q.split(" ").length;i++){
      if(bbDict.quest.indexOf(q.split(" ")[i].toLowerCase())!=-1){
        qPattern.push(1);
      } else if(bbDict.connect.indexOf(q.split(" ")[i].toLowerCase())!=-1){
        qPattern.push(2);
      } else if(bbDict.replace.indexOf(q.split(" ")[i].toLowerCase())!=-1){
        qPattern.push(3);
      } else if(bbDict.position.indexOf(q.split(" ")[i].toLowerCase())!=-1){
        qPattern.push(4);
      } else if(bbDict.time.indexOf(q.split(" ")[i].toLowerCase())!=-1){
        qPattern.push(5);
      } else if(bbDict.where.indexOf(q.split(" ")[i].toLowerCase())!=-1){
        qPattern.push(6);
      } else if(bbDict.greetings.indexOf(q.split(" ")[i].toLowerCase())!=-1){
        qPattern.push(7);
      } else if (bbDict.quest.indexOf(q.split(" ")[i].toLowerCase())==-1&&bbDict.connect.indexOf(q.split(" ")[i].toLowerCase())==-1&&bbDict.replace.indexOf(q.split(" ")[i].toLowerCase())==-1&&bbDict.position.indexOf(q.split(" ")[i].toLowerCase())==-1&&bbDict.time.indexOf(q.split(" ")[i].toLowerCase())==-1&&bbDict.where.indexOf(q.split(" ")[i].toLowerCase())==-1&&bbDict.greetings.indexOf(q.split(" ")[i].toLowerCase())==-1) {
        qPattern.push(0);
      }
    }
    var tokens = q.split(" ");
    userAsk.value = "";
    var network = this.getNetwork(qPattern);
    console.log("token are : " + tokens + ", qPattern is : " + qPattern);
  },
  getNetwork : function (qPattern) {
    //code pattern to network converter here
    /*0 is undefined. 1 = math, 2 = how to, 3 = what is*/
    var qType = 0;
  },
  crawl : function (theUrl) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    } xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        return xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", theUrl, false );
    xmlhttp.send();
  }
}
