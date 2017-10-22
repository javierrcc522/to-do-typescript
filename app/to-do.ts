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
}

var tasks: Task[] = [];
tasks.push(new Task('Do the dishes.', 'Medium'));
console.log(tasks);
