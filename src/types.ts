interface LoanInfmationData {
  loanAmount: number;
  borrower: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    county: string;
  };
  coborrower: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  } | null;
}


interface UnderwritingResult {
  result: UnderwritingResultStatus;
  applicationId: string;
  activeApplicationLink: string | null;
  applicationWasPrequalified: boolean;
  borrowerId: string;
  coborrowerId: string | undefined;
}

export enum UnderwritingResultStatus {
  Success = 'Success',
  FrozenReport = 'Frozen Report',
  Decline = 'Decline',
  BorrowerCannotBeCreated = 'Borrower Cannot Be Created',
  BorrowerAlreadyHasActiveApplication = 'Borrower Already Has Active Application',
  CoborrowerAlreadyHasActiveApplication = 'Co-Borrower Already Has Active Application',
  BorrowerIsLocked = 'Borrower Is Locked',
  CoborrowerIsLocked = 'Co-Borrower Is Locked',
}
