# 📚 Roadmap do Curso - React SPA

## 📹 **Vídeo 1.2** - Configuração Inicial de Testes de Navegação

**O que será feito:** Nesta aula, vamos configurar o primeiro teste automático da aplicação usando a ferramenta Cypress. Este teste verifica se o usuário consegue navegar entre as páginas corretamente.

**Por que é importante:** Antes de começar a construir a aplicação, precisamos garantir que os testes funcionem corretamente. É como preparar o terreno antes de construir uma casa.

**Ferramentas envolvidas:**

- ✅ **Cypress** - Ferramenta para testar a navegação do site como se fosse um usuário real
- ✅ **ESLint** - Ferramenta que verifica se o código está escrito corretamente
- ✅ **Testes unitários** - Testes pequenos que verificam se cada peça do código funciona

**Arquivos principais modificados:**

- Configurações do Cypress
- Scripts de teste
- Testes de componentes importantes

---

## 📹 **Vídeo 1.3** - Criação da Base do Projeto com Prettier e ESLint

**O que será feito:** Vamos criar toda a estrutura base do projeto React com componentes, páginas e estilos. Também vamos usar duas ferramentas importantes para manter o código limpo e organizado.

**Por que é importante:** Uma boa organização do código desde o início facilita muito o desenvolvimento futuro. É como organizar as ferramentas antes de começar a construir.

**Ferramentas envolvidas:**

- ✅ **Prettier** - Ferramenta que formata o código automaticamente (deixa o código bonito e padronizado)
- ✅ **ESLint** - Ferramenta que encontra erros de programação

**O que será criado:**

- Componentes (Botões, Campos de Entrada, Cartões, Comentários, etc.)
- Páginas (Login, Registro, Feed de Posts, Blog)
- Estilos CSS para cada componente
- Estrutura de roteamento (navegação entre páginas)
- Testes para cada componente importante

**Estrutura de pastas criada:**

```
src/
├── components/    (Componentes reutilizáveis)
├── pages/         (Páginas da aplicação)
├── layouts/       (Estruturas principais)
├── hooks/         (Funções reutilizáveis)
├── router/        (Configuração de navegação)
└── tests/         (Testes automáticos)
```

---

## 📹 **Vídeo 1.4** - Automação de Verificação de Código (Husky)

**O que será feito:** Vamos configurar uma "barreira de segurança" que verifica automaticamente se o código está bom antes de salvar no Git.

**Por que é importante:** Isso garante que nenhum código ruim entre no projeto. É como ter um revisor que verifica tudo antes de confirmar.

**Ferramentas envolvidas:**

- ✅ **Husky** - Ferramenta que executa verificações automáticas
- ✅ **Lint-staged** - Executa verificações apenas nos arquivos que mudaram
- ✅ **Pre-commit hooks** - Script que roda automaticamente antes de cada commit

**O que acontece agora:**
Sempre que você tentar salvar código no Git, a ferramenta vai:

1. ✓ Formatar o código com Prettier
2. ✓ Verificar erros com ESLint
3. ✓ Se tudo ok → salva o código
4. ✗ Se houver problema → bloqueia até corrigir

---

## 📹 **Vídeo 2.1** - Configuração de Testes Unitários (Vitest)

**O que será feito:** Vamos configurar a ferramenta Vitest para executar testes unitários - testes que verificam se cada pequena parte do código funciona corretamente.

**Por que é importante:** Vitest é rápido e moderno. Permite que testemos o código em tempo real enquanto desenvolvemos.

**Ferramentas envolvidas:**

- ✅ **Vitest** - Ferramenta para executar testes rápidos
- ✅ **Coverage** - Ferramenta que mede quanto do código está sendo testado

**O que será feito:**

- Configurar o Vite (empacotador) para reconhecer os testes
- Preparar o ambiente para testar componentes React
- Criar a capacidade de medir cobertura de testes

**Comandos disponíveis agora:**

```bash
npm test                 # Executa os testes
npm run test:coverage   # Mostra quanto % do código está testado
```

---

## 📹 **Vídeo 2.2** - Instalação de Bibliotecas de Teste

**O que será feito:** Vamos instalar as bibliotecas essenciais para testar componentes React:

**Bibliotecas instaladas:**

- ✅ **@testing-library/react** - Permite testar componentes React de forma simples
- ✅ **@testing-library/jest-dom** - Oferece verificações extras para elementos HTML
- ✅ **@testing-library/user-event** - Simula ações do usuário (cliques, digitação, etc.)

**Por que é importante:** Com essas ferramentas, conseguimos fazer testes realistas, simulando como um usuário real usaria o aplicativo.

---

## 📹 **Vídeo 3.1** - Melhorias nas Verificações Automáticas

**O que será feito:** Vamos melhorar as configurações do Husky e Lint-staged para garantir que tudo está funcionando perfeitamente.

