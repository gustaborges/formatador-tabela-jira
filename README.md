# Jira Markdown: Formatador de resultados de testes em tabela

Aplicação web que gerar uma tabela que documenta resultados de execução de testes a partir da leitura de uma tabela base de testes.


## Como testar:
- Acessar https://editorderesultados.netlify.app/editor-leitura-tabela.html

1. No editor de código, inserir uma sintaxe de tabela utilizando o markdown do Jira. Exemplo:
<blockquote>
|| Descrição || Descrição 2 ||
  <br>
| Teste 1 | Lorem ipsum |
  <br>
| Teste 2 | dolor sit amet |
</blockquote>

2. Clicar em "Importar"
3. Selecionar as colunas para inclusão na tabela de resultados
4. Navegar entre os testes e atribuir os resultados de sua execução
5. Clicar em "Gerar Tabela".
