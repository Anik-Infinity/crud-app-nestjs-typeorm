import { Injectable } from '@nestjs/common';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from '../contact.entity';

/* service code to process user-contact data
// and provide an interface to the contact controller */
@Injectable()
export class ContactsService {
    constructor(@InjectRepository(Contact) private contactRepository: Repository<Contact>,) {

    }
    // read all the user-contact data from db
    async findAll(): Promise<Contact[]> {
        return this.contactRepository.find();
    }
    // create a new user-contact
    async create(contact: Contact): Promise<Contact> {
        return this.contactRepository.save(contact);
    }
    // update an existing user-contact by id
    async update(contact: Contact): Promise<UpdateResult> {
        return this.contactRepository.update(contact.id, contact);
    }
    // delete an existing user-contact by id
    async delete(id): Promise<DeleteResult> {
        return this.contactRepository.delete(id);
    }
}
