
const HOMEPAGE = require('./../content/index.md');
const VM = require('./../content/git/index.md');
class Core {

  render() {
    this.container = document.getElementById("container");
    this.container.innerHTML = HOMEPAGE + VM;
  }

  constructor() {
    this.render();
  }

};

let core = new Core();

console.log('Core',core);

export default Core;
