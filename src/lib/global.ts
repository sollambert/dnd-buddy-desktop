export function cast<T>(obj: any, cl: { new(...args: any): T }): T {
    obj.__proto__ = cl.prototype;
    return obj;
}