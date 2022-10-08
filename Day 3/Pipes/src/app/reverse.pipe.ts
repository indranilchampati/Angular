import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(str: string): string {
    
    var splitString = str.split(""); // var splitString = "hello".split("");
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join("");
    return joinArray
  }

}
