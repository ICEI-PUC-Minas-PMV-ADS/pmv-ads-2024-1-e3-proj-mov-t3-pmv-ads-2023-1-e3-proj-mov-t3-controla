# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>.


# 1º Caso de Teste: Realizar Cadastro

| Caso de Teste | CT-03 - Cadastro |
|---------------|-----------------------------|
| Requisitos Associados | RF-09 - Permitir que o usuário faça um cadastro com login e senha. |
| Objetivo do Teste | Verificar se o usuário consegue realizar o cadastro na aplicação |
| Instruções| - Acessar a aplicação <br> - Clicar na opção **Cadastrar** <br> - Informar o **E-mail**, **Senha** e **Confirmação de Senha** <br> - Em seguida, clicar na opção em **Criar Conta** |
| Critérios de Êxito | O usuário consegue realizar seu cadastro e é redirecionado para a página login. |

![Cadastro](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/blob/main/assets/tela-cadastro.png?raw=true)<br>
<sub>*Figura: Tela de cadastro*</sub>

A imagem a seguir demonstra o erro exibido onde o usuário insere dados distintos nos campos "Senha" e "Confirmação de Senha", não autorizando o cadastro.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/122227953/b50ea6a6-4780-439d-a16f-0283b9678829" width=300><br>
<sub>*Figura: Erro Tela de cadastro*</sub>

Já na situação a seguir, o usuário preencheu corretamente todos os campos e seu cadastro foi realizado com êxito.
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/122227953/8db84049-fd69-4963-b8a7-a1caf0f475d5" width=300><br>
<sub>*Figura: Sucesso Tela de cadastro*</sub>

# 2º Caso de Teste: Realizar Login

| Caso de Teste | CT-04 - Login |
|---------------|-----------------------------|
| Requisitos Associados | RF-01 - Permitir que o usuário faça login em seu perfil com login e senha. |
| Objetivo do Teste | Verificar se o usuário consegue realizar o login na aplicação |
| Instruções| - Acessar a aplicação <br> - Clicar na opção **login** <br> - Informar o **E-mail**, **Senha**  <br> - Em seguida , clicar na opção **Entrar**
| Critérios de Êxito | O usuário consegue realizar seu login, é notificado com uma mensagem de sucesso. |

![Login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/blob/main/assets/tela-login.png?raw=true) <br>
<sub>*Figura: Tela de login*</sub>

A imagem a seguir demonstra o sucesso obtido do usuário ao inserir seus dados corretamente dados nos campos "Login" e "Senha".
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/122227953/cbf85993-c25b-48f7-aa5a-c503d761d770" width=300><br>
<sub> *Figura: Sucesso Tela de Login*</sub>


# 3º Caso de Teste: Realizar Login

| Caso de Teste | CT-06 - Login |
|---------------|-----------------------------|
| Requisitos Associados | RF-01 - Permitir que o usuário faça login em seu perfil com login e senha. |
| Objetivo do Teste | Verificar se o usuário consegue realizar o login na aplicação |
| Instruções| - Acessar a aplicação <br> - Clicar na opção **login** <br> - Informar o **E-mail**, **Senha**  <br> - Em seguida , clicar na opção **Entrar**
| Critérios de Êxito | O usuário deve receber ua mensagem de notificação de insucesso de login , quando as credenciais forem preenchidas incorretamente.|

A imagem a seguir demonstra o Erro obtido ao usuario inserir incorretamente os dados nos campos "Login" e "Senha"

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/122227953/ccf47e9e-b52a-4614-aa8c-5271c494f1ef" width=300><br>
<sub> *Figura: Erro Tela de Login*</sub>


# 4º Caso de Teste: Cadastrar Despesas

| Caso de Teste | CT-16 - Despesas |
|---------------|-----------------------------|
| Requisitos Associados | RF-01 - Permitir que o usuário faça login em seu perfil com login e senha. |
| Objetivo do Teste | Verificar se o usuário consegue cadastrar uma despesa na aplicação |
| Instruções| - Acessar a aplicação - Clicar em despesas <br> Preencher campos Tipo, valor e Data <br> - Clicar em cadastrar outro
| Critérios de Êxito | O usuário deve receber a mensagem **Despesa cadastrada com sucesso** - A despesa deve aparecer em **Despesas Cadastradas**|

A imagem a seguir mostra Sucesso da execução do teste .

![despesateste](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/127629619/0d6f05ed-eab1-4a19-b575-0b209c433c9f)
<sub> *Figura: Cadastro de Despesa* <sub>


# 4º Caso de Teste: Cadastrar Despesas

| Caso de Teste | CT-17 - Despesas |
|---------------|-----------------------------|
| Requisitos Associados | RF-01 - Permitir que o usuário faça login em seu perfil com login e senha. |
| Objetivo do Teste | Verificar se o usuário consegue excluir uma despesa na aplicação |
| Instruções| - Acessar a aplicação - Clicar em despesas <br> Clicar no botão **Excluir** <br> 
| Critérios de Êxito | O usuário deve recber a mensagem **Despesa excluida com sucesso** - A despesa deve desaparecer|


A imagem a seguir mostra a tela após a Despesa ser excluída.

![despesaexcluidateste](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/127629619/05976e18-3677-45db-b1c3-946ebad4a989)
<sub> *Figura: Despesa Excluida*<sub>



| CT-16 | Despesas | É esperado que ao cadastrar uma despesa deve visualizar detalhes desta despesa. |
| CT-17 | Despesas | É esperado que ao clicar no ícone de exclusão seja exibido um modal de confirmação, e ao clicar em "Excluir" a despesa deve ser deletada do sistema. |


