# C2Y - Website

Website para o projeto Computing to You (C2Y) da UFSCar Sorocaba.

## Setup

* Instalar o ambiente de desenvolvimento disponível em https://github.com/uiuc-web-programming/vagrant-dev de acordo com as instruções

* Clonar este repo no diretório ``/vagrant-dev``

### 1. Inicializando ambiente de desenvolvimento
```bash
cd vagrant-dev
vagrant up # boot na máquina virtual
vagrant ssh # acessar o ambiente
cd /vagrant # todos os seus arquivos dentro de vagrant-dev estarão no diretório /vagrant na máquina virtual
```

### 2. Instalando as dependências do projeto
```bash
npm install
bower install
```

### 3. Inicializando ferramentas de desenvolvimento
```bash
grunt compass # compila o scss para css e envia para a pasta public/css
grunt uglify # minimiza arquivos .js e envia para a pasta public/js
grunt
```

Acesse o website em http://localhost:3000

* Enquanto o comando ``grunt`` estiver rodando, os arquivos .scss serão recompilados, os arquivos .js serão compactados, ambos serão disponibilizados na pasta public e a página no navegador será atualizada sempre que forem modificados. Qualquer modificação nos arquivos .html também atualizará o website no browser.
* Repita o passo 1 sempre para inicializar o ambiente de desenvolvimento
* Repita o passo 2 apenas quando inserir novas dependências em package.json ou bower.json
* Repita o passo 3 sempre antes de começar a desenvolver

## Comandos úteis

* Para desativar a máquina virtual, com o terminal dentro do diretório vagrant-dev entre o comando
``vagrant halt``
