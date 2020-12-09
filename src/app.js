const { Worker } = require('worker_threads');

// Task variant 6
// 1) MD = (B*C)*(MA*ME)
// 2) MG = TRANS(MK) *(MH*MF)
// 3) O = MAX(MP*MR)*T

// Start function1 in thread
new Worker(__dirname+"/functions/function1.js");
// Start function2 in thread
new Worker(__dirname+"/functions/function2.js");
// Start function3 in thread
new Worker(__dirname+"/functions/function3.js");