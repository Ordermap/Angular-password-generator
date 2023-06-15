import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=0;
  password='';
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;
  onChangeLength(value:string){
    const parsedValue=parseInt(value);
    if(!isNaN(parsedValue)){
      this.length=parsedValue;
    }
    
  }

  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }
  onButtonClick(){
    console.log(`about to generate a password with the following:
    include letters:${this.includeLetters}
    include numbers:${this.includeNumbers}
    include symbols:${this.includeSymbols}`
    )
    this.password="My Password!!!"
  }

}
