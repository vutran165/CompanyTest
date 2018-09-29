import { Component, OnInit } from '@angular/core';
import {
  faTachometerAlt, faPlus, faPenSquare, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  faTachometerAlt = faTachometerAlt;
  faPlus = faPlus;
  faPenSquare = faPenSquare;
  faTrash = faTrash;

  constructor(private modalService: NgbModal) { }

  add() {
    const modalRef = this.modalService.open(CreateComponent, { size: 'lg' });
    modalRef.componentInstance.name = 'World';
  }

  edit() {
    this.modalService.open(EditComponent, { size: 'lg' });
  }

  delete() {
    this.modalService.open(DeleteComponent, { size: 'lg' });
  }
  ngOnInit() {
  }

}
