import { Component, OnInit } from '@angular/core';
import {
  faWrench, faPenSquare, faPlus, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  faWrench = faWrench;
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
