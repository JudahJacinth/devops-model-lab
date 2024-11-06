FROM openjdk:21

WORKDIR /app

COPY ./target/bmiApp.jar /app

EXPOSE 8080

CMD ["java", "-jar", "bmiApp.jar"]