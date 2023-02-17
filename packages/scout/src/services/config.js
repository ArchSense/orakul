"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValidConfig = void 0;
const path_1 = __importDefault(require("path"));
const CONFIG_FILE_NAME = 'scout.json';
const isValidConfig = (config) => {
    if (!config.id) {
        throw new Error('Config is missing id');
    }
    if (!config.src) {
        throw new Error('Config is missing `src` path');
    }
    return true;
};
const completeConfig = (config) => {
    return Object.assign({ exclude: [] }, config);
};
const loadConfigFile = (root) => {
    let config;
    try {
        config = require(path_1.default.resolve(root, CONFIG_FILE_NAME));
    }
    catch (error) {
        throw new Error('Config file is not found in the root');
    }
    return config;
};
const getValidConfig = (root) => {
    let config = loadConfigFile(root);
    if (isValidConfig(config)) {
        return completeConfig(config);
    }
    return null;
};
exports.getValidConfig = getValidConfig;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdEQUF3QjtBQUd4QixNQUFNLGdCQUFnQixHQUFHLFlBQVksQ0FBQztBQUV0QyxNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQWMsRUFBVyxFQUFFO0lBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFO1FBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0tBQ3pDO0lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7UUFDZixNQUFNLElBQUksS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUM7S0FDakQ7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBYyxFQUFVLEVBQUU7SUFDaEQsdUJBQ0UsT0FBTyxFQUFFLEVBQUUsSUFDUixNQUFNLEVBQ1Y7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLGNBQWMsR0FBRyxDQUFDLElBQVksRUFBVSxFQUFFO0lBQzlDLElBQUksTUFBTSxDQUFDO0lBQ1gsSUFBSTtRQUNGLE1BQU0sR0FBRyxPQUFPLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0tBQ3hEO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7S0FDekQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUE7QUFFTSxNQUFNLGNBQWMsR0FBRyxDQUFDLElBQVksRUFBaUIsRUFBRTtJQUM1RCxJQUFJLE1BQU0sR0FBRyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekIsT0FBTyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQU5XLFFBQUEsY0FBYyxrQkFNekIifQ==