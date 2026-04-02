export interface Task{
    id:string;
    userId:string;
    title:string;
    summary:string;
    duedate:string;
  
  }

  export interface NewTaskData{
    summary:string;
    title:string;
    date:string;
  }