import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
 
 
  

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

  onSubmit(form: any): void {
    console.log('you submitted value:', form);

  }

  ngOnInit(){

  }


}
