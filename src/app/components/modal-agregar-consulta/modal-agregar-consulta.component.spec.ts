import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAgregarConsultaComponent } from './modal-agregar-consulta.component';

describe('ModalAgregarConsultaComponent', () => {
  let component: ModalAgregarConsultaComponent;
  let fixture: ComponentFixture<ModalAgregarConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAgregarConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAgregarConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
