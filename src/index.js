
let HomePage = require('./../content/index.md');
class Core {

  render() {
    this.container = document.getElementById("container");
    this.container.innerHTML = HomePage;
  }

  constructor() {
    this.render();
  }

};

let core = new Core();

console.log('Core',core);

export default Core;
