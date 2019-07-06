
# Goomer lista rango

Goomer lista rango é uma aplicação em React+Redux, que permite o usuário pesquisar por restaurantes, seus pratos, horários de funcionamento e promções.

## Requirementos
[create-react-app](https://facebook.github.io/create-react-app/docs/getting-started) pode ser instalado usando o npx:

```bash
npx create-react-app my-app
```

[Node.js](https://nodejs.org/en/) v8.12 ou superior

## Instalação

Clone o projeto :
```bash
git clone https://github.com/PuenteVinicius/goomer-lista-rango.git
```
Instale as dependências

```bash
yarn install 
```
```bash
npm install 
```

## Rodando o projeto

Para rodar o projeto
```bash
yarn start 
```
```bash
npm start
```
Buildando o projeto
```bash
yarn build 
```
```bash
npm build
```
## Rodando os testes
Ao se rodar a aplicação todos os testes são rodados anteriormente, mas caso se queria apenas rodar o os testes execute o seguinte comando:

```bash
yarn test
```
```bash
npm test
```
## Desafios/Problemas encontrados
Os principais desafios e problemas encontrados durante o desenvolvimento foram:

-**Horários de funcionamento e promoções**: Garantir sempre que em qualquer horário as funções relacionadas aos horários de funcionamento e promoções, de fato foi um pouco desafiador pois ao se gera vários casos de testes e torna a lógica um pouco mais complexa.

-**Formatação de dados**: Em alguns casos, os dados vindos da API necessitaram de uma tratativa para que fosse maís fácil de mostra-los no front, o que resultou em criações de funções de mapeamento de dados, o que influenciou no tempo de desenvolvimento dos testes unitários.

-**Biblioteca de UI externa**: Pelo design proposto ao projeto, utilizar o Design Material da google optei por utilizar uma biblioteca de componentes prontos, porém no final do projeto percebi que, demandou-se muito tempo para se aprender a utilizar a biblioteca. Ou seja a melhor solução seria utilizar a biblioteca de CSS e fazer os components com HTML e CSS pois é muito mais leve e rápido de se utilizar.

-**Falta de informações**: Em alguns casos, os dados vindos da API não vinham com todas as informações necessárias (horários e imagens). Para contornar esse problema utilizei [dummy image](https://dummyimage.com/) para gerar as imagens dinamicamente, e utilizei de lógica para preencher alguns dados que faltaram.

## Melhorias
Melhorias pertinentes:

-**Melhorar testes de UI**: Para aumentar a cobertura de testes será necessário incluir mais testes que englobam a parte de UI , utilizando os snapshots com lógica.

-**Substituir [Material/Ui](https://material-ui.com/) pelo [Matearialize.CSS](https://materializecss.com/)**:  O material/UI é muito interessante, porém (ao me ver) ele adiciona uma camada de complexidade um pouco desnecessária ao projeto. Já o **materialize.CSS** como é apenas uma lib de CSS ele é simples e leve e combinado com o SASS pode ser muito efetivo.

-**Utilizar High Order Components**: No final do projeto foi percebido que muitos componentes ali poderiam ser otimizados se fosse aplicado utilizando o conceito de high order components. diminuindo o tamanho dos arquivos e deixando o código menos complexo

-**Ferramentas de CI**:  Seria muito importante para o crescimento do projeto se utilizar alguma ferramenta de CI, para automatizar a execução de testes e os processos de build e deploy.
## License
[MIT](https://choosealicense.com/licenses/mit/)
