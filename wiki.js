let searchInput=document.getElementById("searchInput");
let d_div=document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");
function create(res){
    let {title,link,description}=res;
    let sm_div=document.createElement("div");
   sm_div.classList.add("result-item");
    let t=document.createElement("a");
    t.classList.add("result-title");
    t.href=link;
    t.target="_blank";
    t.textContent=title;
    sm_div.appendChild(t);
    let b=document.createElement("br");
    sm_div.appendChild(b);
    let ul=document.createElement("a");
    ul.classList.add("result-url");
    ul.href=link;
    ul.target="_blank";
    ul.textContent=link;
    sm_div.appendChild(ul);
    let br=document.createElement("br");
    sm_div.appendChild(br);
    let des=document.createElement("p");
    des.classList.add("link-description");
    des.textContent=description;
    sm_div.appendChild(des);
    d_div.appendChild(sm_div);
}
function displayResults(result){
    spinnerEl.classList.add("d-none");
    for(let res of result){
    create(res);
    }
}
function searchWiki(event){
 if(event.key==="Enter"){
     d_div.textContent="";
    spinnerEl.classList.remove("d-none"); 
     let schIp=searchInput.value;
 let url="https://apis.ccbp.in/wiki-search?search="+schIp;
let option={
    method:"GET"
};
fetch(url,option)
.then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        let { search_results } = jsonData;
        displayResults(search_results);
      });
}
}
searchInput.addEventListener("keydown",searchWiki);