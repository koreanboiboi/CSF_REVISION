package practice.day36.server.repositories;

public interface Queries {

    public String SQL_SELECT_BOOKS = "select * from book2018 limit 20";
    public String SQL_SELECT_BOOK_BY_BOOKID = "select * from book2018 where book_id = ?";
    
}
