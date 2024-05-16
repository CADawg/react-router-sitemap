declare module '@snaddyvitch-dispenser/react-router-sitemap' {
    export default class Sitemap {
        constructor(app: any);
        applyParams(params: any): this;
        filterPaths(filter: any): this;
        build(url: string): this;
        save(path: string): this;
    }
}