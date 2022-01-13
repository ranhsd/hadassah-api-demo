import client from "./clients/rest";


export default class BaseRepository { 
    constructor(resource){
        this.resource = resource;
    }

    async getAll(params){

        const { data } = await client.get(this.resource, {
            params
        });

        return data;
    }

}