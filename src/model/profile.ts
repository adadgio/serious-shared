export class Reaction
{
    uuid: string
    socketId: string
    nickname: string
    gender: string
    
    constructor(data?: any)
    {
        if (data) {
            for (let prop in data) {
                if (data.hasOwnProperty(prop) && this.hasOwnProperty(prop)) {
                    this[prop] = data[prop]
                }
            }
        }
    }

    valid()
    {
        return typeof(
            this['uuid'] !== 'string'
        ) ? true : false
    }
}
