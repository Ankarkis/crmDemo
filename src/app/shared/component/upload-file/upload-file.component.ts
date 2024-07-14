import { ChangeDetectionStrategy, Component, ElementRef, Input, QueryList, ViewChildren, model, viewChild } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { Image } from '../../../operador/interface/image';


@Component({
  selector: 'app-upload-file',
  standalone: true,
  imports: [FileUploadModule],
  templateUrl: './upload-file.component.html',
  styleUrl: './upload-file.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UploadFileComponent {
  images=model<Image[]>([]);
  @Input() multipleFile:boolean=true;
  @ViewChildren('buttonEl') buttonEl!: QueryList<ElementRef>;
  onUpload(event: any) {
    for (let file of event.files) {
        this.images.update(images=>[...images,file])
    }
}

onImageMouseOver(file: Image) {
  this.buttonEl.toArray().forEach(el => {
      el.nativeElement.id === file.name ? el.nativeElement.style.display = 'flex' : null;
  })
}

onImageMouseLeave(file: Image) {
  this.buttonEl.toArray().forEach(el => {
      el.nativeElement.id === file.name ? el.nativeElement.style.display = 'none' : null;
  })
}

removeImage(file: Image) {
  let images= this.images()?.filter(i => i !== file);
  this.images.set(images)
}
}