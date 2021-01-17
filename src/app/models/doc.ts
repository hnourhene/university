export class Doc{
    name: string;
    type: string;
    file: File;
    constructor(
      type: string,
      file: File,
      name: string=''
    ){
      if (name == '') {
        this.name=file.name;
      }
      else{
        this.name=name;
      }
      this.file=file;
      this.type=type;
    }
  }
  