import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { HttpService } from '../../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { RegisterService } from "../register.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
response;
token;
  constructor(
    private storagService:StorageService,
    private httpService:HttpService,
    private authService: AuthService,
    private router:Router,
    private registerService:RegisterService
    ) { }

  ngOnInit(): void {
    this.registerService.currentToken.subscribe(
      res => {this.token = res})
  }

  resendVerification()
  {
    this.httpService.verifyEmail(this.token).subscribe(
      result =>{
        if(result.status==200)
        {this.response="Already verified you need to login"
         setTimeout(() => {
          this.response = null;
          this.router.navigate(['/login']);
        }, 4000);
       
        }
        else if(result.status==204)
        {this.response="A new message has been sent to your email"}
        setTimeout(() => {
          this.response = null;
        }, 4000);
      },
      error =>{
        console.log(error);
      }
    )
    
  }

}
