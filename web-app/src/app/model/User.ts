import { Deserializable } from './Deserializable';

export class User implements Deserializable {

    username: String;
    password: String;
    userId?: String;
    email?: String;
    name?: String;
    dob?: Date;
    role?: String;

    constructor() {
        this.userId = '';
        this.username = '';
        this.password = '';
        this.email = '';
        this.name = '';
        this.dob = new Date();
        this.role = '';
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}