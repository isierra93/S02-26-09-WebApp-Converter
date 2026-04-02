package com.nocountry.videoconverter.configs;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.tags.Tag;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
@OpenAPIDefinition(
        servers = {
                @Server(url = "/", description = "Servidor configurado para uso en Proxy Inverso (HTTPS)")
        }
)
public class OpenApiConfig {

    @Bean
    public OpenAPI videoConverterOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("Video Converter API (Shortify)")
                        .description("API para automatización de conversión de video horizontal a vertical con IA. "
                                + "Permite subir videos, recortarlos opcionalmente, y convertirlos a formato vertical "
                                + "utilizando análisis de IA para centrar al sujeto principal.")
                        .version("1.0.0"))
                .tags(List.of(
                        new Tag().name("Conversions")
                                .description("Operaciones para subir videos y consultar el estado de las conversiones")
                ));
    }
}
