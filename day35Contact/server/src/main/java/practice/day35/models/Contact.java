package practice.day35.models;

import org.springframework.util.MultiValueMap;

import jakarta.json.Json;
import jakarta.json.JsonObject;

public class Contact {

    private String name;
    private String phone;
    private String email;

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString(){
        return "name=%s, phone=%s, email=%s".formatted(name,phone,email);
    }

    public JsonObject toJson(){
        return Json.createObjectBuilder()
        .add("name", name)
        .add("phone", phone)
        .add("email",email)
        .build();
    }

    public static Contact create(MultiValueMap<String, String> form) {
        Contact contact = new Contact();
        contact.setName(form.getFirst("name"));
        contact.setEmail(form.getFirst("email"));
        contact.setPhone(form.getFirst("phone"));

        return contact;
    }
    
    
}
