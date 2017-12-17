
var sheyvana = prompt('შეიყვანეთ სტუდენტის ID: ');

var child = document.body.children;

for (var i = 0; i < child.length; ++i){
    var atribut = document.body.children[i].getAttribute('data-student-id');

    if (sheyvana == atribut){
        console.log(document.body.children[i].style.backgroundColor = "green");
        
    }

    
}