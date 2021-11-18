package com.example.bookmanagement_be.services.book;

import com.example.bookmanagement_be.entities.Book;

public interface BookService {
    Book createBook(Book book);
    boolean validateInput(Book book);
}
