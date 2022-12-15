import { env } from 'node:process';

const parseEnv = () => {
    const rssEnvVarArr = [];
    for (const envVar in env) {
      if(envVar.includes("RSS_")) rssEnvVarArr.push(`${envVar}=${env[envVar]}`);
      continue;  
    }
    console.log(rssEnvVarArr.join(";"));
};

parseEnv();