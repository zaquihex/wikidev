class OptionQuestion {
  nameOption: String;
  solution: Boolean;
  id: number;
}

export class Question {
  question: String;
  listOptions: OptionQuestion[];
  solution: String;
  id: number;
}
