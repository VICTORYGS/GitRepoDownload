# GitRepoDownload
> Please install gitbash before using

## Usage

```js
const downLoad=require('./download')
downLoad('https://github.com/VICTORYGS/Web-Static-Server.git').then(d=>{
  console.log(d)
}).catch(e=>{
  console.error(e)
})
```
## API

### downLoad(repositoryPath,[localPath])

##### repositoryPath

Type: `string`

repositoryPath is gitRepository's url.

##### localPath

Type: `string`

localPath is a path where you want to store it.
if localPath is a relative path, Please prefixed with .
