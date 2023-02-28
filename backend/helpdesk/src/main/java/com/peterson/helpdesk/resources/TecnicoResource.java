package com.peterson.helpdesk.resources;

import com.peterson.helpdesk.domain.Tecnico;
import com.peterson.helpdesk.services.TecnicoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/tecnicos")
public class TecnicoResource {

    // localhost:8080/tecnicos

    @Autowired
    private TecnicoService service;

    @GetMapping(value = "/{id}")
    public ResponseEntity<Tecnico> findById(@PathVariable Integer id) {
        Tecnico obj = this.service.findById(id);
        return ResponseEntity.ok().body(obj);
    }

}
