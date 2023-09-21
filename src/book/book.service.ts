import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { threadId } from 'worker_threads';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books:CreateBookDto [] = [];

  addBook(book:CreateBookDto) : string{
    book.id = uuidv4();
    this.books.push(book);
    return "book has been added";
  }

  findAll(): CreateBookDto[] {
    return this.books;
  }

  findOne(id: string) {
    return `This action returns a #${id} book`;
  }

  update(book: CreateBookDto ):string {
    let index = this.books.findIndex((currentbook)=>{
      return currentbook.id = book.id;
    });
    this.books[index] = book;
    return `This action updates a book`;
  }

  delete(id: string) {
    this.books = this.books.filter((book)=>{
      return book.id != id;
    })
    return `This action removes a book`;
  }
}
