//taking user input for to-do
var input = document.getElementById("item");
input.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {       //performing action when enter key is pressed
        document.getElementById("add").click();
    }
});
//adding items to list
document.getElementById('add').addEventListener('click',function(){
    var value1=document.getElementById('item').value;
    if(value1)  additem(value1);
});
// appending the list with last in stays at top
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
