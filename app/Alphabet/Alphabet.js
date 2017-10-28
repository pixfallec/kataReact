import React, {Component} from 'react';

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = {alfabeto:"ABCDEFGHIJKLMNOPQRSTUVWXYZ"};
    //console.log(this.state.alfabeto);
  }

  obtener(num,alfabeto) {
    var letras = alfabeto.substr(num) + alfabeto.substr(0, num);
    return letras;
    //if (num==1) {return 'BCDEFGHIJKLMNOPQRSTUVWXYZA';}
    //if (num==25) {return 'ZABCDEFGHIJKLMNOPQRSTUVWXY';}
  }

  generar_texto(alfabeto) {
    var texto = '';
    var textoabc = '';
    var arrtexto = [];
    var arrsolotexto = []
    for (var i = 0; i < alfabeto.length-1; i++) {
      textoabc = this.obtener(i+1,alfabeto);
      texto = (i+1) + ': ' + textoabc;
      arrtexto[i] = texto;
      arrsolotexto[i] = textoabc;
    }
    return arrtexto;
  }
  
  render() {
    var rows = this.generar_texto(this.state.alfabeto);
    return (
      <div className="container">
        {rows.map((row,index)=>{return <p>{row}</p>})}
      </div>
    );
  }
}

export default Alphabet;
