import React from 'react';
import {shallow} from 'enzyme';
import Encryption from '../Encryption';

describe('Encryption', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Encryption/>);
    instance = component.instance();
  });
  
  it('definir parametros', () => {
    expect(instance.state).toEqual({options:[{linea:"14",texto:"PCAPO"}]});
  });
});
