const http = require('http');

const servidor = http.createServer((req, res) => {
    let html ='';
    if(req.url == '/'){
        html = `
    <html>
        <head>
            <meta charset="utf-8"
        </head>
        <body>
            <h1>
                A casa do codigo
            </h1>
        </body>
    </html>
    `
    }
    else if(req.url == '/livros'){
    html =`
    <html>
        <head>
        <meta charset="utf-8">
            </head>
            <body>
            <h1> Listagem de livros </h1>
        </body>
        </html>`
    }
    res.end(html);
});

servidor.listen(3333);