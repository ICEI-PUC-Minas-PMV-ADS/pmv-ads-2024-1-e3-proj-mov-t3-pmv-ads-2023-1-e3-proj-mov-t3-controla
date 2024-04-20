# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no <a href="8-Plano de Testes de Software.md"> Plano de Testes de Software</a>.


# 1º Caso de Teste: Realizar Cadastro

| Caso de Teste | CT-01 - Cadastro |
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


![Login](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/blob/main/assets/tela-login.png?raw=true) <br>
<sub>*Figura: Tela de login*</sub>


<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/122227953/ccf47e9e-b52a-4614-aa8c-5271c494f1ef" width=300><br>
<sub> *Figura: Erro Tela de Login*</sub>

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/122227953/cbf85993-c25b-48f7-aa5a-c503d761d770" width=300><br>
<sub> *Figura: Sucesso Tela de Login*</sub>
