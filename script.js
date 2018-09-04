var input = document.getElementById("item");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("add").click();
    }
});
document.getElementById('add').addEventListener('click',function(){
    var value1=document.getElementById('item').value;
    if(value1)  additem(value1);
});
    function additem(text){
    /*var list=document.getElementById("todo");*/
    var ele= document.createElement('li');
    var t = document.createTextNode(text);
    ele.appendChild(t);
    /*document.getElementById("addto").appendChild(ele);*/
    if (text ===' ') {
        alert("You must write something!");
      } else {
        document.getElementById("addto").appendChild(ele);
        document.getElementById("addto").insertBefore(ele,document.getElementById("addto").childNodes[0]);

      }
      document.getElementById("item").value = "";
      
    }
    // Create a "close" button and append it to each list item
    
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
