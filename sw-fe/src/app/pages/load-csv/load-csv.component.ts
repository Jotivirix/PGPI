import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CsvService } from 'src/app/services/csv.service';

@Component({
  selector: 'app-load-csv',
  templateUrl: './load-csv.component.html',
  styleUrls: ['./load-csv.component.scss'],
})
export class LoadCSVComponent implements OnInit {
  CSVFile: File;
  fileForm: FormGroup;

  constructor(private _csvService:CsvService, private formBuilder: FormBuilder) {
    this.CSVFile = new File([], '');
    this.fileForm = this.formBuilder.group({
      profile: ['']
    });
  }

  setFile(file:any){
    console.log(file);
  }

  ngOnInit(): void {}

  selectFile(event:any){
    console.log(event);
    console.log(event.target.files[0]);
    this.CSVFile = event.target.files[0];
    console.log(this.CSVFile);
  }

  uploadCSV(){

    const formData = new FormData();
    formData.append('providers_products',this.CSVFile);

    this._csvService.uploadCSV(formData).subscribe((res)=>{
      console.log(res);
    },(err) => {
      console.log(err);
    })
  }

  onFileSelect(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.fileForm.get('file')!.setValue(file);
    }
  }
}
