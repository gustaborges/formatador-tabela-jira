# Editor e Formatador de Testes

https://editorderesultados.netlify.app/

Pequeno projeto para padronizar e agilizar a montagem de resultados de testes, a partir da leitura de uma tabela base de testes.

O fluxo se dá da seguinte maneira:

Tabela Base de Testes -> Processamento -> Tabela de Resultados

## Como testar:
- Acessar https://editorderesultados.netlify.app/editor-leitura-tabela.html

No editor de código, insira o seguinte exemplo de tabela de teste:

<code>
  <p>|| Descrição ||</p>
  <p>| Exemplo de descrição de teste |</p>
  <p>| Exemplo 2 de descrição de teste |</p>
</code>

Clicar em "Importar", selecionar as colunas para inclusão na tabela de resultados. Com a tabela importada, navegar entre os testes, atribuindo-lhes resultados e depois clicar em "Gerar Tabela".
