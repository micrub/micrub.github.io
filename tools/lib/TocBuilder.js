import fs from 'fs';
import p from 'path';

class TocBuilder {
  constructor(path){
    path = p.resolve(path)
    let mod = fs.constants.F_OK | fs.constants.R_OK;
    if (fs.existsSync(path,mod)) {
      if (!fs.accessSync(path,mod)) {
        this.path = path;
      }
    }else{
      throw Error('folder not found')
    }
  }
  build(next , results){
    if (results) {
      return results.map((v)=>{
        if (v.isDir) {
          console.log(this);
          //this.build(()=>{}, [v])
        }else{
          return v
        }
      })
    } else {
      let path = this.path;
      if (path) {
        fs.readdir(path, (err,result)=>{
          if (err) {
            next(err)
          } else {
            result = result.filter((v,k)=>{
              if (v.substr(0,1) === '.') {
                return false;
              } else {
                return true;
              }
            })
            result = result.filter((v,k)=> {
              if (fs.statSync(path + '/' + v).isDirectory()) {
                return true;
              } else {
                if (v.split('.').slice(-1)[0] === 'md') {
                  return true;
                } else {
                  return false;
                }
              }
            })
            result = result.map((name)=>{
              let abspath = path + '/' + name;
              return { name, abspath, isDir: fs.statSync(abspath).isDirectory() };
            })
            this.build(next, result);
          }
        })
    } else {
      throw new Error('undefined content folder')
    }

    }
  }

}

export default TocBuilder;
