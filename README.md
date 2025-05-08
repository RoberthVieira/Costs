Costs - Projeto de Gestão de Custos
O Costs é um projeto de gestão de custos que permite aos usuários adicionar, editar e excluir registros de despesas. A aplicação conta com um frontend desenvolvido em React e uma simulação de backend utilizando JSON Server para persistir os dados de forma local, sem a necessidade de um servidor real. O backend local simula um banco de dados, mas a aplicação não está conectada a um banco de dados real.


Funcionalidades
Cadastro de despesas: O usuário pode cadastrar despesas com detalhes como valor, categoria e descrição.
Edição e exclusão de despesas: O usuário pode modificar ou excluir despesas já cadastradas.
Simulação de backend: Os dados são armazenados localmente utilizando o JSON Server, simulando o comportamento de um backend real.


Tecnologias Utilizadas
Frontend: React, JavaScript, CSS (ou Styled Components, se aplicável)
Backend (simulado): JSON Server


Como Funciona a Simulação do Backend
O projeto utiliza o JSON Server, uma ferramenta que simula um backend RESTful com base em um arquivo de JSON. Ao rodar o servidor localmente, ele cria um "banco de dados" no formato JSON, permitindo que as operações de criar, ler, atualizar e deletar (CRUD) sejam realizadas de maneira semelhante a um backend real.


Estrutura do JSON Server
O arquivo db.json contém os dados persistidos, que no caso do projeto são as despesas. Quando o usuário adiciona, edita ou exclui uma despesa, a aplicação realiza requisições HTTP (GET, POST, PUT, DELETE) para o servidor local do JSON Server, e ele simula a persistência de dados.


Limitações da Simulação
Este backend é apenas uma simulação para fins de desenvolvimento e testes. Ele não oferece escalabilidade nem segurança de um backend real e só funciona localmente. Caso você deseje fazer o deploy da aplicação em uma plataforma de produção, será necessário substituir a simulação por um backend real, como o Node.js com Express ou uma solução de backend em nuvem como o Firebase ou AWS.


Como Rodar o Projeto
Pré-requisitos
Node.js instalado na sua máquina

Passos
Clone o repositório: git clone <a href="https://github.com/RoberthVieira/Costs">
Navegue até o diretório do projeto: cd costs
Instale as dependências: npm install
Inicie o servidor do JSON Server: npm run server
Inicie o frontend: npm start
Acesse a aplicação no seu navegador em http://localhost:3000.

Deploy
Por ser um projeto que depende de uma simulação de backend local, o deploy da aplicação exigirá uma abordagem diferente. Para colocar a aplicação em produção, você precisará substituir o backend simulado por um backend real ou utilizar um serviço que permita persistir os dados.

Contribuindo
Faça um fork deste repositório.
Crie uma branch para suas modificações: git checkout -b minha-modificacao
Faça as alterações e commite: git commit -am 'Descrição das alterações'
Envie para o repositório remoto: git push origin minha-modificacao
Crie um pull request.