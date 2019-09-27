const db = require('../../config/database');
const LivroDao = require('../infra/livro-dao');

module.exports = (app) => {

    app.get("/", (req,res)=>{
        res.send(
            `
   <html>
        <head>
            <meta charset="utf-8"
        </head>
        <body>
            <h1>
                A casa do código
            </h1>
        </body>
   </html>
    `
        );
    });

    app.get('/livros', function(req, resp) {

        const livroDao = new LivroDao(db);
        livroDao.lista()
            .then(livros => resp.marko(
                require('../views/livros/lista/lista.marko'),
                {
                    livros: livros
                }

            ))
            .catch(erro => console.log(erro));

    });

    app.get('/livros/forms', (req,res) => {
       res.marko(require('../views/livros/forms/form.marko'));
           {

           }
    });

    app.post('/livros', function(req, resp) {
        console.log(req.body);
        const livroDao = new LivroDao(db);
        livroDao.adiciona(req.body)
            .then(resp.redirect('/livros'))
            .catch(erro => console.log(erro));
    });
};

