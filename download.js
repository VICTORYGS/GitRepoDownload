const {execSync}=require('child_process')
const fs=require('fs')
const judgeEnv=(pathKey)=>{
  let pathList=process.env.Path.split(';')
  for(let v of pathList){
    if(fs.readdirSync(v).some(v=>RegExp(`^${pathKey}`).test(v))){
      return true
    }
  }
  return false
}
module.exports=function(repositoryPath,localPath) {
  if(!repositoryPath)return Promise.reject('请填写git资源路径');
  let promise;
  if(judgeEnv('git')){
    try{
      /**
       * 未安装 ora 的情况下，进行兼容
       */
      var load=require('ora')('正在下载中...').start()
    }catch (e) {
      var load;
    }
    try{
      localPath||(localPath=__dirname);
      /^\./.test(localPath)&&(localPath=require('path').resolve(localPath));
      execSync(`cd ${localPath||process.cwd()}&&git clone ${repositoryPath}`);
      load&&load.succeed('下载成功');
      promise=Promise.resolve('下载成功');
    }catch (err) {
      load&&load.fail(err);
      promise=Promise.reject('下载失败：'+err);
    }
    return promise

  }else return Promise.reject('未找到git命令；请确认是否已安装，并配置到了系统环境变量中');
}
