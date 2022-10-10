window.onload = function(){
    let todolist = [];
    if(localStorage.getItem('todo') != undefined){
        todolist = JSON.parse(localStorage.getItem('todo'));
        out2();
    }
    document.getElementById('add').onclick = function() {
        let text = document.getElementById('in').value;
        let temp = {};
        temp.todo = text;
        temp.check = false;
        let i = todolist.length;
        todolist[i] = temp;
        // console.log(todolist);
        out();
        localStorage.setItem('todo', JSON.stringify(todolist));
    }
    function out(){
        let out = document.createElement("p");
        out.classList.add('out');
        for(let key in todolist){
            // if(todolist[key].check == true){
            //     out += '<input type="checkbox" checked>';
            // }else {
            //     out += '<input type="checkbox">';
            // }
            out.innerHTML = todolist[key].todo;
            my_div = document.getElementById("out1");
            my_div.appendChild(out);
        }       
    }
    function out2(){
        for(let key in todolist){
            let out2 = document.createElement("p");
            out2.classList.add('out');
            out2.innerHTML += todolist[key].todo + '<br>';
            my_div = document.getElementById("out1");
            my_div.appendChild(out2);
        }       
    }
}
