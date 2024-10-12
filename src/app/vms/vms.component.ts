import { Component, OnInit } from '@angular/core';
import { VmwareApiService } from '../vmware-api.service';
@Component({
  selector: 'app-vms',
  standalone: true,
  imports: [],
  templateUrl: './vms.component.html',
  styleUrl: './vms.component.css'
})
export class VmsComponent implements OnInit{

  listVms:any;

  constructor(private vmwareApi:VmwareApiService){}

  ngOnInit(): void {
    
    this.vmwareApi.getVmList().subscribe(data=> {
 this.listVms=data;
    }
    );
  }

}
