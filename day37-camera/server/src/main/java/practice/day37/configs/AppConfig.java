package practice.day37.configs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder.EndpointConfiguration;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class AppConfig {

    @Value("${ACCESS_KEY}")
    private String accessKey = "lOlw6QEY1Nie/MsKvcfFuMf/wF66rqlRf+CDkTzkptA";

    @Value("${SECRET_KEY}")
    private String secretKey = "DO00TRKDQ37WRGU4U69W";

    @Bean
    public AmazonS3 createS3Client() {
        BasicAWSCredentials cred = new BasicAWSCredentials(accessKey, secretKey);
        
        EndpointConfiguration ep = new EndpointConfiguration
        ("sgp1.digitaloceanspaces.com", "sgp1");

        return AmazonS3ClientBuilder.standard()
        .withEndpointConfiguration(ep)
        .withCredentials(new AWSStaticCredentialsProvider(cred))
        .build();
    }
    
}
