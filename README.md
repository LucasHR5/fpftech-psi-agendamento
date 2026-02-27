# MindHub - Clínica de Psicologia

Sistema web desenvolvido para gerenciamento e agendamento de profissionais de psicologia.

Interface moderna, elegante e focada em experiência do usuário, com layout dividido e identidade visual em tons de verde.

---

## Preview
![C:\Users\fpf\fpftech-psi-agendamento\src\assets\preview.png](preview.png)

Interface com:
- Tela dividida
- Imagem institucional com overlay
- Lista de profissionais disponíveis
- Botão de agendamento
- Design clean e responsivo

---

## Tecnologias Utilizadas

- Angular
- TypeScript
- HTML5
- CSS3
- Flexbox
- Git & GitHub

---

## Layout

O sistema possui:

- Lado esquerdo: imagem institucional com overlay e identidade visual
- Lado direito: listagem de profissionais disponíveis
- Cards modernos com botão de agendamento
- Paleta baseada em verde institucional

---

## Estrutura do Projeto

```bash
mindhub-clinica/
│
├── src/
│   ├── app/
│   │   ├── app.component.ts        # Lógica principal
│   │   ├── app.component.html      # Estrutura da interface
│   │   └── app.component.css       # Estilização da página
│   │
│   ├── assets/
│   │   └── clinica.jpg             # Imagem utilizada no layout
│   │
│   ├── styles.css                  # Estilos globais
│   └── index.html                  # Arquivo principal HTML
│
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Como rodar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js (versão LTS recomendada)
- Angular CLI

Para verificar se já possui instalado:

```bash
node -v
npm -v
ng version
```

Caso não tenha o Angular CLI instalado:

```bash
npm install -g @angular/cli
```

---

### Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/mindhub-clinica.git
```

Acesse a pasta do projeto:

```bash
cd mindhub-clinica
```

Instale as dependências:

```bash
npm install
```

---

### Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
ng serve
```

Abra no navegador:

```
http://localhost:4200/
```

O projeto será recarregado automaticamente ao salvar alterações.
