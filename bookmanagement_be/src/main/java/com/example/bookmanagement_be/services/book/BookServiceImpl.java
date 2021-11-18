package com.example.bookmanagement_be.services.book;

import com.example.bookmanagement_be.entities.Book;
import com.example.bookmanagement_be.repos.book.BookRepo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class BookServiceImpl implements BookService {

    private final BookRepo bookRepo;

    @Override
    public Book createBook(Book book) {
        // call repos to create book
        try {
            log.info("Create Book {} Successfully !", book);
            bookRepo.save(book);
            return book;
        } catch (Exception exception) {
            log.info("Create Book Successfully !");
            return null;
        }
    }

    @Override
    public boolean validateInput(Book book) {
        System.out.println(book);
        if (book.getName().isEmpty()
                || book.getAuthor().isEmpty()
        ) {
            return false;
        }
        return true;
    }
}
