const isObjNotEmpty = <T> (obj: T | {}): obj is T =>
    Object.getOwnPropertyNames(obj).length !==0;

export { isObjNotEmpty };