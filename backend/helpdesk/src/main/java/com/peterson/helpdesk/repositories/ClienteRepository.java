package com.peterson.helpdesk.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.peterson.helpdesk.domain.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
