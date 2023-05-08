# marketplace-nodejs

o código do mais novo repositório de market place

Código desenvolvido em JavaScript.
![NodeJS](https://miro.medium.com/v2/resize:fit:1400/1*aeWo6e6FC8InJwBl3TmpDw.jpeg "NodeJS")

## Instalação

1. Baixe todo o código.
2. Abra o terminal do VS Code.
3. Execute: npm i
4. Rode usando: npm run dev

## Endpoints

Todos os endpoints da nossa aplicação serão listados abaixo:

### /findById/:id


| Código | Resposta                               |   |
| --------- | ---------------------------------------- | --- |
| 200     | Retorna um usuário válido            |   |
| 400     | Retorna uma mensagem informando o erro |   |


| Código | Resposta                                                      |   |
| --------- | --------------------------------------------------------------- | --- |
| 401     | Retorna o erro de autenticação                              |   |
| 404     | Retorna uma mensagem informando que não encontrou o usuário |   |

Trecho do código do controller findById

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

### /findAll


| Código | Resposta                                          |   |
| --------- | --------------------------------------------------- | --- |
| 200     | Retorna todos os usuários do banco de dados      |   |
| 401     | Erro de autorização. Algum problema com o token |   |


| Código | Resposta                                                  |   |
| --------- | ----------------------------------------------------------- | --- |
| 404     | Nenhum usuário encontrados com as informações passadas |   |
| 500     | Mensagem de erro interno                                  |   |

### /create


| Código | Resposta                                     |   |
| --------- | ---------------------------------------------- | --- |
| 201     | Retorna os dados do usuário criado no banco |   |
| 500     | Erro no servidor                             |   |

### /update/:id


| Código | Resposta                                          |   |
| --------- | --------------------------------------------------- | --- |
| 200     | Retorna o objeto atualizado no banco de dados     |   |
| 401     | Erro de autorização. Algum problema com o token |   |


| Código | Resposta                                                  |   |
| --------- | ----------------------------------------------------------- | --- |
| 404     | Nenhum usuário encontrados com as informações passadas |   |
| 500     | Erro no servidor                                          |   |

### /remove/:id


| Código | Resposta                                            |   |
| --------- | ----------------------------------------------------- | --- |
| 200     | Retorna o objeto que foi deletado do banco de dados |   |
| 401     | Erro de autorização. Algum problema com o token   |   |


| Código | Resposta                                                  |   |
| --------- | ----------------------------------------------------------- | --- |
| 404     | Nenhum usuário encontrados com as informações passadas |   |
| 500     | Erro no servidor                                          |   |

### /addAddress/:id


| Código | Resposta                                          |   |
| --------- | --------------------------------------------------- | --- |
| 201     | Retorna o usuário com o seu endereço adicionado |   |
| 401     | Erro de autorização. Algum problema com o token |   |


| Código | Resposta                                                  |   |
| --------- | ----------------------------------------------------------- | --- |
| 404     | Nenhum usuário encontrados com as informações passadas |   |
| 500     | Erro no servidor                                          |   |

### /removeAddress


| Código | Resposta                                          |   |
| --------- | --------------------------------------------------- | --- |
| 200     | Retorna o usuário com o seu endereço removido   |   |
| 401     | Erro de autorização. Algum problema com o token |   |


| Código | Resposta                                                  |   |
| --------- | ----------------------------------------------------------- | --- |
| 404     | Nenhum usuário encontrados com as informações passadas |   |
| 500     | Erro no servidor                                          |   |

### /addFavProduct/:id


| Código | Resposta                                          |   |
| --------- | --------------------------------------------------- | --- |
| 201     | Retorna o usuário e o seu novo produto favorito  |   |
| 401     | Erro de autorização. Algum problema com o token |   |


| Código | Resposta                                                  |   |
| --------- | ----------------------------------------------------------- | --- |
| 404     | Nenhum usuário encontrados com as informações passadas |   |
| 500     | Erro no servidor                                          |   |

### /removeFavProduct/:id


| Código | Resposta                                               |   |
| --------- | -------------------------------------------------------- | --- |
| 200     | Retorna o usuário com o seu produto favorito removido |   |
| 401     | Erro de autorização. Algum problema com o token      |   |


| Código | Resposta                                                  |   |
| --------- | ----------------------------------------------------------- | --- |
| 404     | Nenhum usuário encontrados com as informações passadas |   |
| 500     | Erro no servidor                                          |   |



---




Produto:

Todos os endpoints de produtos listados abaixo.
