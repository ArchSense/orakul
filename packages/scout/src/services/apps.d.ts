import { AppName } from '../types/app';
import { Config } from '../types/config';
export type AppPath = string;
export declare const getApps: (configPath: string, config: Config) => Promise<{
    [name: string]: string;
}>;
//# sourceMappingURL=apps.d.ts.map