# Exercício 1 de LES
Repositório contendo o código para o exercício 1 de LES
## Importância de testes
Os testes de um software garantem que o software, como uma unidade, está funcionando perfeitamente. Além de representarem as entradas e saídas esperadas de um sistema, os testes também podem ser interpretados como uma maneira de garantir que o comportamente do software está funcionando de acordo com o esperado. Cada teste sendo uma especificação do sistema, ao rodarmos a nossa suíte de testes, nós garantimos que o software está funcionando de acordo ou não com a nossa especificação.

## Testes automatizados
A tarefa de testar um software é extremamente monótona, repetitiva e _time-consuming_. Utilizar humanos para testar um software pequeno pode até ser uma idéia válida, porém conforme seu software vai ficando cada vez maior e mais complexo, essa tarefa passa a ser, além do que foi citado antes, impossível para um ser humano realizar em sua totalidade a cada iteração da entrega do software. Os testes automizados permitem com que você escreva código que irá testar o seu código. Atráves de chamadas ao seu código e com entradas definidas e com saídas especificadas, você consegue descrever toda a maneira que você espera que seu software funcione, e depois poderá fazer essa verificação (comumente chamado de _rodar os testes_), quantas vezes quiser, sem a interferência humana, _write once, test anytime_.

## Erros
Os testes foram feitos para dispararem erros. Quando qualquer mudança no código é feita, principalmente manutenção dele, os erros ajudam a saber aonde as suas mudanças impactaram, e então poder reagir a elas, caso essas mudanças sejam intencionais, os testes devem ser atualizados, caso não sejam, as mudanças devem ser reavaliadas.

## Desenvolvimento Orientado a Testes
É uma metodologia de desenvolvimento que foca na escrita de testes em conjunto com a escrita de código, ao contrário do que é comumente feito, que é a escrita de todo código e depois a escrita do código. Acredita-se que esse metodologia melhora a qualidade do código e das entregas pois o desenvolvedor irá planejar a frente o que ele irá programar. Atráves das especificações, citadas anteriormente, o desenvolvedor consegue definir as entradas do sistema e o que ele irá ter como saída antes de ele poder desenvolver.

### Iteração do TDD
1. Comece escrevendo os testes
2. Rode a suíte de testes, o novo teste irá falhar
3. Escreve o mínimo de código necessário para poder os testes passarem
4. Rode de novo a suíte de testes
5. Refatore seu código caso seja necessário

### Behaviour Driven Development
O BDD tem sua raiz no TDD. A principal diferença é que, enquanto no TDD você testa unidades de lógica, por exemplo, você testa uma função que faz a encriptação de uma _string_ ou uma fórmula matemática, no BDD você não testa a implementação, e sim o seu comportamento. Um grande problema que o BDD resolve, é o de que sempre que você atualiza uma função, é necessário atualizar os testes. Ao invés de deixar os seus testes o mais atrelado possível com a sua implementação, você passar deixar os seus testes um pouco dinâmicos também, para caso você altere a sua implementação, você não precise alterar diretamente os seus testes. 
Um caso clássico, é o de um incrementador: ele começa do valor 0 e toda vez que você chama essa função, ele é incrementado em um. Utilizando TDD, você iria testar o valor "0" como inicial, e o valor "1" como a primeira incrementação. Utilizando BDD, você não testaria o valor inicial, já que ele não tem impacto nenhum sobre o comportamento, que é apenas incrementar o valor de um número, você irá escrever os testes para verificar apenas se o número foi incrementado.


## Conclusões
Apesar de que em um primeiro momento pareça ser muito complicado e _pesado_ para toda a equipe adotar essas metodologias, em um curto ou médio prazo esse custo é muito recompensador. A equipe passa a pensar como o software irá ser utilizado, o seu nível de complexidade (muito complexo é muito difícil de ser testado), e na modularidade do sistema como um todo. Isso fora que em projetos grandes e com equipes grandes, é muito difícil manter controle sobre a mudança na base de código, e os testes especificam justamente que ele está funcionando de acordo com o esperado, portanto mudanças mínimas com grande impacto no sistema passam a ser fáceis de serem controladas e revertidas caso o comportamento não esteja adequado com o desejado. Além disso, testes servem para documentar como o sistema funciona, caso algum desenvolvedor novato não saiba como é um fluxo de alguma lógica, se ela estiver especificada nos testes, isso ajudará ele a ganhar tempo.
