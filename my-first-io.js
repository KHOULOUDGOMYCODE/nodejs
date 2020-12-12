var fs=require('fs')
var a= fs.readFileSync(process.argv[2])
var b=a.toString()
var c=b.split('\n')
var d= c.length-1

console.log(d)