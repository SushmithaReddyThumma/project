import { DatasharedService } from './../datashared.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  clientName='';
 vendorName='';
 vendorEmail='';
 location='';
 project='';
 comment=''
 



ngOnInit() {
}
onClick(event:Event)
{
  this.clientName=(<HTMLInputElement>event.target).value;
}
onClick1(event:Event)
{
this.vendorName=(<HTMLInputElement>event.target).value;
}
onClick2(event:Event)
{
this.vendorEmail=(<HTMLInputElement>event.target).value;
}
onClick3(event:Event)
{
this.location=(<HTMLInputElement>event.target).value;
}
onClick4(event:Event)
{
this.project=(<HTMLInputElement>event.target).value;
}
onClick5(event:Event)
{
this.comment=(<HTMLInputElement>event.target).value;
}


}
