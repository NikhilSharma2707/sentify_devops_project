
# 🚀 SENTIFY – DevOps Implementation

**Sentify** is a full-stack review analytics platform designed to analyze e-commerce product and vendor feedback using natural language processing. This repository outlines the DevOps implementation including CI/CD, infrastructure automation, monitoring, and security.

---

## 📌 Project Overview

- **Problem Statement:**  
  Manually analyzing customer feedback and vendor performance is time-consuming and inefficient in e-commerce. Sentify solves this with automated sentiment and trend analysis.

- **Objective:**  
  To automate the deployment, monitoring, and security of a multi-service application (Frontend, Backend, ML) using DevOps practices.

- **Scope:**  
  - Backend (Node.js + MongoDB)
  - Frontend (React)
  - ML Service (Python + NLP)
  - CI/CD with GitHub Actions
  - Containerization with Docker
  - Infrastructure setup with Terraform & Ansible
  - Monitoring with Prometheus & Grafana
  - Security Scanning with Trivy

---

## 🛠️ Tech Stack

| Area              | Tools/Tech Used                                   |
|-------------------|---------------------------------------------------|
| Version Control   | Git + GitHub                                      |
| CI/CD             | GitHub Actions                                    |
| IaC               | Terraform, Ansible, Docker                        |
| Deployment        | AWS EC2                                           |
| Monitoring        | Prometheus, Grafana                               |
| Logging           | Docker Logging with Rotation                      |
| Security          | Trivy                                             |

---

## 📦 Folder Structure

```
sentify-devops/
│
├── backend/                 # Node.js API service
├── frontend/                # React web frontend
├── ml/                      # Python ML sentiment service
│
├── .github/workflows/       # GitHub Actions CI/CD
├── sentify-infra/           # Terraform scripts
├── ansible/                 # Ansible playbooks
├── monitoring-logs/         # Monitoring & logging setup (Prometheus, Grafana, Loki)
└── README.md
```

---

## ⚙️ Deployment Steps

### ✅ 1. Infrastructure Setup
Provisioned EC2 instances using Terraform for:
- Backend Service
- Frontend Service
- ML Service

```bash
terraform init
terraform apply
```

### ✅ 2. Configuration Management
Used Ansible to install:
- Docker
- Docker Compose
- System dependencies on all EC2 instances

```bash
ansible-playbook -i inventory.ini setup.yml
```

### ✅ 3. Dockerization & Deployment
Each service contains a Dockerfile and is deployed via:

```bash
docker build -t sentify-backend .
docker run -d -p 5000:5000 sentify-backend
```

### ✅ 4. CI/CD with GitHub Actions
- Automatic deployment using SCP and SSH after pushing to the main branch.
- Separate jobs for backend, frontend, and ML folders.

---

## 📊 Monitoring & Logging

### Monitoring
- **Prometheus** scrapes metrics from Node Exporter and cAdvisor.
- **Grafana** visualizes dashboards (uptime, CPU, memory usage, containers).

### Logging
- Used **Docker's built-in json-file logging** with rotation.
- Logs can be inspected using `docker logs <container-name>`.

---

## 🔐 Security & DevSecOps

### Tools Used
- **Trivy**: Scans Docker images for known vulnerabilities.

```bash
trivy image sentify-backend
```

### Security Policies
- Regular image scanning in CI
- Only required ports exposed
- Minimal Docker images used
- Environment variables stored securely

---

## ✅ Status Report

| Task                     | Status         |
|--------------------------|----------------|
| Feature Implementation   | ✅ Completed    |
| CI/CD Pipeline           | ✅ Completed    |
| Infrastructure Setup     | ✅ Completed    |
| Monitoring & Logging     | ✅ Completed    |
| Security Implementation  | ✅ Completed    |

---

## 🧠 Learnings

- Mastered Infrastructure as Code (Terraform + Ansible)
- Learned container orchestration and lightweight monitoring techniques
- Automated full-stack deployment pipelines
- Implemented secure image scanning workflows

---

## 📅 Upcoming Improvements

- Finalize centralized logging with Loki or lightweight alternative
- Add test coverage to CI
- Automate ML model refresh and batch sentiment scoring

---

## 👤 Author

- [**Manish Kumar**](https://github.com/its-manishks)
- [**Nikhil Sharma**](https://github.com/NikhilSharma2707)

---
