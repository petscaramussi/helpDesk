package com.peterson.helpdesk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.peterson.helpdesk.domain.Pessoa;

public interface PessoaRepository extends JpaRepository<Pessoa, Integer> {

}
