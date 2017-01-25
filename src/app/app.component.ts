import { Component, NgZone, OnInit } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

// https://embed.plnkr.co/ozZqbxIorjQW15BrDFrg/
// converted to https://github.com/jkuri/ngx-uploader

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(){};

  private zone: NgZone;
  uploadFile: any;
  options: NgUploaderOptions;
  hasBaseDropZoneOver: boolean = false;
  ngOnInit() {
    this.options = new NgUploaderOptions({
      url: 'http://localhost:3000/api/upload/file',
      filterExtensions: true,
      allowedExtensions: ['zip'],
      autoUpload: true,
    });
    this.zone = new NgZone({ enableLongStackTrace: false });
  }
  handleUpload(data): void {
    this.zone.run(() => {
      if (data && data.response) {
        // data = JSON.parse(data.response);
        this.uploadFile = data.response;
        console.log(this.uploadFile);
      } else {
        console.log('progress object', data && data.progress);
        this.uploadFile = data.progress.percent;
      }
    });
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    console.log('before upload', uploadingFile);
    if (uploadingFile.size > 300000000) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }
}
