import type { JestConfigWithTsJest } from 'ts-jest';

const jestConfig: JestConfigWithTsJest = {
    preset: 'ts-jest/presets/default-esm',
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1'
    },
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                useESM: true
            }
        ]
    },
    testEnvironment: 'node',
    testRegex: './src/.*\\.(test|spec)?\\.(js|ts)$',
    moduleFileExtensions: ['ts', 'js', 'json'],
    roots: ['<rootDir>/src']
};

export default jestConfig;
