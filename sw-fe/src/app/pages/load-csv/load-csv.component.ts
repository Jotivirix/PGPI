import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CsvService } from 'src/app/services/csv.service';

@Component({
  selector: 'app-load-csv',
  templateUrl: './load-csv.component.html',
  styleUrls: ['./load-csv.component.scss'],
})
export class LoadCSVComponent implements OnInit {
  CSVFile: File;
  loadingCSV: boolean = false;
  enabledUpload: boolean = false;

  constructor(private _csvService: CsvService, private router: Router) {
    this.CSVFile = new File([], '');
  }

  ngOnInit(): void {}

  selectFile(event: any) {
    this.CSVFile = event.target.files[0];
    this.enabledUpload = true;
  }

  uploadCSV() {
    this.loadingCSV = true;
    this.enabledUpload = false;
    const formData = new FormData();
    formData.append('providers_products', this.CSVFile);
    this._csvService.uploadCSV(formData).subscribe(
      (res) => {
        if (res.status === 'success') {
          this.loadingCSV = false;
          alert('Productos cargados correctamente');
          this.router.navigate(['worker'])
        } else {
          console.log(res);
          alert('Error en el formato del CSV \n' + res.message);
          this.router.navigate(['worker/loadCSV'])
        }
      },
      (err) => {
        alert('Error en la conexión con la base de datos');
        this.router.navigate(['worker/loadCSV'])
      }
    );
  }
}
