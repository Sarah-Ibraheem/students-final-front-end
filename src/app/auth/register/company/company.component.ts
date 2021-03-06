import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RegisterService } from "../register.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyForm: FormGroup
  flag;
  errorList=[];

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router:Router,
    private registerService:RegisterService
    )
  { 
    let companyformControls = {
      name : new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(6)
      ]),

      phone: new FormControl('',[
        Validators.required,
        Validators.pattern("[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}"),
        Validators.minLength(11),
        Validators.maxLength(15)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern("(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}")
      ]),
      repassword: new FormControl('',[
        Validators.required,
      ]),
      website: new FormControl('',[
        Validators.required,
        Validators.pattern("((http|https)+://)+([\\da-z0-9.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?\\.([a-z.]{2,6})[/\\w .-]*/?")
      ]),
      fax: new FormControl('',[
        Validators.required,
        Validators.pattern("[+]{1}[0-9]{10,14}"),
        Validators.maxLength(15),

      ]),
      address : new FormControl('',[
        Validators.required,
      ]),
      description: new FormControl('',[
        Validators.required,
        Validators.maxLength(250),

      ]),
      gender : new FormControl(''),
      type : new FormControl(''),
    }
    this.companyForm = this.fb.group(companyformControls);
  }

  ngOnInit(): void {
  }

  get name() { return this.companyForm.get('name') }
  get phone() { return this.companyForm.get('phone') }
  get email() { return this.companyForm.get('email') }
  get password() { return this.companyForm.get('password') }
  get repassword() { return this.companyForm.get('repassword') }
  get address() { return this.companyForm.get('address') }
  get fax() { return this.companyForm.get('fax') }
  get website() { return this.companyForm.get('website') }
  get description() { return this.companyForm.get('description') }



  
  addCompany(){
    this.companyForm.patchValue({type: 1,gender:0});
    let user = this.companyForm.value;
    this.errorList=[]
    
    this.authService.register(user).subscribe(
      res=>{
        this.registerService.changeToken(res.data.token.access_token)
        this.router.navigate(['/email/verify']);
      },
        err=>{
          window.scroll(0,0);
         
            if(err.error&&err.error.errors)
              {
              err.error.errors.email?this.errorList.push(err.error.errors.email):null
              err.error.errors.mobile?this.errorList.push(err.error.errors.mobile):null
              err.error.errors.fax?this.errorList.push(err.error.errors.fax):null
              err.error.errors.website?this.errorList.push(err.error.errors.website):null
              }
          
        }
    )
    }
}
