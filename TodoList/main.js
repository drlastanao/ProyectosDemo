class Task{
    Id;
    Text;

    constructor(id,text)
    {
        this.Id = id;
        this.Text= text;
    }

    get Text() 
    {
        return this.Text;
    }

    get Id()
    {
        return this.Id;
    }
}

let listTasks = Array();

function addTask(t)
{
    listTasks.push(t);
    savecookie();
    
}

function savecookie()
{
    document.cookie= "tareas="+JSON.stringify(listTasks);
}

function getcookie()
{
    let cookie = document.cookie;
    if (cookie!="")
       listTasks = JSON.parse(cookie.replace("tareas=",""));
}

function deleteTask(t)
{
    listTasks=listTasks.filter(x=> x.Id!=t.Id);
    savecookie();
}



function createTask(id,text)
{
    return new Task(id,text);
}


function findTask(texto)
{
    return listTasks.find(x=>x.Text==texto);
}


getcookie();





