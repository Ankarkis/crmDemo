import { Directive, ElementRef, Input, inject } from '@angular/core';
import { S3Service } from '../service/s3.service';

@Directive({
  selector: '[appNoPhoto]',
  standalone: true
})
export class NoPhotoDirective {
  @Input({required:true}) set image(image:string){
    this.putImage(image);
  };
  private htmlElement?: ElementRef<HTMLElement>;
  private s3Service=inject(S3Service);
  constructor(private el: ElementRef<HTMLElement> ) {
    this.htmlElement=el;
   }
   private async getImage(url:string){
    return (await this.s3Service.getImage(url)).url.toString();
   }

   private async putImage(image:string){
    if(image==='' || image===null){
     ( this.htmlElement?.nativeElement as HTMLImageElement).src='assets/img/no-image.jpg';
     return;
    }
    ( this.htmlElement?.nativeElement as HTMLImageElement).src= await this.getImage(image);

   }

}
