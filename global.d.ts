declare interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
}

declare interface ResponseModel {
    successful: boolean,
    message: string,
    data: any,
}

declare interface ActionFailModel {
    message: any;
}