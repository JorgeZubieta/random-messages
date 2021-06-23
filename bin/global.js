// Vamos a establecer un elemento que se va a ejecutar desde terminal (dentro del sistema BASH) 

#!/usr/bin/env node
let random = require('../src/index.js');
random.randomMsg();