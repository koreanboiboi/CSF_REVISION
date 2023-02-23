package practice.day39.server.models;

import java.util.Date;

import org.bson.Document;

public class Post {

    private String postId;
    private Date postDate;
    private int userId;
    private String email;
    private String name;
    private String title;
    private String text;
    private String imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png";
    private int like = 0;
    private int dislike = 0;

    public String getPostId() {
        return postId;
    }
    public void setPostId(String postId) {
        this.postId = postId;
    }
    public Date getPostDate() {
        return postDate;
    }
    public void setPostDate(Date postDate) {
        this.postDate = postDate;
    }
    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }
    public String getImageUrl() {
        return imageUrl;
    }
    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
    public int getLike() {
        return like;
    }
    public void setLike(int like) {
        this.like = like;
    }
    public int getDislike() {
        return dislike;
    }
    public void setDislike(int dislike) {
        this.dislike = dislike;
    }
    
    public void now() {
        this.setPostDate(new Date());
    }

    public Document toDocument() {
		Document document = new Document();
		document.put("postId", postId);
		document.put("postDate", postDate);
		document.put("userId", userId);
		document.put("email", email);
		document.put("name", name);
		document.put("title", title);
		document.put("text", text);
		document.put("imageUrl", imageUrl);
		return document;
	}

	public static Post create(Document doc) {
		Post post = new Post();
		post.setPostId(doc.getString("postId"));
		post.setPostDate(doc.getDate("postDate"));
		post.setUserId(doc.getInteger("userId"));
		post.setName(doc.getString("name"));
		post.setEmail(doc.getString("email"));
		post.setTitle(doc.getString("title"));
		post.setText(doc.getString("text"));
		post.setImageUrl(doc.getString("imageUrl"));
		return post;
	}

    
}
