package com.example.todoapp.service;

import com.example.todoapp.model.Todo;
import com.example.todoapp.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> getAllTodos() {
        return todoRepository.findAll();
    }

    public Optional<Todo> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

    public Todo createTodo(Todo todo) {
        todo.setCreatedAt(LocalDateTime.now());
        todo.setUpdatedAt(LocalDateTime.now());
        return todoRepository.save(todo);
    }

    public Optional<Todo> updateTodo(Long id, Todo todoDetails) {
        return todoRepository.findById(id)
                .map(todo -> {
                    todo.setTitle(todoDetails.getTitle());
                    todo.setDescription(todoDetails.getDescription());
                    todo.setCompleted(todoDetails.isCompleted());
                    todo.setUpdatedAt(LocalDateTime.now());
                    return todoRepository.save(todo);
                });
    }

    public void deleteTodo(Long id) {
        todoRepository.deleteById(id);
    }

    public Optional<Todo> toggleTodoStatus(Long id) {
        return todoRepository.findById(id)
                .map(todo -> {
                    todo.setCompleted(!todo.isCompleted());
                    todo.setUpdatedAt(LocalDateTime.now());
                    return todoRepository.save(todo);
                });
    }
} 