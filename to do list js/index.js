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
        let i = todolist.length;
        todolist[i] = temp;
        out();
        text.value = '';
        localStorage.setItem('todo', JSON.stringify(todolist));
    }
    function out(){
        let text = document.getElementById('in').value;
        let out = document.createElement("input");
        out.classList.add('wrapperout');
        out.type = 'text';
        out.value = text;
        out.setAttribute('readonly', true);
        for(let key in todolist){
            out.value = todolist[key].todo;
            my_div = document.getElementById("toDoList");
            my_div.appendChild(out); 
        }
        let divOut = document.createElement('div');
        divOut.classList.add('task');
        divOut.appendChild(out); 
        let btnEdit = document.createElement('button');
        btnEdit.innerHTML = 'Edit';
        let btnDel = document.createElement('button');
        btnDel.innerHTML = 'Delete';
        let divBtns = document.createElement('div');
        divBtns.classList.add('wrapperBtn');
        divBtns.appendChild(btnEdit);
        divBtns.appendChild(btnDel);
        divOut.appendChild(divBtns); 
        my_div = document.getElementById("toDoList");
        my_div.appendChild(divOut);
        window.location.reload()
    }
    function out2(){
        for(let key in todolist){
            text= todolist[key].todo;
            let out2 = document.createElement("input");
            out2.classList.add('wrapperout');
            out2.type = 'text';
            out2.value = text;
            out2.setAttribute('readonly', true);
            let divOut = document.createElement('div');
            divOut.classList.add('task');
            divOut.appendChild(out2); 
            let btnEdit = document.createElement('button');
            btnEdit.innerHTML = 'Edit';
            let btnDel = document.createElement('button');
            btnDel.innerHTML = 'Delete';
            let divBtns = document.createElement('div');
            divBtns.classList.add('wrapperBtn');
            divBtns.appendChild(btnEdit);
            divBtns.appendChild(btnDel);
            divOut.appendChild(divBtns); 
            my_div = document.getElementById("toDoList");
            my_div.appendChild(divOut); 
            btnEdit.addEventListener('click', function () {
                if (btnEdit.innerText.toLowerCase() == 'edit') {
                    out2.removeAttribute('readonly');
                    out2.focus();
                    btnEdit.innerText = 'Save';
                } else if(btnEdit.innerText.toLowerCase() == 'save') {
                    out2.setAttribute('readonly', true);
                    btnEdit.innerText = 'Edit';
                    text = out2.value;
                    todolist[key].todo = text;
                    localStorage.setItem('todo', JSON.stringify(todolist));
                }
            });

            btnDel.addEventListener('click', function () {
                todolist.splice(key,1);
                localStorage.setItem('todo', JSON.stringify(todolist));
                window.location.reload()
            });
        }  
    }  
}