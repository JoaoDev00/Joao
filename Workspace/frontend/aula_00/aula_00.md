# AULA 00
## Estrutura de arquivo HTML
1. Por boa prática, o arquivo principal html é chamado de `index.html`.
2. O nome do arquivo html utiliza o padrão de case snake_case. Ex: index_do_meu_site.html
```html
<!DOCTYPE html><!-- Declaração que define que este documento é um documento HTML5 -->
<html lang="pt-br"> <!-- Tag que informa que o código será em html    -->
    <head> <!-- Contém meta informações e configurações da página -->
        <meta charset="UTF-8"><!-- Define o conjunto de dicionário do código  -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Define que as medidas serão feitas em cima de 100% da tela do dispositivo -->
        <title>William</title><!-- Especifica um título para a página HTML. -->
    </head>
    <body><!-- Define o corpo do documento, irá ser apresentado na página -->
    </body>
</html>
```

-------------------------------------------------------------------
## TAGS BÁSICAS NO HTML

Em HTML, temos algumas tags que possuem significado e funções, e outras que só possuem funções.

## Tags de parágrafo
p -> Tag de marcação de parágrafo. <p></p>

## Tags de cabeçalho
Os títulos HTML são definidos com as tags <h1> até <h6>.
<h1> define o título mais importante e o <h6> o título menos importante:
´´´html
    <h1>Eu sou um h1.</h1>
    <h2>Eu sou um h2.</h2>
    <h3>Eu sou um h3.</h3>
    <h4>Eu sou um h4.</h4>
    <h5>Eu sou um h5.</h5>
    <h6>Eu sou um h6.</h6>
´´´

## Tag de Link
Os links HTML são definidos com a tag <a>:
<a href="https://www.w3schools.com/html/default.asp">Clique Aqui</a>

## Tag de imagem


# AULA 01
## Como adicionar o CSS
1. CSS inline 
-> é adicionado diretamente aos elementos HTML usando o atributo ,style. Esete método é útil para aplicar estilos em um único elemento específico. `Utilizar apenas em modo de desenvolvimento.`
Ex: 
<a href="" style="color:crimson">Saiba mais</a>

2. CSS interno
-> é definido dentro de uma tag <style></style> no <head> do documento HTML. Este método é útil para estilizar um único documento. `Utilizar apenas em modo de desenvolvimento.`
Exemplo:
<style>
        a{
            color:chartreuse;
            background-color: blue;
        }
    </style>

3. CSS externo
-> é definido em um arquivo separado com a extensão CSS, que é então linkada ao documento HTML. Este método é ideal para manter o estilo de múltiplas páginas web.
Exemplo:
arquivo style.css
```css
a{
    color:chartreuse;
    background-color: blue;
}
```
---------------------------------------------------------------------

## Introdução de Cores no CSS
-> Cores são uma parte fundamental do design web, usadas para dar estilo e identidade visual às páginas.No CSS, há várias formas de definir cores.

## Sistema de Cores
1. Nome de cores
-> o css permite usar nomes de cores predefinidos. Por exemplo:
Exemplo:
```css
    color:coral;
    background-color: blue;
```

2. RGB
-> o modelo RGB(RED, GREEN, BLUE) define cores combinando esses três componentes. O formato é rgb(red,green,blue), onde cada valor vai de 0 a 255.
Exemplo:
```css
    color:rgb(100, 122, 73);
    background-color: rgb(11, 11, 114);
```
3. Hexadecimal
-> cores hexadecimais são representadas por #RRGGBB, onde esses valores vão de (00 a FF).
Exemplo:
```css
a{
    color: #FFFFFF;
    background-color: #000000;
}
```

4.RGBA
-> é uma extensão do RGB que inclui um valor de opacidade(Alpha). O formato é rgba(red,green,blue,alpha), onde o alpha vai de 0[transparente] até o 1 [opaco].
```css
a{
    color: rgba(0, 0, 0, 0);
    background-color: #d7c8c8;
}
```

---------------------------------------------------------------------

## AULA 02

<br> -> Quebra de linha. É usada para quebrar linha dentro do texto ou conteudo html
NÃO EXISTE </br> é vazio.....

2. <hr> -> Linha horizontal 

3. <b> -> Negrito. É usada para aplicar negrito ao texto 
  ## Tags block e tags inline

-> As tags HTML podem ser categorizadas em duas principais: `tags inline e tags block.`


1 . Tags block 

-> São 


---------------------------------------------------------------------
## Propriedades do CSS
1. color -> Estiliza a cor do elemento.
2. background-color -> Estiliza o fundo do elemento.