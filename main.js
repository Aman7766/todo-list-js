window.addEventListener("load",() =>{

    const form=document.querySelector("#task-form");
    const input=document.querySelector('#new-task-input');
    const list_elements=document.querySelector('#tasks');
    console.log(form);
    form.addEventListener('submit',(e) => {
       e.preventDefault();

       const task=input.value;

       const task_element=document.createElement('div');
       task_element.classList.add('task');

       const task_content=document.createElement('div');
       task_content.classList.add('content');

       task_element.appendChild(task_content);
       
       const task_input_element=document.createElement('input');
       task_input_element.classList.add('text');
       task_input_element.type='text';
       task_input_element.value=task;
       task_input_element.setAttribute('readonly','readonly');

       task_content.appendChild(task_input_element);

       const task_actions_elements=document.createElement('div');
       task_actions_elements.classList.add('actions');
      
       const task_edit_element=document.createElement('button');
       task_edit_element.classList.add('edit');
       task_edit_element.innerText="Edit";
       task_actions_elements.appendChild(task_edit_element);


      const task_delete_element=document.createElement('button');
      task_delete_element.classList.add('delete');
      task_delete_element.innerText="Delete";
      task_actions_elements.appendChild(task_delete_element);

      task_element.appendChild(task_actions_elements);

      list_elements.appendChild(task_element);

      input.value = '';

      task_edit_element.addEventListener('click', (e) =>{
       if(task_edit_element.innerText.toLowerCase() == "edit")
        {
        task_edit_element.innerText="Save";
        task_input_element.removeAttribute("readonly");
        task_input_element.focus();
        }
        else
        {
            task_edit_element.innerText = "Edit";
            task_input_element.setAttribute("readonly", "readonly");
        }
      });


       task_delete_element.addEventListener('click',(e)=>{
        list_elements.removeChild(task_element);
       });
        
    });
});
