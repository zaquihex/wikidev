import {Component, Input, OnInit} from '@angular/core';

import { CounterService } from './counter.service';
import {Question} from '../../interfaces/question';
import {FormGroup, FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-ng-counter',
  templateUrl: './form.html',
  styleUrls: ['./form.scss']
})


export class Form implements OnInit {

  questionaryForm: FormGroup;
  formSubmitted: boolean;

  msgMandatoryField: string = "Este campo es obligatorio";

  constructor(private counterService: CounterService, private fb: FormBuilder ) {

    const optionsForm = this.fb.group({
      text: new FormControl()
    });

    const questionsForm = this.fb.group({
      question: ['', Validators.required],
      options: new FormArray([optionsForm]),
      solutionOption: ['', Validators.required],
      solution: new FormControl()
    });

    this.questionaryForm = this.fb.group({
      title: ['', Validators.required],
      questions: new FormArray([questionsForm])
    });
  }

  ngOnInit() {}

  get form() { return this.questionaryForm.controls; }
  get questions() { return this.form.questions as FormArray; }
  optionsQuestion(posQuestion) {
    return this.form.questions.value[posQuestion].options;
  }

  addQuestion() {
    const listQuestionsForm = this.questionaryForm.controls.questions as FormArray;
    listQuestionsForm.insert(listQuestionsForm.value.length,this.fb.group({
      question: new FormControl(),
      options: new FormArray([this.fb.group({
        text: new FormControl()
      })]),
      solutionOption: new FormControl(),
      Solution: new FormControl()
    }))
  }

  addOption(posQuestion) {
    const questionOptions = this.optionsQuestion(posQuestion);

    questionOptions.push({...questionOptions[0], text: null});
  }

  optionTextChanged(posQuestion, valueOption) {
    const questionOptions = this.optionsQuestion(posQuestion);
    questionOptions[posQuestion].text = valueOption;
  }

  removeQuestion(posQuestion) {
    this.questions.removeAt(posQuestion);
  }

  removeOption(posQuestion,posOption) {
    const questionOptions = this.optionsQuestion(posQuestion);
    questionOptions.splice(posOption,1);
  }

  submitForm() {
    this.formSubmitted = true;
    debugger;
  }

}
