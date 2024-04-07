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
| CT-01 | Inicial | É esperado que seja exibido opção das funcionalidades de fazer login com email cadastrado ou criar conta no app. |
| CT-02 | Inicial | É esperado que ao clicar no botão "CRIAR CONTA" o usuário seja redirecionado para tela de Cadastro. |
| CT-03 | Inicial | É esperado que ao clicar no botão "DIGITE SEU EMAIL" o usuário seja redirecionado para tela de Login. |
| CT-04 | Cadastro | Ao preencher todos os campos válidos e clicar em "Criar Conta", o usuário deve receber e-mail de confirmação e ser redirecionado para tela de Login. |
| CT-05 | Cadastro | Ao preencher o campo de e-mail com e-mail que já tem cadastro no sistema deve retornar mensagem de erro para e-mail já cadastrado. |
| CT-06 | Cadastro | Ao preencher os campos com dados inválidos deve não habilitar o botão de "Criar Conta". |
| CT-07 | Cadastro | Ao não preencher os campos obrigatórios deve não habilitar o botão de "Criar Conta". |
| CT-08 | Login | Ao preencher os campos de e-mail e senha válidos e clicar em "Login", o usuário deve ser redirecionado para tela Home e estar logado no sistema. |
| CT-09 | Login | Ao preencher o campo de e-mail com e-mail que não foi confirmado pelo usuário ou que não tem cadastro no sistema deve retornar mensagem de erro para e-mail não cadastrado. |
| CT-10 | Login | Ao preencher o campo de e-mail com e-mail inválido deve retornar mensagem de erro para e-mail inválido. |
| CT-11 | Login | Ao preencher o campo de senha com senha diferente da cadastrada deve retornar mensagem de erro para senha inválida. |
| CT-12 | Login | Ao não preencher os campos de e-mail e/ou senha deve não habilitar o botão de "Login". |
| CT-13 | Login | É esperado que seja exibido opção da funcionalidade "Esqueci minha senha" e ao clicar seja redirecionado para tela de recuperação de senha. |
| CT-14 | Esqueci minha senha | Ao preencher o campo de e-mail e clicar no botão "Recuperar senha", o usuário deve receber e-mail com senha e ser redirecionado para tela de Login. |
| CT-15 | Home | É esperado que seja exibido todas as opções de funcionalidades do app. |
| CT-16 | Home | É esperado que seja exibido um gráfico de setores com as movimentações. |
| CT-17 | Home | É esperado que seja exibido uma notificação de alerta caso o valor das despesas seja superior ao valor das receitas. |
| CT-18 | Home | É esperado que seja exibido uma notificação de alerta caso o usuário tenha ultrapassado o limite estabelecido de despesas no mês. |
| CT-19 | Home | É esperado que seja exibido uma notificação de sucesso caso o usuário tenha concluído o mês com o valor das receitas maior que o valor das despesas. |
| CT-20 | Home | É esperado que seja exibido uma notificação de sucesso caso o usuário tenha atingido sua meta estabelecida de receitas no mês. |
| CT-21 | Minha Carteira | É esperado que seja exibido o valor de saldo atual do usuário. |
| CT-22 | Movimentações | É esperado que seja exibido todas as movimentações do mês selecionado e opção de visualizar detalhes, editar, exluir ou adicionar uma nova movimentação. |
| CT-23 | Movimentações | É esperado que seja possível filtrar as movimentações por tipo (Despesas, Receitas ou Investimentos). |
| CT-24 | Movimentações | É esperado que ao clicar em uma movimentação deve visualizar detalhes desta movimentação. |
| CT-25 | Movimentações | É esperado que ao clicar no ícone de exclusão seja exibido um modal de confirmação, e ao clicar em "Excluir" a movimentação deve ser deletada do sistema. |
| CT-26 | Movimentações | É esperado que ao clicar no ícone de edição o usuário seja redirecionado para tela de Edição de Movimentações. |
| CT-27 | Movimentações | É esperado que ao clicar no ícone de adição o usuário seja redirecionado para tela de Cadastro de Movimentações. |
| CT-28 | Cadastro de Movimentações | É esperado que tenha classificações para tipos de movimentações (Despesas, Receitas ou Investimentos) e de recorrência (fixa, programada ou única). |
| CT-29 | Cadastro de Movimentações | Ao preencher todos os campos válidos e clicar em "Salvar", o usuário deve ter sua movimentação salva e ser redirecionado para tela de Movimentações. |
| CT-30 | Edição de Movimentações | Ao preencher todos os campos válidos e clicar em "Salvar", o usuário deve ter sua movimentação editada salva e ser redirecionado para tela de Movimentações. |
| CT-31 | Despesas | É esperado que seja exibido todas as despesas do mês selecionado e opção de visualizar detalhes, editar, exluir ou adicionar uma nova despesa. |
| CT-32 | Despesas | É esperado que ao clicar em uma despesa deve visualizar detalhes desta despesa. |
| CT-33 | Despesas | É esperado que ao clicar no ícone de exclusão seja exibido um modal de confirmação, e ao clicar em "Excluir" a despesa deve ser deletada do sistema. |
| CT-34 | Despesas | É esperado que ao clicar no ícone de edição o usuário seja redirecionado para tela de Edição de Movimentações. |
| CT-35 | Despesas | É esperado que ao clicar no ícone de adição o usuário seja redirecionado para tela de Cadastro de Movimentações. |
| CT-36 | Receitas | É esperado que seja exibido todas as receitas do mês selecionado e opção de visualizar detalhes, editar, exluir ou adicionar uma nova receita. |
| CT-37 | Receitas | É esperado que ao clicar em uma receita deve visualizar detalhes desta receita. |
| CT-38 | Receitas | É esperado que ao clicar no ícone de exclusão seja exibido um modal de confirmação, e ao clicar em "Excluir" a receita deve ser deletada do sistema. |
| CT-39 | Receitas | É esperado que ao clicar no ícone de edição o usuário seja redirecionado para tela de Edição de Movimentações. |
| CT-40 | Receitas | É esperado que ao clicar no ícone de adição o usuário seja redirecionado para tela de Cadastro de Movimentações. |
| CT-41 | Investimentos | É esperado que seja exibido todas os investimentos do mês selecionado e opção de visualizar detalhes, editar, exluir ou adicionar uma novo investimento. |
| CT-42 | Investimentos | É esperado que ao clicar em um investimento deve visualizar detalhes deste investimento. |
| CT-43 | Investimentos | É esperado que ao clicar no ícone de exclusão seja exibido um modal de confirmação, e ao clicar em "Excluir" o investimento deve ser deletado do sistema. |
| CT-44 | Investimentos | É esperado que ao clicar no ícone de edição o usuário seja redirecionado para tela de Edição de Movimentações. |
| CT-45 | Investimentos | É esperado que ao clicar no ícone de adição o usuário seja redirecionado para tela de Cadastro de Movimentações. |

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
