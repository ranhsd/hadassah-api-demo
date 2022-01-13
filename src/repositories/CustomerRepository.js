import BaseRepository  from "./BaseRepository";

export default class CustomerRepository extends BaseRepository {
    constructor() {
        super("Customers");
    }

    async getAll() {
        const data = await super.getAll();

        return data?.value;
    }
}