# Projeto 2 de TI129 - Prática Profissional I - Equipe 8: DaRoca

## Integrantes

* Eduarda Yaclara de Souza Maumezzo
* João Lustosa Cordeiro
* Mariana Marietti da Costa

## Guia de Marca
- Cores:
  - Bege: #fffbe4
  - Verde escuro: #013c31
  - Verde médio: #0a5b3c
  - Verde claro: #81a425
  - Laranja forte: #f16d01
  - Laranja claro: #ff8328
  - Branco: #ffffff
  - Preto: #000000
    
- Fontes:
  - Anton - títulos, destaques
  - Questrial - subtítulos, textos

## Visão Geral

**DaRoca** é um projeto que visa conectar pequenos agricultores com clientes urbanos para a entrega de produtos perecíveis, como frutas e outros alimentos, diretamente na casa do consumidor. O sistema envolve uma logística complexa com uma frota de veículos climatizados e três centros de distribuição localizados em **Campinas**, **Ribeirão Preto** e **Guarulhos**, responsáveis pelo envio e controle das entregas.

## Problema

Grande parte dos produtos transportados são perecíveis e, para garantir sua qualidade, as entregas precisam ocorrer em até **6 horas** após o carregamento nos veículos. Existem **horários de entrega definidos** para garantir que os clientes estejam disponíveis, e os veículos são equipados com caixas térmicas e sistemas de climatização.
Entretanto, a gestão da frota apresenta desafios, como falhas nos veículos (vans e caminhões), uma frota maior do que a quantidade de mecânicos disponíveis, e erros de comunicação ao utilizar **planilhas Excel** para organizar as manutenções. Cada centro de distribuição possui equipes de mecânicos que executam manutenções preventivas e corretivas.

## Objetivo do Software

O software proposto para o projeto tem como objetivo **automatizar a distribuição de ordens de serviço** para os mecânicos disponíveis em cada centro de distribuição. Ele permitirá que administradores e analistas programem as manutenções diárias, alocando os mecânicos de forma eficiente e garantindo que as ordens de serviço corretivas recebam prioridade.

## Funcionalidades

1. **Tela de Login**:
   - Usuário entra com credenciais (usuário e senha) e valida via **API**.
   - Exibe mensagem de erro caso a validação falhe.

2. **Tela Principal / Programações**:
   - Exibe um painel com as programações diárias para cada centro de distribuição.
   - Filtros de data, centro de distribuição e usuário responsável pela programação.
   - Botão para adicionar novas programações.

3. **Atribuição de Ordens de Serviço**:
   - Ao adicionar uma nova programação, o sistema exibe uma lista de ordens de serviço filtrada por data e centro de distribuição.
   - O usuário pode **desmarcar ordens** específicas, caso não possam ser atribuídas (ex: falta de peças).
   - Atribuição final das ordens de serviço para os mecânicos disponíveis é feita com um clique no botão "Gerar".

4. **Tela de Progresso**:
   - Exibe o progresso da alocação das ordens de serviço em tempo real (ex: 10%, 50%, etc.).

5. **Sequência de Trabalho dos Mecânicos**:
   - Mostra a rotina de cada mecânico, incluindo o início e término das atividades, e o tipo de manutenção (preventiva ou corretiva).
   - A **primeira atividade do dia** é sempre uma preparação de 30 minutos.
   - O horário de almoço dos mecânicos é automaticamente ajustado entre a 3ª e 5ª hora de trabalho.

## Restrições

  - O sistema **não permite** que ordens de serviço de um centro sejam atribuídas a mecânicos de outro centro.
  - A **API** disponível para integração é limitada e não pode ser alterada diretamente pela equipe.

## Tecnologia Utilizada

  - **Frontend**: HTML, CSS, JavaScript
  - **Backend**: Banco de dados, integração com API externa
  - **Design**: Balsamic para wireframes, Figma para o design de interface final
  - **Modelagem de Dados**: BrModelo para diagramação MER e modelo lógico (SQL)

## Roadmap

  - **13/09/2024**: Criação das primeiras tarefas no Kanban (opcional).
  - **20/09/2024**: Definição do roadmap do projeto, incluindo:
    - Integração de recursos
    - Identificação das partes interessadas (líderes e desenvolvedores)
    - Estimativa de esforço usando a **Escala de Fibonacci** (1, 3, 5, 8, 13, 21)

## Considerações Finais

Esse sistema busca otimizar a manutenção da frota de veículos de DaRoca, garantindo que as ordens de serviço sejam atribuídas de maneira eficiente e sem erros de comunicação. A implementação visa melhorar a gestão da frota e a logística de entrega, garantindo que os produtos perecíveis cheguem ao cliente com a qualidade esperada.


## Histórico de lançamentos

Versão    | Data       | O que há de novo
--------- | ---------  | ---------
1.0       | 20/09/2024 | Roadmap + MER + Wireframe

## Licença

Este projeto utiliza a licença [MIT](https://opensource.org/license/mit).
