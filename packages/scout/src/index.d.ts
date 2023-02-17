import { AnalysisResult } from './types/output';
import { Path } from './types/path';
type Params = {
    configPath: Path;
    framework: 'nestjs' | 'react' | 'reactjs';
};
export declare class Scout {
    private params;
    constructor(params: Params);
    private validateParams;
    private getConfig;
    analyze(): Promise<AnalysisResult>;
    saveToFile(destination: Path, data: any): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map