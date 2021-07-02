enum Status {
  NotStarted, // 0
  InProgress, // 1
  Done        // 2
}

let notStartedStatus: Status = Status.NotStarted;
notStartedStatus = Status.Done;

console.log(Status.InProgress) // 1