package com.myApps.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class TodoResource {

    @Autowired
    private TodoHardcodedService todoService;

    @GetMapping("/users/{username}/todos")
    public List<Todo> getAllTodos (@PathVariable String username){

        return todoService.findAll();
    }
    @DeleteMapping("users/{username}/todos/{id}")
    //ResponseEntity allows us to return specific status with no content
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
        Todo todo = todoService.deleteById(id);
        if(todo!=null){
            return ResponseEntity.noContent().build();
        }
            return ResponseEntity.notFound().build();
    }

    @GetMapping("users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id){
     return todoService.findById(id);
    }

    @PutMapping("/users/{username}/todos/{id}")
    //RequestBody - updated content
    public Todo updateTodo(
            @PathVariable String username,
            @PathVariable long id,
            @RequestBody Todo todo){
        Todo todoUpdated = todoService.save(todo);

    return todo;
    }

    @PostMapping("/users/{username}/todos")
    //RequestBody - updated content
    public ResponseEntity<Void> updateTodo(@PathVariable String username, @RequestBody Todo todo){
        Todo createdTodo = todoService.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
