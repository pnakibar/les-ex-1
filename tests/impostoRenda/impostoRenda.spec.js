import chai from 'chai';
import calculaImposto from './../../src/impostoRenda';

chai.should();

describe('Calcula imposto de renda', () => {
  it('alíquota deverá ser 0 quanto valor é até 1.710,78', () => {
    calculaImposto(1710.18).should.be.equal(0);
  });
  it('alíquota deverá ser 7,5 quanto valor é entre 1.710,79 e 2.563,91', () => {
    calculaImposto(2563.91).should.be.equal(7.5);
  });
  it('alíquota deverá ser 15 quanto valor é entre 2.563,92 e 3.418,59', () => {
    calculaImposto(3418.59).should.be.equal(15);
  });
  it('alíquota deverá ser 22.5 quanto valor é entre 3.418,60 e 4.271,59', () => {
    calculaImposto(4271.59).should.be.equal(22.5);
  });
  it('alíquota deverá ser 27.5 quanto valor é entre 4.271,60', () => {
    calculaImposto(4271.60).should.be.equal(27.5);
  });
  it('deverá jogar erro quando for menor que 0', () => {
    try {
      calculaImposto(-1);
    } catch (e) {
      e.message.should.be.equal('Valor deve ser acima de 0');
    }
  });


});

