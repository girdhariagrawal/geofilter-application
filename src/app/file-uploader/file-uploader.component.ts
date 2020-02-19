import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  @Output() fileChanged: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Called whenever user opens a new file
   * @param $event
   */
  openFile($event: Event) {
    const input = $event.target as any;
    const reader = new FileReader();
    reader.onload = () => {
      this.fileChanged.emit(reader.result);
    }
    reader.readAsText(input.files[0]);
  }

}
