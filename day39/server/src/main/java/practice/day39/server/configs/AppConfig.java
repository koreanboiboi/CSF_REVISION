package practice.day39.server.configs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.redis.connection.RedisStandaloneConfiguration;
import org.springframework.data.redis.connection.jedis.JedisClientConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;

@Configuration
public class AppConfig {
    //awsS3
    @Value("{spaces.secret.key}")
    private String spacesSecretKey = "iqgJiNwXMEiXIImG3q/lQ0Q7C2MIluEPPfE+01fDYcg";

    @Value("{spaces.access.key}")
    private String spacesAccessKey = "DO00D3ZPA8KJ9M73PMFT";

    @Value("{spaces.endpoint.url}")
    private String spacesEndpointUrl ="sgp1.digitaloceanspaces.com";

    @Value("{spaces.endpoint.region}")
    private String spacesRegion ="sgp1";

    //Redis
    @Value("${spring.redis.host}")
	private String redisHost = "localhost";
	@Value("${spring.redis.port}")
	private int redisPort = 6379;
	@Value("${spring.redis.database}")
	private int redisDatabase = 0;
    
    // mongo
	@Value("${spring.mongo.url}")
	private String mongoUrl ="mongodb://localhost:27017/articles";

    @Bean
    public AmazonS3 createS3Client(){
        BasicAWSCredentials cred = new BasicAWSCredentials(spacesAccessKey, spacesSecretKey);
        EndpointConfiguration epConfig = new EndpointConfiguration(spacesEndpointUrl, spacesAccessKey);


        return AmazonS3ClientBuilder.standard()
        .withEndpointConfiguration(epConfig)
        .withCredentials(new AWSStaticCredentialsProvider(cred))
        .build();
    }

    @Bean("post")
	public RedisTemplate<String, String> createRedisTemplate() {
		final RedisStandaloneConfiguration config = new RedisStandaloneConfiguration(redisHost, redisPort);
		config.setDatabase(redisDatabase);

		final JedisClientConfiguration jedisClient = JedisClientConfiguration.builder()
				.build();
		final JedisConnectionFactory jedisFac = new JedisConnectionFactory(config, jedisClient);
		jedisFac.afterPropertiesSet();

		final RedisTemplate<String, String> template = new RedisTemplate<>();
		template.setConnectionFactory(jedisFac);
		template.setKeySerializer(new StringRedisSerializer());
		template.setValueSerializer(new StringRedisSerializer());
		template.setHashKeySerializer(new StringRedisSerializer());
		template.setHashValueSerializer(new StringRedisSerializer());
		return template;
	}

	@Bean
	public MongoTemplate createMongoTemplate() {
		MongoClient client = MongoClients.create(mongoUrl);
		return new MongoTemplate(client, "articles");
	}

}
