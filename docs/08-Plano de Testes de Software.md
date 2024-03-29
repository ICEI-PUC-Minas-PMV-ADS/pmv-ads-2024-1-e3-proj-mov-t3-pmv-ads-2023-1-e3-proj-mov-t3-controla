# Plano de Testes de Software

A seguir os cenários de teste que atendem aos requisitos e que serão utilizados na realização dos testes desta aplicação.

## Cenários de Teste

| Nº Teste | Tela | Cenário de teste |
|----------|--------|------------------|
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

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
