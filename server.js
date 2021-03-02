const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf-node');
const cors = require('cors');
const path = require('path');

const pdfTemplate = require('./documents/resumeHtmlTemplate');

const app = express();

const port = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// POST Route - PDF generation and fetching of the data

app.post('/create-pdf', (req, res) => {
    let options = { format: 'A4', path: path.join(__dirname, './output/Resume.pdf'), name: 'Resume.pdf'};
    let file = { content: pdfTemplate(req.body) };
    pdf.generatePdf(file, options).then(pdfBuffer => {
        console.log("PDF Buffer:-", pdfBuffer);
        res.status(200).send();
      })
      .catch((error) => {
          console.log(error);
          res.status(500).json({
              error
          })
      });
});


// Get - Send generated pdf to the client
app.get('/fetch-pdf', (req,res) => {
    res.sendFile(`${__dirname}/output/Resume.pdf`);
});

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}


app.listen(port, () => console.log(`Server started on port ${port}`));
