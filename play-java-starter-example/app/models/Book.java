package models;

public class Book {

    private String title;

    private Integer id;


    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }




    public Book(String title, Integer id) {
        this.title = title;
        this.id = id;
    }
    public Book(){

    }

}
