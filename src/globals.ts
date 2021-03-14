import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
    _NOMBRES:        string = '';
    _APELLIDO_PA:        string = '';
    _APELLIDO_MA:        string = '';
    _ID_ROL:         number;
    _ID_USUARIO:     number;
    _FOTO_USUARIO:   any    = '';
    _FLAG_VERIFICADO: boolean;
}