package com.peterson.helpdesk.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import com.peterson.helpdesk.domain.Tecnico;

public interface TecnicoRepository extends JpaRepository<Tecnico, Integer> {

}
