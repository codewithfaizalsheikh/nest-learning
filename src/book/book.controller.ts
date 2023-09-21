import { Controller, Get, Post, Body, Patch, Param, Delete,Put } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post("/add")
  create(@Body() book: CreateBookDto) {
    return this.bookService.addBook(book);
  }

  @Get("/get")
  findAll() : CreateBookDto[] {
    return this.bookService.findAll();
  }

  @Get('/findone/:id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(id);
  }

  @Put ('/update')
  update(@Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(updateBookDto);
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string) {
    return this.bookService.delete(id);
  }
}
