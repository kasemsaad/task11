var myHttp=new XMLHttpRequest()
var apicontainer;
myHttp.open('GET','https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=90ca55dd74134e2ea79e42d805a0118d')
myHttp.send()
myHttp.addEventListener('readystatechange',function(){
   if(myHttp.readyState == 4){
      var myres=JSON.parse(myHttp.response)
      apicontainer=myres.articles
      
      display()
   }
})
function display(){
var box=``;
for(var i=0;i<apicontainer.length;i++){      
   if(apicontainer[i].title!==null&&apicontainer[i].description!==null&&apicontainer[i].urlToImage!==null){
      box+=`
      <div class="col-md-4 pt-3 ">
      <div class="post shadow h-100  ">
      <img class"w-25 " src="${apicontainer[i].urlToImage}" alt="">
      <h3>${apicontainer[i].title}</h3>
      <p>${apicontainer[i].description}</p>
      <a class="btn" href="${apicontainer[i].url}">المزيد...</a>
      </div>
      </div>`

      document.getElementById('showdata').innerHTML=box;
   }
   else{
     
   }
 
   // apicontainer[i].description===null?apicontainer[i].description="":apicontainer[i].description=apicontainer[i].description;
   // apicontainer[i].urlToImage===null?apicontainer[i].urlToImage="":apicontainer[i].urlToImage=apicontainer[i].urlToImage;

}
}

