import { Component, OnInit ,OnDestroy, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ToolService } from 'src/app/tools/services/tool.service';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  constructor(
    private httpService:HttpService,
    private toolService:ToolService,
    private route: ActivatedRoute,
    private storageService:StorageService,) { }
    
  TotalList;Type1List;Type2List;
  type;type1;type2;title1;title2;selectedButton=1;
  ToolTags;user;result; 

  ngOnInit(): void {
    this.route.data.subscribe(type => {this.type=type.type});

    if(this.type==0){
      this.type1=0; this.title1="Requests";
      this.type2=1; this.title2="Offers";}
    else{
      this.type1=2; this.title1="Habitation";
      this.type2=3; this.title2="Transportation";}

    this.httpService.requestTools(this.type1,null).subscribe(
      result =>{
        this.Type1List=result;
        this.getTagsNames(this.Type1List.data.tools);

        this.TotalList=this.Type1List.data.tools;

      },
      error =>{
        console.log(error);}
      );
    this.httpService.requestTools(this.type2,null).subscribe(
        result =>{
          this.Type2List=result;
          this.getTagsNames(this.Type2List.data.tools);

          this.TotalList=this.TotalList.concat(this.Type2List.data.tools);
          this.TotalList=this.TotalList.sort((a,b) => (a.created_at > b.created_at) ? -1 : 1); 


          this.toolService.ToolList(this.TotalList)
          this.toolService.Type1List(this.Type1List.data.tools)
          this.toolService.Type2List(this.Type2List.data.tools)
        },
        error =>{
          console.log(error);}
        );
        this.user=this.storageService.getItem('user')
        this.httpService.requestTags(0).subscribe(
          result =>{
            this.result=result;
            this.ToolTags=this.result.data.tags
          },
          error=>{
            console.log(error);
          } 
        );
  }

  
  onItemChange(event)
  {
    if(event==1)
    {
        this.toolService.currentTools.subscribe(tools => {this.TotalList = tools})
    }
    else if(event==2)
    {
      this.toolService.Type1Tools.subscribe(tools => {this.Type1List = tools})
      this.TotalList=this.Type1List
    }

    else if(event==3)
    {
      this.toolService.Type2Tools.subscribe(tools => {this.Type2List = tools})
      this.TotalList=this.Type2List

    }
    this.selectedButton=event;
  }

  getTagsNames(tools){
    
    tools.forEach(Tool => {
      let TagsNames:string[]=[]
      Tool.tags.forEach(element => {
        TagsNames.push(element.name)
      });
      Tool.tags=TagsNames;
    });
  }
}
