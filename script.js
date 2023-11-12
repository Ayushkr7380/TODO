document.addEventListener('DOMContentLoaded',function(){
    const input1=document.getElementById('in1');
    const btn1=document.getElementById('add1');
    const list1=document.getElementById('li1');

    // const btns=document.getElementById('list1');

    const task=JSON.parse(localStorage.getItem('ayu')) || [];

    function savetask()
    {
        localStorage.setItem('ayu',JSON.stringify(task));
    }


    function displaytask(){
        list1.innerHTML='';
        task.forEach((task1,index)=>{
            const li=document.createElement('li');
            li.textContent=task1;
            const editbtn=document.createElement('button');
            editbtn.textContent='Edit';
            editbtn.classList.add('edit1');
            editbtn.addEventListener('click',()=>{
                const newtext=prompt('Edit the task : ',task1);
                if(newtext!==null)
                {
                    task[index]=newtext;
                    savetask();
                    displaytask();
                }
            });
        


            const delbtn=document.createElement('button');
            delbtn.textContent='Delete';
            delbtn.classList.add('delbtn');
            delbtn.addEventListener('click',()=>{
                task.splice(index,1);
                savetask();
                displaytask();
            });
            list1.appendChild(li);
            list1.appendChild(editbtn);
            list1.appendChild(delbtn);

        });
    }



    btn1.addEventListener('click',function(){
        const text=input1.value.trim();
        if(text!==''){
            task.push(text);
            savetask();
            displaytask();
            input1.value='';
        }
    });

    displaytask();
});
