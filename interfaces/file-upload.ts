



export interface fileUpload{
    name: string;
    data: any;
    encoding: string;
    tempFilePa: string;
    truncated: boolean;
    mimetype: string;

    mv: Function;

}