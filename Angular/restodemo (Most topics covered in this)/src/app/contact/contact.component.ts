import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

import { FeedbackService } from "../services/feedback.service";
import { Feedback, ContactType } from '../shared/feedback';
import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class ContactComponent implements OnInit {

  @ViewChild('fform', {static: false}) feedbackFormDirective;

  feedbackForm: FormGroup;
  feedback: Feedback;
  feedbackCopy: Feedback;
  contactType = ContactType;
  errMess: string;
  spinner: boolean;
  showSubmittedDetails: boolean;

  constructor(private fb: FormBuilder,
    private  feedbackService: FeedbackService,
    @Inject('BaseURL') private BaseURL) {
    this.spinner = false;
    this.showSubmittedDetails = false;
    this.createForm();
  }

  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'email': {
      'required':      'Email is required.',
      'email':         'Email not in valid format.'
    },
  };



  createForm() {
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(25) ] ],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
      telnum: ['', [Validators.required, Validators.pattern] ],
      email: ['', [Validators.email]],
      agree: false,
      contacttype: 'None',
      message: ''
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    //this.feedback = this.feedbackForm.value;
    this.spinner = true;
    this.feedback = this.feedbackForm.value;
    this.feedbackService.submitFeedback(this.feedback)
      .subscribe((feedback) => {
        this.showSubmittedDetails = true;
        this.spinner = false;
        this.feedback = feedback;
        this.feedbackCopy = feedback;
        
        setTimeout(() => this.showSubmittedDetails = false, 5000);
      },
      (errmess) => {
        this.feedback = null;
        this.feedbackCopy = null;
        this.errMess = <any>errmess;
      })
    //console.log(this.errMess);
    //console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });
    this.feedbackFormDirective.resetForm();
  }

  ngOnInit() {
  }

}
