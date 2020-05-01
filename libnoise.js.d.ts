//
// export namespace LibNoise {
//
//     export class Perlin {}
// }

/******************************************************************
 * Typescript type definitions for libnoise.js
 *
 *****************************************************************/


interface LibNoiseInterface {
    Perlin: typeof LibNoiseFunction.Perlin;
}

declare function LibNoiseFunction(): Promise<LibNoiseInterface>;

export = LibNoiseFunction;

declare namespace LibNoiseFunction {

    export class Module {

        GetSourceModule(index: number): Module;
        GetSourceModuleCount(): number;
        GetValue(x: number, y: number, z: number): number;
        SetSourceModule(index: number, sourceModule: Module): void;
    }

    // todo: ControlPoint (Struct)
    // TODO: Abs
    // TODO: Add

    export class Billow {

    }

    // todo: Blend
    // todo: cache
    // todo: checkerboard
    // todo: clamp

    export class Const {

    }

    // todo: Curve
    // todo: cylinders
    // todo: displace
    // todo: exponent
    // todo: invert
    // todo: max
    // todo: min

    export class Multiply {

    }

    export class Perlin extends Module {
        constructor();
        GetValue(x: number, y: number, z: number): number;
    }

    // todo: Power
    // todo: RidgedMulti
    // todo: RotatePoint
    // todo: ScaleBias
    // todo: ScalePoint
    // todo: Select
    // todo: spheres
    // todo: terrace
    // todo: TranslatePoint
    // todo: turbulence
    // todo: voronoi

    export class Plane {

    }

    // todo: model::Sphere
    // todo: model::Line
    // todo: model::Cylinder
}
