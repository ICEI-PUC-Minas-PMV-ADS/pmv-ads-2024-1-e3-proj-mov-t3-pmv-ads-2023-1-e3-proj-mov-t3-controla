# Especificações do Projeto

A equipe realizou pesquisas e entrevistas com potenciais usuários da aplicação visando traçar quais problemas o software resolverá. A partir disso, os levantamentos foram compilados na forma de _Personas_ e _Histórias de Usuários_, conforme apresentado a seguir.

## Personas

|BEATRIZ CORDEIRO                 |                                                                                                |
| -----------------               | ---                                                                                            |
| Idade: 49 anos                  |	Principais aplicativos: Banking; Streaming; Whatsapp; Instagram; TikTok; YouTube; Twitter.     |
| Ocupação: `Analista Financeiro` | Motivações: Família; Busca por conhecimento.. | Objetivos: Seguir evoluindo profissionalmente. |
| ---                             |	Hobbies: Leitura; Filmes e Séries; Língua Estrangeira; Viagens                                 |


|LEONARDO MACEDO  |     |
| ----------------- | --- |
| Idade: 21 anos    |	Principais aplicativos: Streaming; Whatsapp; Instagram; Telegram; YouTube; Twitter; Discord. |
| Ocupação: `Suporte` `Estudante de SI` | Motivações: Amigos; Tecnologia. | Objetivos: Trabalhar como gestor em tecnologia (gestão de pessoal). |
|     |	Hobbies: Games online; Filmes e Séries. |

|LUCIANO MOTTA  |     |
| ----------------- | --- |
| Idade: 30 anos    |	Principais aplicativos: Streaming; Whatsapp; Instagram; YouTube. |
| Ocupação: `Bombeiro Militar` | Motivações: Atividades Físicas; Família. | Objetivos: Ter controle sobre o próprio tempo. |
|     |	Hobbies: Crossfit; Filmes e Séries; Viagens. | 


## Histórias de usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                     |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------------------------- |----------------------------------------|
|Usuário do sistema  | Cadastrar minhas despesas mensais                      | saber quanto devo poupar dos meus rendimentos mensais para que as despesas sejam satisfeitas. |
|Usuário do sistema  | Cadastrar uma compra futura                            | planejar e saber quanto devo poupar mensalmente. |
|Usuário do sistema  | Cadastrar meus investimentos                           | entender e acompanhar onde, como e quanto do meu patrimônio está investido. |
|Usuário do sistema  | Cadastrar minhas despesas dinâmicas mensais            | entender e classificar qual a média das minhas despesas com combustível, por exemplo. |
|Usuário do sistema  | Cadastrar minha despesas imprevistas                   | prever e planejar possíveis gastos excedentes mensais. |
|Usuário do sistema  | Receber dicas e lembretes de gerenciamento financeiro  | manter uma vida financeira controlada e saudável. |
|Usuário do sistema  | Administrar o dinheiro para garantir aposentadoria     | ter a segurança da aposentadoria privada. |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|-------------------|-----------------------------------------|----|
|`RF-01`| Permitir que o usuário registre suas **despesas fixas** (aluguel, streaming, seguro, internet, etc.). | `ALTA` | 
|`RF-02`| Permitir que o usuário registre suas **despesas esporádicas** (corte de cabelo, jantar em restaurante, passeio no parque de diversões, etc.).  | `ALTA` |
|`RF-03`| Permitir que o usuário registre suas **despesas com “prazo de validade”** (compras parceladas, financiamentos, etc). | `ALTA` | 
|`RF-04`| Permitir que o usuário registre uma **meta de gastos** (seja ela semanal, mensal ou anual).   | `ALTA` |
|`RF-05`| Permitir que o usuário registre suas **receitas fixas.** (salário, mesada, etc.). | `ALTA` | 
|`RF-06`| Permitir que o usuário registre suas **receitas esporádicas** (dividendos, rendimentos, participação nos lucros, etc.).   | `ALTA` |
|`RF-07`| Permitir que o usuário registre suas **receitas com “prazo de validade”** (vendas parceladas, etc.). | `ALTA` | 
|`RF-08`| Permitir que o usuário registre seus **investimentos** (Títulos de renda fixa, títulos de renda variável, etc.).   | `ALTA` |
|`RF-09`| Permitir que o usuário faça um **cadastro com login e senha**. | `ALTA` | 
|`RF-10`| Permitir que o usuário registre **despesas imprevistas** (veterinário, hospital, medicamentos, etc.).   | `MÉDIA` |
|`RF-11`| Permitir que o usuário especifique em seu cadastro qual o **motivo** pelo qual ele está utilizando a aplicação. (gerenciamento financeiro, dívidas, controle de investimentos, etc.). | `MÉDIA` | 
|`RF-12`| Exibir **notificações (pop-ups)** com dicas para uma vida financeira mais saudável.   | `MÉDIA` |
|`RF-13`| Permitir que o usuário opte pelo **“DarkMode”** | `BAIXA` | 
|`RF-14`| Permitir que a página de registros seja **customizável** conforme as necessidades do usuário.   | `BAIXA` |
|`RF-15`| Exibir **notificações** nos aparelhos móveis. | `BAIXA` | 
|`RF-16`| Permitir que o usuário faça a **importação do seu extrato na extensão .csv**   | `BAIXA` |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|`RNF-01`| A aplicação deve manter o padrão de desempenho mínimo — definido pela equipe — em qualquer sistema de acesso: Browser, Smartphone ou Tablet.| `MÉDIA` |
|`RNF-02`| O sistema deve permanecer disponível X% do tempo, a fim de que esteja disponível sempre que o usuário necessitar. | `MÉDIA` | 
|`RNF-03`| O sistema deve ser acessível e de fácil usabilidade pelo usuário. | `BAIXA` | 
|`RNF-04`| O sistema deve ser responsivo em qualquer sistema de acesso: Browser, Smartphone ou Tablet | `ALTA` | 
|`RNF-05`| O sistema deve ser de fácil manutenibilidade | `MÉDIA` | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| A equipe não pode contratar nem delegar funções à terceiros.|


## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 


## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 


![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e2-proj-int-t11-pmv-ads-2023-2-e2-t11-projcontrolafacil/assets/131923836/2113567e-c7fb-465f-9165-f62ba4a1f9d2)


- Associação

  Usuário faz o login. Cadastra suas receitas. Registra despesas. Registra Investimentos. 
Consulta saldo.

- Inclusão

  Toda vez que o usuário fizer Login, o aplicativo verificará a senha automaticamente.

- Extensão

  Ocorrerá apenas quando o usuário digitar senha errada, aparecerá a mensagem de erro de login.

- Generalização/Herança

  Ao registrar as Despesas  o usuário poderá optar por registrar como Fixas ou Esporádicas.
O mesmo ocorre em Cadastrar Receitas.


As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Diagrama de rede simplificado notação francesa (método francês)](img/02-diagrama-rede-simplificado.png)

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

![Gráfico de Gantt](img/02-grafico-gantt.png)

## Gerenciamento de Equipe

Para que o projeto alcance altos níveis de produtividade, foi feito o gerenciamento de tarefas e pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/99828297/3624fac5-0a04-4567-ac24-9cbbb8cc3e96)

## Gestão de Orçamento

O processo de determinar o orçamento do projeto é uma tarefa que depende, além dos produtos (saídas) dos processos anteriores do gerenciamento de custos, também de produtos oferecidos por outros processos de gerenciamento, como o escopo e o tempo. Com base nisso foi determinado um orçamento anual partindo da concepção do projeto até alguns meses após o lançamento.

![gestao-orcamentaria](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e3-proj-mov-t3-pmv-ads-2023-1-e3-proj-mov-t3-controla/assets/63301414/afc43a84-5938-47f9-a943-7539cd63a6e1)

Detalhamento:

Investimento disponível para o Projeto
- R$ 960.000,00

Controlar os Custos
- Faixa para variação de orçamento: 5%

Recursos Humanos
- 6 Profissionais (1 PM, 1 TL, 4 Devs)
- 1 PM (9000)
- 1 TL (13000)
- 1 Dev Junior (3000)
- 2 Dev Pleno (6000 cada)
- 1 Dev Senior (10000)

Hardware
- 6 Notebooks
- 6 Headsets
- 6 Mouses
- 6 Mousepads

Rede
- 6 planos de internet residencial

Software
- Gestão de Projetos (GitHub)
- Versionamento de Código (GitHub)
- Hospedagem na nuvem (Azure)
- Comunicação (Discord)

Riscos
- Aumento do preços de hospedagem
- Manutenção de dispositivos
- Compra de novos dispositivos
- Necessidade de contratação para cumprir prazo
- Necessidade de upgrade no serviço de rede
- Sofwares gratuitos deixarem de oferecer serviço nesta modalidade
