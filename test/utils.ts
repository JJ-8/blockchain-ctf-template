export function ensureEnvVar(varName: string): string {
    if (!process.env[varName]) {
        console.log(`\x1b[41m[!]\x1b[0m Env var ${varName} not set or empty, expect problems if you use it`);
        return "" // :)
    }
    return process.env[varName] as string;
}