**Por que é importante:** Refinamento da qualidade do código - garantir que as verificações automáticas estão sendo executadas corretamente.

**Ajustes:**

- Melhorar a configuração do pre-commit hook
- Garantir que todas as verificações funcionem em sequência

---

## 📹 **Vídeo 3.2** - Automação com GitHub Actions

**O que será feito:** Vamos usar GitHub Actions - um serviço do GitHub que executa verificações automáticas sempre que alguém salva código.

**Por que é importante:** Mesmo que o desenvolvedor tenha ferramentas locais, o GitHub Actions funciona como uma "segunda linha de defesa" para garantir a qualidade do código.

**O que o GitHub Actions vai fazer:**

- ✓ Executar testes automaticamente
- ✓ Verificar se o código segue as regras
- ✓ Conferir a formatação do código
- ✓ Relatar se algo está errado

**Também será adicionada:**

- ✅ **Dependabot** - Bot do GitHub que mantém as dependências atualizadas

---

## 📹 **Vídeo 4.1** - Continuação da Automação

**O que será feito:** Continuaremos configurando o Dependabot no GitHub Actions para manter o projeto sempre atualizado.

**Por que é importante:** Manter as bibliotecas atualizadas é importante para segurança e novas funcionalidades.

---

## 📹 **Vídeo 4.2** - Testes End-to-End com Cypress

**O que será feito:** Vamos expandir os testes do Cypress para cobrir mais cenários de uso real.

**Por que é importante:** Esses testes simulam exatamente como um usuário real usaria o aplicativo, clicando em botões, preenchendo formulários, etc.

---

## 📹 **Vídeo 4.3** - Integração Completa de Testes

**O que será feito:** Vamos integrar todos os tipos de testes (unitários, end-to-end, verificação de código) para que rodem automaticamente.

**Por que é importante:** Quando tudo está integrado, basta fazer um commit para que todas as verificações rodem automaticamente no GitHub.

---

## 📹 **Vídeo 5.3** - Relatórios de Cobertura de Testes

**O que será feito:** Vamos configurar relatórios que mostram exatamente qual porcentagem do código está sendo testado.

**Por que é importante:** Saber a cobertura de testes ajuda a identificar partes do código que não estão sendo testadas e podem conter bugs.

**Ferramentas:**

- ✅ **Vitest Coverage** - Gera relatórios de cobertura
- ✅ **SonarCloud** - Plataforma que analisa qualidade do código

---

## 📊 Resumo Visual do Processo

```
┌─────────────────────────────────────────────────────┐
│         ESTRUTURA DO DESENVOLVIMENTO                │
└─────────────────────────────────────────────────────┘

AULA 1 (Videos 1.2-1.4): Preparação e Organização
    ├─ Cypress (teste de navegação)
    ├─ Prettier (formatação de código)
    ├─ ESLint (verificação de código)
    └─ Husky (automação local)

AULA 2 (Videos 2.1-2.2): Testes Unitários
    ├─ Vitest (executor de testes)
    └─ Testing Library (ferramentas de teste)

AULA 3 (Videos 3.1-3.2): Automação na Nuvem
    ├─ GitHub Actions (CI/CD)
    └─ Dependabot (atualização de dependências)

AULA 4 (Videos 4.1-4.3): Integração Total
    ├─ Testes End-to-End Expandidos
    └─ Integração de Todos os Testes

AULA 5 (Video 5.3): Medição de Qualidade
    ├─ Relatórios de Cobertura
    └─ Análise de Qualidade (SonarCloud)

┌─────────────────────────────────────────────────────┐
│              RESULTADO FINAL                         │
│  Uma aplicação React profissional com testes,       │
│  verificações automáticas e garantia de qualidade!  │
└─────────────────────────────────────────────────────┘
```

---

## 🎯 O que cada pessoa vai aprender em cada aula

| Aula  | Foco                 | Objetivo                                   |
| ----- | -------------------- | ------------------------------------------ |
| **1** | Infraestrutura Local | Preparar o computador para desenvolvimento |
| **2** | Testes Automáticos   | Aprender a testar o código                 |
| **3** | Automação em Nuvem   | Usar ferramentas online para verificações  |
| **4** | Integração Total     | Juntar tudo para funcionar automaticamente |
| **5** | Qualidade            | Medir e garantir a qualidade do projeto    |

---

## 💡 Analogia Final

Imagine que você está construindo uma casa:

- **Aula 1**: Organizar as ferramentas e contratar um inspetor para verificar tudo
- **Aula 2**: Testar cada cômodo enquanto está sendo construído
- **Aula 3**: Contratar um supervisor externo que verifica tudo remotamente
- **Aula 4**: Automatizar todas as inspeções para funcionarem juntas
- **Aula 5**: Gerar um relatório final da qualidade da casa

No final, você terá uma casa construída com qualidade, segurança e confiança! 🏠✨
