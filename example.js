const downLoad=require('./download')
downLoad('https://github.com/VICTORYGS/Web-Static-Server.git').then(d=>{
  console.log(d)
}).catch(e=>{
  console.error(e)
})
