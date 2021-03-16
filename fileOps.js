/*
take the filename from cmd line
get array from filenames.txt  file
save the array and chcek whether the filename exists in that array or not
if yes
 throw error
 else you add new file name to that array and save it
 +
 create this new file and write your are awesome
*/

const fs= require('fs')
const yargs =require('yargs')
let filename= yargs.argv.filename
let fileArray =[]
let controlfile= 'filenames.txt';

fs.readFile(controlfile, function(err,data){
    if(err) throw err;
    fileArray = data.toString().split("\r\n");
    if (fileArray.includes(filename))
        return console.log("file already exists! please excute with the new file name!")
    else{
        fileArray.push(filename)
        fs.appendFile(controlfile,"\r\n"+ filename, function(err,data){})
        fs.writeFile(filename,'You are Awesome', function(err,data){})
    }
})