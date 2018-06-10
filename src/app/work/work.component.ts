import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup,ReactiveFormsModule  } from '@angular/forms';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  addForm: FormGroup;
  initItemRows() {
    return this._fb.group({
        
        itemname: ['']
    });
}
  constructor(
    private _fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm(){
    this.addForm = this._fb.group({
      itemRows: this._fb.array([])
    });
    this.addForm.setControl('itemRows', this._fb.array([]));
  }


  addNewRow() {
 
    const control = <FormArray>this.addForm.controls['itemRows'];
    control.push(this.initItemRows());
}

deleteRow(index: number) {
   
    const control = <FormArray>this.addForm.controls['itemRows'];
    control.removeAt(index);
}

  ngOnInit(){

  }

}
