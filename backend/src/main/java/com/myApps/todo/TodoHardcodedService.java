package com.myApps.todo;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
@Service
public class TodoHardcodedService {
    private static List<Todo> todos = new ArrayList();
    private static int counter = 0;
static {
    todos.add(new Todo(++counter, "marta", "dancing", new Date(), false));

    todos.add(new Todo(++counter, "marta", "playing", new Date(), false));

    todos.add(new Todo(++counter, "marta", "singing", new Date(), false));
}
public List<Todo> findAll(){
    return todos;
}
}