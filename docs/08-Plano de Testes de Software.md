# Plano de Testes de Software
O teste de software permite avaliar a qualidade do software e ajuda a reduzir o risco de falha do software em operação. A partir da especificação do sistema será avaliada a qualidade das funcionalidades e a integração entre si.

### Objetivos Gerais 

    1. Encontrar defeitos antes de disponibilizar para o usuário final;
    2. Evitar defeitos em produção;
    3. Verificar conformidade com requisitos;
    4. Garantir a cobertura necessária do objeto de teste e confiança sobre o nível de qualidade.

A seguir os cenários de teste que atendem aos requisitos e que serão utilizados na realização dos testes desta aplicação.

### Cenários de Teste

| Nº Teste | Tela | Cenário de teste |
|----------|------|------------------|
| CT-01 | Inicial | É esperado que ao clicar no botão "CRIAR CONTA" o usuário seja redirecionado para tela de Cadastro. |
| CT-02 | Inicial | É esperado que ao clicar no botão "DIGITE SEU EMAIL" o usuário seja redirecionado para tela de Login. |
| CT-03 | Cadastro | Ao preencher todos os campos válidos e clicar em "Criar Conta", o usuário deve receber e-mail de confirmação e ser redirecionado para tela de Login. |
| CT-04 | Login | Ao preencher os campos de e-mail e senha válidos e clicar em "Login", o usuário deve ser redirecionado para tela Home e estar logado no sistema. |
| CT-5 | Login | Ao preencher o campo de e-mail com e-mail inválido deve retornar mensagem de erro para e-mail inválido. |
| CT-6 | Login | Ao preencher o campo de senha com senha diferente da cadastrada deve retornar mensagem de erro para senha inválida. |
| CT-7 | Movimentações | É esperado que seja exibido todas as movimentações do mês selecionado e opção de visualizar detalhes, editar, exluir ou adicionar uma nova movimentação. |
| CT-8 | Movimentações | É esperado que seja possível filtrar as movimentações por tipo (Despesas, Receitas ou Investimentos). |
| CT-9 | Movimentações | É esperado que ao clicar em uma movimentação deve visualizar detalhes desta movimentação. |
| CT-10 | Movimentações | É esperado que ao clicar no ícone de exclusão seja exibido um modal de confirmação, e ao clicar em "Excluir" a movimentação deve ser deletada do sistema. |
| CT-11 | Movimentações | É esperado que ao clicar no ícone de edição o usuário seja redirecionado para tela de Edição de Movimentações. |
| CT-12 | Movimentações | É esperado que ao clicar no ícone de adição o usuário seja redirecionado para tela de Cadastro de Movimentações. |
| CT-13 | Cadastro de Movimentações | É esperado que tenha classificações para tipos de movimentações (Despesas, Receitas ou Investimentos) e de recorrência (fixa, programada ou única). |
| CT-14 | Cadastro de Movimentações | Ao preencher todos os campos válidos e clicar em "Salvar", o usuário deve ter sua movimentação salva e ser redirecionado para tela de Movimentações. |
| CT-15 | Despesas | É esperado que seja exibido todas as despesas do mês selecionado e opção de visualizar detalhes, editar, exluir ou adicionar uma nova despesa. |
| CT-16 | Despesas | É esperado que ao clicar em uma despesa deve visualizar detalhes desta despesa. |
| CT-17 | Despesas | É esperado que ao clicar no ícone de exclusão seja exibido um modal de confirmação, e ao clicar em "Excluir" a despesa deve ser deletada do sistema. |
| CT-18 | Despesas | É esperado que ao clicar no ícone de edição o usuário seja redirecionado para tela de Edição de Movimentações. |
| CT-19 | Receitas | É esperado que seja exibido todas as receitas do mês selecionado e opção de visualizar detalhes, editar, exluir ou adicionar uma nova receita. |
| CT-20 | Receitas | É esperado que ao clicar em uma receita deve visualizar detalhes desta receita. |
| CT-21 | Receitas | É esperado que ao clicar no ícone de exclusão seja exibido um modal de confirmação, e ao clicar em "Excluir" a receita deve ser deletada do sistema. |
| CT-22 | Receitas | É esperado que ao clicar no ícone de edição o usuário seja redirecionado para tela de Edição de Movimentações. |
| CT-23 | Investimentos | É esperado que seja exibido todas os investimentos do mês selecionado e opção de visualizar detalhes, editar, exluir ou adicionar uma novo investimento. |
| CT-24 | Investimentos | É esperado que ao clicar em um investimento deve visualizar detalhes deste investimento. |
| CT-25 | Investimentos | É esperado que ao clicar no ícone de exclusão seja exibido um modal de confirmação, e ao clicar em "Excluir" o investimento deve ser deletado do sistema. |
| CT-26 | Investimentos | É esperado que ao clicar no ícone de edição o usuário seja redirecionado para tela de Edição de Movimentações. |

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
