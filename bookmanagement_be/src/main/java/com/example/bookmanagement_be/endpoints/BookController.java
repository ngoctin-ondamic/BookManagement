package com.example.bookmanagement_be.endpoints;

import com.example.bookmanagement_be.entities.Book;
import com.example.bookmanagement_be.services.book.BookServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/book")
@RequiredArgsConstructor
@Slf4j
public class BookController {

    private final BookServiceImpl bookService;

    @PostMapping("/save")
    public ResponseEntity<Book> createNewBook(@RequestBody Book book) {
        // call service to create
        if(bookService.validateInput(book)){
            log.info("Create {} Successfully !",book.toString());
            return ResponseEntity.ok().body(bookService.createBook(book));
        }else{
            return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).build();
        }
    }

}
