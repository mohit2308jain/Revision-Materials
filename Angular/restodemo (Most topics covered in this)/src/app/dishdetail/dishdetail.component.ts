import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Comment } from "../shared/Comment";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { visibility, flyInOut, expand } from "../animations/app.animation";

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    visibility(),
    expand()
  ]
})
export class DishdetailComponent implements OnInit {

  @ViewChild('cForm', {static: false}) commentFormDirective;

  commentForm: FormGroup;
  comment: Comment;
  errMess: string;
  dishCopy: Dish;
  visibility = 'shown';

  @Input()
  dish: Dish;
  dishIds: string[];
  prev: string;
  next: string;

  formErrors = {
    'author': '',
    //'rating': '',
    'comment': ''
  }

  validationMessages = {
    'author': {
      'required': 'Author name is required.',
      'minlength': 'Author name must be atleast 2 characters long.',
      'maxlength': 'Author name cannot be more than 25 characters.'
    },
    /*
    'rating': {
      'required': 'Rating is required.',
    },
    */
    'comment': {
      'required': 'Comment is required.',
      'minlength': 'Comment must be at least 5 characters long.'
    }
  };

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb : FormBuilder,
    @Inject('BaseURL') private BaseURL) { }

    createForm = () => {
      this.commentForm = this.fb.group({
        author: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(25) ] ],
        rating: 5, //[5, Validators.required ],
        comment: ['', [Validators.required, Validators.minLength(5)] ],
        date: ''
      });

      this.commentForm.valueChanges.subscribe((data) => this.onValueChanged(data));

      this.onValueChanged(); //(re)sets from validation messages
  }

  onValueChanged = (data?: any) => {
    if(!this.commentForm) { return; }

    const form = this.commentForm;

    for(const field in this.formErrors){
      if(this.formErrors.hasOwnProperty(field)){

        this.formErrors[field]='';

        const control = form.get(field);

        if(control && control.dirty && !control.valid){
          const messages = this.validationMessages[field];

          for(const key in control.errors){
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
    //to show the comment in realtime
    this.comment = form.value;
    //console.log(this.comment);
  }

  onSubmit = () => {
      this.comment = this.commentForm.value;
      this.comment.date = new Date().toISOString();
      this.dishCopy.comments.push(this.comment);
      this.dishservice.putDish(this.dishCopy)
        .subscribe((dish) => {
          this.dish = dish;
          this.dishCopy = this.dishCopy;
        },
        (errmess) => {
          this.dish = null;
          this.dishCopy = null;
          this.errMess = <any>errmess;
        })
      console.log(this.comment);
      this.comment=null;
      this.commentForm.reset({
        author: '',
        rating: 5,
        comment: '',
        date: ''
      });
      this.commentFormDirective.resetForm({rating: 5});
  }


  ngOnInit() {

    this.createForm();

    this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
    this.route.params
      .pipe(switchMap((params: Params) => { this.visibility = 'hidden'; return this.dishservice.getDish(params['id']); }))
      .subscribe(dish => {
          this.dish = dish; 
          this.dishCopy = dish;
          this.setPrevNext(dish.id);
          this.visibility = 'shown';
        }, 
        (errmess) => this.errMess = <any>errmess);
  }

  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }
  

  goBack(): void {
    this.location.back();
  }

}
