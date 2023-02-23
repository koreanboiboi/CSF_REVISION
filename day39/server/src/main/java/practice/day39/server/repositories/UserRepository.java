package practice.day39.server.repositories;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Repository;

import practice.day39.server.models.User;

import static practice.day39.server.repositories.Queries.SQL_FIND_EMPLOYEES_BY_EMAIL;

@Repository
public class UserRepository {
    
    @Autowired
    private JdbcTemplate template;

    public Optional<User> findUserByEmail(String email){
        SqlRowSet rs = template.queryForRowSet(SQL_FIND_EMPLOYEES_BY_EMAIL,email);
        if (!rs.next())
            return Optional.empty();
        return Optional.of(User.create(rs));
    }
}
