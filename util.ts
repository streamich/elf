
export function noop() {}


export function extend<T> (obj1: T, obj2: T, ...objs: T[]): T {
    if(typeof obj2 === 'object') for(var i in obj2) obj1[i] = obj2[i];

    if(objs.length) return extend.apply(null, [obj1, ...objs]);
    else return obj1;
}


export class UInt64 {

    static hi(a: number, lo: number = UInt64.lo(a)): number {
        var hi = a - lo;
        hi /= 4294967296;
        if ((hi < 0) || (hi >= 1048576)) throw Error (`Not an int52: ${a}`);
        return hi;
    }

    static lo(a: number): number {
        var lo = a | 0;
        if (lo < 0) lo += 4294967296;
        return lo;
    }

    static joinToNumber(hi: number, lo: number): number {
        // if ((lo !== lo|0) && (lo !== (lo|0) + 4294967296))  throw new Error ("lo out of range: "+lo);
        // if ((hi !== hi|0) && hi >= 1048576)                 throw new Error ("hi out of range: "+hi);

        if (lo < 0) lo += 4294967296;
        return hi * 4294967296 + lo;
    }
}
