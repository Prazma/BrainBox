//BrainBox JS/PHP framework by Tomoyoshi Yamamoto. Under MIT License.
var bb = {
  fetch : function (q) {
    aiAnswer.innerHTML = "loading...";
    var qVerify = 0;
    for(i=0;i<q.split(" ").length;i++){
      if(bbDict.quest.indexOf(q.split(" ")[i].toLowerCase())!=-1){
        qVerify = 1;
      }
    }
    if(qVerify == 1){
      this.crawl(q);
    } else {
      aiAnswer.innerHTML = "Is that a question?";
    }
  },
  crawl : function (askey) {
    $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://answers.search.yahoo.com/search?fr=uh3_answers_vert_gs&type=2button&p=' + askey) + '&callback=?', function(data){
      var prevCode = data.contents.split('<ol class=" reg searchCenterMiddle">');
      var prod = prevCode[1].split('<li   class="first"><div class="dd algo fst AnswrsV2"><div class="compTitle"><h3 class="title"><a class=" lh-17 fz-m" href="')[1];
      var link = prod.split('" target="_blank">')[0];
      getAnswer(link);
    });
  }
}

function getAnswer(link) {
  $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent(link) + '&callback=?', function(data){
    var prevData = data.contents.split('<span itemprop="text" class="ya-q-full-text">')[1];
    var cropData = prevData.split("</span>")[0];
    aiAnswer.innerHTML = "<strong>Here is what I can say from the information I got from the internet.</strong><br>" + cropData;
  });
}
