import chalk from "chalk";
import { wcText } from "./utils.js";

export const APP_NAME = "create-wc-dapp";
export const APP_REPOSITORY_URL = `https://github.com/WalletConnect/create-wc-dapp/`;
export const PROJECT_NAME_QUESTION = `What is your project name?`;
export const TEMPLATE_QUESTION = `Which template would you like to use?`;
export const DIR_VALIDATION_ERROR = `A directory with this name already exists, please use a different name`;
export const READY_TEXT = "🎉 Your WalletConnect Dapp is ready";
export const CREATING_TEXT = "🚀 Creating your WalletConnect Dapp";
export const FINAL_PROMPT_TEXT = projectPath =>
	`Are you sure you want to create your ${wcText(
		`WalletConnect`
	)} dApp in ${chalk.blue(projectPath)} folder?`;
export const WELCOME_TEXT = `📲 Welcome to ${wcText(`${APP_NAME}`)} wizard`;
export const HELP_TEXT_GROUP = {
	title: "create a new WalletConnect dApp project",
	description: "Folder to create your WalletConnect dApp in",
};
export const TEMPLATES_GROUP = {
	title: "Select a template",
	description: "Select a template to use for your WalletConnect dApp",
	options: [
		{
			title: "nextjs",
			description: "WalletConnect Next.js starter template",
			value: "next-starter-template",
		},
		{
			title: "react",
			description: "WalletConnect React starter template",
			value: "react-starter-template",
		},
		{
			title: "vanilla",
			description: "WalletConnect Vanilla/Vite starter template",
			value: "vanilla-starter-template",
		},
	],
};

export const STEPS_TEXT = "👉 To get started, follow these steps:\n";
export const DELETING_TEXT = "🧹 Deleting temporary files";
export const POST_CLEANUP_TEXT = "✅ Project cleaned up";
export const PROGRESS_FORMAT =
	"🛠️  Setting up " +
	chalk.blue("{bar}") +
	" {percentage}% • ETA: {eta_formatted}";

const STEPS_YARN = projectPath => `
	${chalk.bold(chalk.green("cd ") + chalk.magenta(projectPath))}
	${chalk.bold.green("yarn")}
	${chalk.bold(
		`${chalk.green("cp")} ${chalk.magenta(".env.example")} ${chalk.cyan(
			".env"
		)}\n`
	)}
	${chalk.gray(`Your .env now contains the following environment variables:
\t- NEXT_PUBLIC_PROJECT_ID (placeholder) - You can generate your own ProjectId at https://cloud.walletconnect.com
\t- NEXT_PUBLIC_RELAY_URL (already set)
`)}
	${chalk.bold.green("yarn dev")}
`;
const STEPS_NPM = projectPath => `
	${chalk.bold(chalk.green("cd ") + chalk.magenta(projectPath))}
	${chalk.bold.green("npm install")}
	${chalk.bold(
		`${chalk.green("cp")} ${chalk.magenta(".env.example")} ${chalk.cyan(
			".env"
		)}\n`
	)}
	${chalk.gray(`Your .env now contains the following environment variables:
\t- NEXT_PUBLIC_PROJECT_ID (placeholder) - You can generate your own ProjectId at https://cloud.walletconnect.com
\t- NEXT_PUBLIC_RELAY_URL (already set)
`)}
	${chalk.bold.green("npm run dev")}
`;
const STEPS_PNPM = projectPath => `
	${chalk.bold(chalk.green("cd ") + chalk.magenta(projectPath))}
	${chalk.bold.green("pnpm install")}
	${chalk.bold(
		`${chalk.green("cp")} ${chalk.magenta(".env.example")} ${chalk.cyan(
			".env"
		)}\n`
	)}
	${chalk.gray(`Your .env now contains the following environment variables:
\t- NEXT_PUBLIC_PROJECT_ID (placeholder) - You can generate your own ProjectId at https://cloud.walletconnect.com
`)}
	${chalk.bold.green("pnpm run dev")}
`;
export const STEPS = (projectPath, packageManager = "yarn") => {
	switch (packageManager) {
		case "yarn":
			return STEPS_YARN(projectPath);
		case "npm":
			return STEPS_NPM(projectPath);
		case "npx":
			return STEPS_NPM(projectPath);
		case "pnpm":
			return STEPS_PNPM(projectPath);
		default:
			return STEPS_YARN(projectPath);
	}
};
