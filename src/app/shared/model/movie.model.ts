export class movie {
  movie!:movieOption[];
  constructor(){
    this.movie = [
      new movieOption('Prison Break','this is a serial and its name is : ','serial'),
      new movieOption('capital','this is a serial and its name is : ','serial'),
      new movieOption('attack on titan','this is a animation and its name is : ','animation'),
      new movieOption('game of therons','this is a serial and its name is : ','serial'),
      new movieOption('avatar','this is a animation and its name is : ','animation'),
      new movieOption('naruto','this is a animation and its name is : ','animation'),
      new movieOption('Arrow','this is a serial and its name is : ','serial'),
      new movieOption('Flash','this is a animation and its name is : ','animation'),
      new movieOption('Boruto','this is a animation and its name is : ','animation'),
      new movieOption('Death Note','this is a animation and its name is : ','animation'),
      new movieOption('Kung Fu Panda','this is a animation and its name is : ','animation'),
      new movieOption('Clasher','this is a serial and its name is : ','serial'),
      new movieOption('Lost','this is a serial and its name is : ','serial'),
      new movieOption('Mr Roboot','this is a serial and its name is : ','serial'),
      new movieOption('vampier','this is a serial and its name is : ','serial'),
      new movieOption('origins','this is a serial and its name is : ','serial'),
      new movieOption('vikings','this is a serial and its name is : ','serial'),
      new movieOption('see','this is a serial and its name is : ','serial'),
      new movieOption('hunter X hunter','this is a animation and its name is : ','animation'),
    ]
  }
}
export class movieOption {
  constructor(
    public name:string,
    public text:string,
    public category:string,
  ){}
}
