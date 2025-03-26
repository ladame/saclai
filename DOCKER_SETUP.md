# Saclai Website - Docker Deployment Guide

This guide explains how to deploy the Saclai website using Docker on your own host machine.

## Prerequisites

- Docker and Docker Compose installed on your host machine
- Git (to clone the repository)

## Deployment Steps

### 1. Clone the Repository

```bash
git clone https://github.com/ladame/saclai.git
cd saclai
```

### 2. Build and Run with Docker Compose

```bash
docker-compose up -d
```

This command will:
- Build the Docker image using the Dockerfile
- Start the container in detached mode
- Map port 5000 of the container to port 5000 on your host

### 3. Access the Website

Once the container is running, you can access the website by navigating to:

```
http://localhost:5000
```

or if deploying on a server with a domain name:

```
http://your-domain-name:5000
```

### 4. Stopping the Container

To stop the running container:

```bash
docker-compose down
```

## Troubleshooting

If you encounter any issues:

1. Check logs:
```bash
docker-compose logs
```

2. Rebuild the container:
```bash
docker-compose up -d --build
```

3. Check if the port is already in use:
```bash
lsof -i :5000
```

## Configuration

The application uses port 5000 by default. If you need to use a different port, edit the `docker-compose.yml` file and change both the host and container port numbers.

For example, to use port 8080 instead:

```yaml
ports:
  - "8080:5000"
```

This will map the container's port 5000 to port 8080 on your host machine.