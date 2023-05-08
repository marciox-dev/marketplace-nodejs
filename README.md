# marketplace-nodejs

o código do mais novo repositório de market place


Código desenvolvido em JavaScript. 
![NodeJS](https://ubunlog.com/wp-content/uploads/2020/04/about-nodejs.png "NodeJS")

## Instalação

1. Baixe todo o código.
2. Abra o terminal do VS Code.
3. Execute: npm i
4. Rode usando: npm run dev

## Endpoints

Todos os endpoints da nossa aplicação serão listados abaixo:

### Usuário:

Todos os endpoints de usuários listados abaixo.

### /findById


| Código | Resposta                               |   |
| --------- | ---------------------------------------- | --- |
| 200     | Retorna um usuário válido            |   |
| 400     | Retorna uma mensagem informando o erro |   |


| Código | Resposta                                                      |   |
| --------- | --------------------------------------------------------------- | --- |
| 401     | Retorna o erro de autenticação                              |   |
| 4044    | Retorna uma mensagem informando que não encontrou o usuário |   |

````javascript
const findUserByIdController = async (req, res) => {
    try {
        const user = await userService.findUserByIdService(req.params.id);

        if (!user) {
            return res.status(404).send({ message: "Usuário não encontrado. Tente novamente." });
        }
        return res.status(200).send(user);

    } catch (err) {
        if (err.kind == "ObjectId") {

            return res.status(400).send({ message: `ID informado está incorreto. Tente novamente` });
        }

        console.log(`erro: ${err.message}`);
        return res.status(500).send({ message: `Erro inesperado. Tente novamente!` });
    }
};
```
````

Produto:

Todos os endpoints de produtos listados abaixo.
