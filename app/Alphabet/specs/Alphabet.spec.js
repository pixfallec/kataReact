import React from 'react';
import {shallow} from 'enzyme';
import Alphabet from '../Alphabet';

describe('Alphabet', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Alphabet/>);
    instance = component.instance();
  });
  
  it('definir alfabeto', () => {
    expect(instance.state).toEqual({alfabeto:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"});
  });
  it('validar funcion', () => {
    expect(instance.obtener(1,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toEqual("BCDEFGHIJKLMNOPQRSTUVWXYZA");
    expect(instance.obtener(25,"ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toEqual("ZABCDEFGHIJKLMNOPQRSTUVWXY");
  });
  it('validar funcion texto', () => {
    const abc = instance.generar_texto("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    //expect().toContains("1: BCDEFGHIJKLMNOPQRSTUVWXYZA <br>2: CDEFGHIJKLMNOPQRSTUVWXYZAB <br>3: DEFGHIJKLMNOPQRSTUVWXYZABC <br>4: EFGHIJKLMNOPQRSTUVWXYZABCD <br>5: FGHIJKLMNOPQRSTUVWXYZABCDE <br>6: GHIJKLMNOPQRSTUVWXYZABCDEF <br>7: HIJKLMNOPQRSTUVWXYZABCDEFG <br>8: IJKLMNOPQRSTUVWXYZABCDEFGH <br>9: JKLMNOPQRSTUVWXYZABCDEFGHI <br>10: KLMNOPQRSTUVWXYZABCDEFGHIJ <br>11: LMNOPQRSTUVWXYZABCDEFGHIJK <br>12: MNOPQRSTUVWXYZABCDEFGHIJKL <br>13: NOPQRSTUVWXYZABCDEFGHIJKLM <br>14: OPQRSTUVWXYZABCDEFGHIJKLMN <br>15: PQRSTUVWXYZABCDEFGHIJKLMNO <br>16: QRSTUVWXYZABCDEFGHIJKLMNOP <br>17: RSTUVWXYZABCDEFGHIJKLMNOPQ <br>18: STUVWXYZABCDEFGHIJKLMNOPQR <br>19: TUVWXYZABCDEFGHIJKLMNOPQRS <br>20: UVWXYZABCDEFGHIJKLMNOPQRST <br>21: VWXYZABCDEFGHIJKLMNOPQRSTU <br>22: WXYZABCDEFGHIJKLMNOPQRSTUV <br>23: XYZABCDEFGHIJKLMNOPQRSTUVW <br>24: YZABCDEFGHIJKLMNOPQRSTUVWX <br>25: ZABCDEFGHIJKLMNOPQRSTUVWXY <br>");
    expect(abc[0]).toContain("1: BCDEFGHIJKLMNOPQRSTUVWXYZA");
    expect(abc[24]).toContain("25: ZABCDEFGHIJKLMNOPQRSTUVWXY");  
  });
});
