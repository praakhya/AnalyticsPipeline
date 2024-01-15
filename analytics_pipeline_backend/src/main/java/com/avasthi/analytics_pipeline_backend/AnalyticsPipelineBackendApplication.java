package com.avasthi.analytics_pipeline_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(scanBasePackages = {"com.avasthi.analytics_pipeline_backend"})
@EnableMongoRepositories
public class AnalyticsPipelineBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AnalyticsPipelineBackendApplication.class, args);
	}

}
