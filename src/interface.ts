

export interface order_status {
    laserscribing_done: [number],
    backcontacting_done: [number],
    inkjetting_done: [number],
    silverprint_done: [number],
    encapsulation_done: [number],
    iv_measurement_done: [number],
    modules_above_threashold : [number],
    modules_below_threashold : [number]

}
export interface min_max {
    min: number,
    max: number
}
export interface x_y {
    x: number,
    y: number
}
export interface webpos {
    web_id: number,
    web_pos: number,
    offset: x_y
}

export interface module_reqirements {
    illumination?: number,
    voc?: min_max,
    isc?: min_max,
    vmpp?: min_max,
    impp?: min_max,
    pmpp?: min_max
}
export interface module_order {
    id?: string,
    date?: string,
    name: string,
    batchfile:string,
    amount:number,
    requirements?: module_reqirements
    modules ?: [module_data]
    batches ?: [batch_data]

}
export interface batch_data {
    id?: string,
    order_id?: number,
    modules?: [module_data]
}

export interface module_data {
    id?: string,
    batchfile?:string,
    order_id?: number,
    name?: string,
    web_data?: webpos
}

export function init_module_order()
{
    let order: module_order = {
        id : "0",
        date : Date.now().toString(),
        name : "",
        batchfile :"",
        amount: -1

    }
    return order
}

export function init_requirements()
{
    let requirements: module_reqirements = {
    }
    return requirements
}
export function init_module_data()
{
    let data: module_data = {
    }
    return data
}
export function init_batch_data()
{
    let data: module_data = {
    }
    return data
}