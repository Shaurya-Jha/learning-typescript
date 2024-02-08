enum Month {
  Jan,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec,
}

// declare a function that uses the Month enum as the type of the month parameter:
function isItSummer(month: Month) {
  let isSummer: boolean;

  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isSummer = true;
      break;
    default:
      isSummer = false;
      break;
  }

  return isSummer;
}

console.log(isItSummer(9))

// enum for approvalStatus
enum ApprovalStatus {
    draft,
    submitted,
    approved,
    rejected
};

// we can use the approvalstatus enum like this:
const request = {
    id: 1,
    status: ApprovalStatus.approved,
    description: 'Please approve this request'
}

if(request.status === ApprovalStatus.approved) {
    // send an email
    console.log("sending an email to the Applcant Id ",request.id )
}