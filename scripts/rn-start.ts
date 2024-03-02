import { exec as execCb } from 'child_process';
import inquirer, { QuestionCollection } from 'inquirer';
import Spinnies from 'spinnies';
import { promisify } from 'util';

const exec = promisify(execCb);
const spinnies = new Spinnies();

type Question = 'platform' | 'env' | 'mode' | 'device' | 'port';

const iosDevices = {
    // 'ShinMini iPhone 14 Pro': '--destination id="00008110-00024416342A401E"',
    'ShinMini iPhone 14 Plus': '--device="ShinMini iPhone 14 Plus"',
    // 'ShinMini 12 mini': '--destination id="00008101-000A00E93410001E"',
    'ShinMini 12 mini': '--device="ShinMini 12 mini"',
    'iPhone 14 Pro': '--destination id="0A4CECFF-9E02-4E8B-8F38-C39E4127EA20"',
} as const;

const iosSchemes = {
    dev: 'Dev',
    stag: 'Stag',
    prod: 'thefitlove',
} as const;

const prefix = {
    dev: 'ENVFILE=.env.development',
    stag: 'ENVFILE=.env.staging',
    prod: 'ENVFILE=.env.production',
} as const;

type GenerateRNCommandParams = Record<Exclude<Question, 'env' | 'device'>, string> & { env: keyof typeof iosSchemes,
    device: keyof typeof iosDevices
  };

const generateRNCommand = ({ platform, env, device, mode, port = '8081' }: GenerateRNCommandParams) => {
    const iosOptions = `--mode=Debug --scheme "${iosSchemes[env]}" ${iosDevices[device]}`;
    const androidOptions = `-mode=${env}${mode}`;

    const startWith = `${prefix[env]} npx react-native run-${platform} --port ${port}`;
    // const startWith = `npx react-native run-${platform} --port ${port}`;
    const options = platform === 'ios' ? iosOptions : androidOptions;
    const command = `${startWith} ${options}`;
    console.debug('exec: ', command);
    return command;
};
const question1 = 'platform' as const;
const question2 = 'env' as const;
const question3 = 'mode' as const;
const question4 = 'device' as const;
const question5 = 'port' as const;
const questions: QuestionCollection = [
    {
        type: 'list',
        name: question1,
        message: `${question1} :`,
        choices: ['ios', 'android'],
        default: 'ios',
    },
    {
        type: 'list',
        name: question2,
        message: `${question2} :`,
        choices: ['dev', 'stag', 'prod'],
        default: 'dev',
    },
    {
        type: 'list',
        name: question3,
        message: `${question3} :`,
        choices: ['Debug', 'Release'],
        default: 'Debug',
    },
    {
        when: answers => answers.platform === 'ios',
        type: 'list',
        name: question4,
        message: `${question4} :`,
        choices: ['ShinMini iPhone 14 Plus', 'ShinMini 12 mini', 'iPhone 14 Pro'],
        default: 'iPhone 14 Pro',
    },
    {
        type: 'input',
        name: question5,
        message: `${question5} :`,
        default: '8081',
    },
];
const start = async () => {
    const config = await inquirer.prompt<GenerateRNCommandParams>(questions);
    const stringifiedConfig = JSON.stringify(config);
    spinnies.add('start', { text: `Starting React Native... ${stringifiedConfig}` });
    try {
        const command = generateRNCommand(config);
        const { stdout } = await exec(command);
        if (stdout) {
            console.log(stdout);
            spinnies.fail('start', { text: `Couldn't start ${stringifiedConfig} 😔` });
            return false;
        }
        spinnies.succeed('start', { text: `Started ${stringifiedConfig}!` });
        return true;
    } catch (e: any) {
        spinnies.fail('start', { text: `Couldn't start ${stringifiedConfig} 😔` });
        console.error(e?.stdout || e?.message);
        return false;
    }
};

async function lintAndCompile() {
    const results: boolean[] = await Promise.all([start()]);
    if (!results.every(Boolean)) {
        return process.exit(1);
    }
    process.exit(0);
}

lintAndCompile().catch(_e => {
    console.error(_e);
});
