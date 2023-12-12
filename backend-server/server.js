const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const cors = require('cors');
const path = require("path");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/generated-music', express.static(path.join(__dirname, 'generated-music')));

function runPythonScript(inputArg, callback) {
    console.log("attempting to run python scrip")
    // Adjust these paths according to your project structure
    const pythonPath = path.join(__dirname, 'python-scripts/Scripts/python.exe');
    const scriptPath = path.join(__dirname, 'python-scripts/musicGeneration.py');
    const command = `${pythonPath} ${scriptPath} "${inputArg}"`;
    // Execute the Python script
    exec(command, (error, stdout, stderr) => {
        console.log('stdout:', stdout);
        console.error('stderr:', stderr);
        if (error) {
            console.error(`exec error: ${error}`);
            return callback(error, null);
        }
        if (stderr) {
            console.warn('stderr:', stderr);
        }
        callback(null, stdout);
    });
}
app.post('/generate-music',(req,res)=>{
    const textInput = req.body.text;
    console.log("server recieved request: " + textInput)
    runPythonScript(textInput, (err, result) => {
        console.log("trying")
        if (err) {
            console.log("error")
            res.status(500).send('Error executing Python script');
        } else {
            console.log(result)
            res.send({ filename: result.trim() });
        }
    });
    // res.send({ filename: "musicgen_out_20231212-023552.wav" });
})
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});