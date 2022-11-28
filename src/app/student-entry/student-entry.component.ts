import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  
  name = ""
  rollNo = ""
  admissionNo = ""
  mobileNo = ""
  college = ""
  parentName = ""
  parentPhoneNo = ""
  username = ""
  password = ""

  readValues = () => {
    let data = {
      "name":this.name,
      "rollNo":this.rollNo,
      "admissionNo":this.admissionNo,
      "mobileNo":this.mobileNo,
      "college":this.college,
      "parentName":this.parentName,
      "parentPhoto":this.parentPhoneNo,
      "username":this.username,
      "password":this.password
    }

    console.log(data);
    
  }
}
