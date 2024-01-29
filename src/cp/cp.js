import { spawn } from 'child_process';
import { stdin, stdout } from 'process';

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node files/script.js', args, {
    shell: true
  });

  childProcess.stdout.pipe(stdout);

  stdin.pipe(childProcess.stdin);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['arg1', 'arg2']);
