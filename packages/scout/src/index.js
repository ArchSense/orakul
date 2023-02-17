"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scout = void 0;
const promises_1 = require("fs/promises");
const apps_1 = require("./services/apps");
const ast_1 = require("./services/ast");
const config_1 = require("./services/config");
class Scout {
    constructor(params) {
        this.params = params;
        this.validateParams();
    }
    validateParams() {
        if (!this.params.configPath) {
            throw new Error('Path to config is not specified');
        }
    }
    getConfig() {
        const config = (0, config_1.getValidConfig)(this.params.configPath);
        if (!config) {
            throw new Error('Config file is not found in the root');
        }
        console.log('Found config:', JSON.stringify(config));
        return config;
    }
    analyze() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.getConfig();
            const apps = yield (0, apps_1.getApps)(this.params.configPath, config);
            const res = {};
            for (let [name, path] of Object.entries(apps)) {
                const components = yield (0, ast_1.buildStaticInsights)(path);
                res[name] = {
                    id: name,
                    components: Object.fromEntries(components)
                };
            }
            return res;
        });
    }
    saveToFile(destination, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, promises_1.writeFile)(destination, JSON.stringify(data, null, 2));
        });
    }
}
exports.Scout = Scout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBd0M7QUFDeEMsMENBQTBDO0FBQzFDLHdDQUFxRDtBQUNyRCw4Q0FBbUQ7QUFVbkQsTUFBYSxLQUFLO0lBQ2hCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2hDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUV4QixDQUFDO0lBQ08sY0FBYztRQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUVPLFNBQVM7UUFDZixNQUFNLE1BQU0sR0FBRyxJQUFBLHVCQUFjLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFBO1NBQ3hEO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3JELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFWSxPQUFPOztZQUNsQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFBLGNBQU8sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzRCxNQUFNLEdBQUcsR0FBbUIsRUFBRSxDQUFDO1lBQy9CLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUEseUJBQW1CLEVBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25ELEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRztvQkFDVixFQUFFLEVBQUUsSUFBSTtvQkFDUixVQUFVLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUM7aUJBQzNDLENBQUE7YUFDRjtZQUNELE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztLQUFBO0lBRVksVUFBVSxDQUFDLFdBQWlCLEVBQUUsSUFBUzs7WUFDbEQsTUFBTSxJQUFBLG9CQUFTLEVBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7S0FBQTtDQUNGO0FBckNELHNCQXFDQyJ9