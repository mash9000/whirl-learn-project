export interface IBuildAndPoweredData {
    getBuilt(): { name: string, link: URL };

    getPower(): { title: string, link: URL };
}