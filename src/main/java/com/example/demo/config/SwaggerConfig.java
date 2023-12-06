package com.example.demo.config;


import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;


@OpenAPIDefinition(
        info = @Info(title = "User-Service API 명세서",
                description = "사용자 어플 서비스 API 명세서",
                version = "v1"))
@Configuration
public class SwaggerConfig {

//    @Bean
//    public OpenAPI openAPI(){
//        SecurityScheme securityScheme = new SecurityScheme()
//                .type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")
//                .in(SecurityScheme.In.HEADER).name("Authorization");
//        SecurityRequirement securityRequirement = new SecurityRequirement().addList("bearerAuth");
//
//        return new OpenAPI()
//                .components(new Components().addSecuritySchemes("bearerAuth", securityScheme))
//                .security(Arrays.asList(securityRequirement));
//    }

    @Bean
    public GroupedOpenApi group1() {
        return GroupedOpenApi.builder()
                .group("그룹1")
                .pathsToMatch("/api/**")
                // .packagesToScan("com.example.swagger") // package 필터 설정
                .build();
    }

    @Bean
    public GroupedOpenApi group2() {
        return GroupedOpenApi.builder()
                .group("그룹2")
                .pathsToMatch("/api/v1/**")
                .build();
    }

    @Bean
    public OpenAPI openAPI() {
        // SecuritySecheme명
        String jwtSchemeName = "jwtAuth";
        // API 요청헤더에 인증정보 포함
        SecurityRequirement securityRequirement = new SecurityRequirement().addList(jwtSchemeName);
        // SecuritySchemes 등록
        Components components = new Components()
                .addSecuritySchemes(jwtSchemeName, new SecurityScheme()
                        .name(jwtSchemeName)
                        .type(SecurityScheme.Type.HTTP) // HTTP 방식
                        .scheme("bearer")
                        .bearerFormat("JWT")); // 토큰 형식을 지정하는 임의의 문자(Optional)

        return new OpenAPI()
                .addSecurityItem(securityRequirement)
                .components(components);
    }

}