class Task {
  done: boolean = false;
  //we dont have to use this properties
  // description: string;
  // priority: string;

  constructor(public description: string, public priority: string)
  {
    // this.done = false; //delete to use in properties
    // this.description = descriptionParameter;
    // this.priority = priorityParameter;

  }
  markDone(){
    this.done = true;
  }
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
tasks.push(new Task('Buy chocolate.', 'Low'));
tasks.push(new Task('Do laundry.', 'High'));

tasks[0].markDone();

for(var task of tasks){
  console.log(task);
}
