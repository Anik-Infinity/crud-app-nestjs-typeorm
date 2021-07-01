import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { Contact } from '../contact.entity';
import { ContactsService } from './contacts.service';

// route to handle all the user-contacts related incoming requests
@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) { }
  // read all the user-contacts data from the db
  @Get()
  index(): Promise<Contact[]> {
    return this.contactsService.findAll();
  }
  // create a new user-contact
  @Post('create')
  @UsePipes(new ValidationPipe())
  async create(@Body() contactData: Contact): Promise<any> {
    return this.contactsService.create(contactData);
  }
  // update an existing user-contact by id
  @Put(':id/update')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
    contactData.id = Number(id);
    console.log('Update #' + contactData.id)
    return this.contactsService.update(contactData);
  }
  // delete an existing user-contact by id
  @Delete(':id/delete')
  @UsePipes(new ValidationPipe())
  async delete(@Param('id') id): Promise<any> {
    return this.contactsService.delete(id);
  }
}
