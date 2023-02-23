package com.peterson.helpdesk.repositories;

import com.peterson.helpdesk.domain.Chamado;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChamadoRepository extends JpaRepository<Chamado, Integer> {

}
