O dataset foi alterado manualmente colocando um "]" no final do mesmo" e de seguida recorreu-se ao script `script.py` para converter tudo o que fosse strings e na verdade fossem listas e para trocar de BookId para `_id`.
Para o setup da base de dados utilizei os seguintes comandos:

`docker run -d -p 27017:27017 --name livros mongo` 

`docker cp livros.json livros:/tmp`

`docker exec livros mongoimport -d livros -c livros --type json --file /tmp/livros.json --jsonArray`

Quanto às respostas textuais estas estão incluídas o código e a resposta em `/ex1/queries.txt`.

A minha resolução executa com o comando `npm i` e `npm start` na diretoria remetente às API, ou seja, /ex1 e o mesmo na diretoria da interface, /ex2.