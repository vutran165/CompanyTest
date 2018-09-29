import { Component, OnInit } from '@angular/core';
import {
  faLayerGroup, faPlus, faPenSquare, faTrash
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from '../solution/create/create.component';
import { EditComponent } from '../solution/edit/edit.component';
import { DeleteComponent } from '../solution/delete/delete.component';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {


  faLayerGroup = faLayerGroup;
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
