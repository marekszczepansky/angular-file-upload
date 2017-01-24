import { Component } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

// https://embed.plnkr.co/ozZqbxIorjQW15BrDFrg/
// converted to https://github.com/jkuri/ngx-uploader

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  uploadFile: any;
  hasBaseDropZoneOver: boolean = false;
  options: NgUploaderOptions = {
    url: 'http://localhost:3000/api/upload/file',
    filterExtensions: true,
    allowedExtensions: ['zip'],
    // authToken: 'asd123b123zxc08234cxcv',
    // authTokenPrefix: 'Bearer',
  };
  sizeLimit = 3000000;

  handleUpload(data): void {
    if (data && data.response) {
      // data = JSON.parse(data.response);
      this.uploadFile = data.response;
    }
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }
}
