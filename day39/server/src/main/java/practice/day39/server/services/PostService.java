package practice.day39.server.services;

import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import practice.day39.server.models.Post;
import practice.day39.server.models.User;
import practice.day39.server.repositories.ImageRepository;
import practice.day39.server.repositories.PostRepository;
import practice.day39.server.repositories.UserRepository;
import practice.day39.server.repositories.VoteRepository;

@Service
public class PostService {

	private Logger logger = Logger.getLogger(PostService.class.getName());

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private ImageRepository imageRepo;

    @Autowired
    private PostRepository postRepo;

    @Autowired
    private VoteRepository voteRepo;

    public void like(String postId) {
        voteRepo.like(postId);
    }
    public void dislike(String postId){
        voteRepo.dislike(postId);
    }

    public Optional<String> createPost(Post post, MultipartFile file){

        Optional<User> opt = userRepo.findUserByEmail(post.getEmail());
        if(opt.isEmpty())
            return Optional.empty();

        User user = opt.get();
        post.setName(user.getName());
        post.setUserId(user.getUserId());

        post.now();

        String postId = UUID.randomUUID().toString().substring(0,8);

        imageRepo.upload(post, file);

        ObjectId objectId = postRepo.insertPost(post);

        logger.log(Level.INFO, "postID: %s -> _id: %s".formatted(postId, objectId.toString()));

        voteRepo.initialize(postId);

        return Optional.of(postId);
    }

    public Optional<Post> getPost(String postId) {

        Optional<Post> opt = postRepo.getPost(postId);
        if(opt.isEmpty())
        return Optional.empty();

        Map<String, Integer> votes = voteRepo.getVotes(postId);

        Post post = opt.get();
        post.setLike(votes.get("like"));
        post.setDislike(votes.get("dislike"));

        return Optional.of(post);
    }
    
}
