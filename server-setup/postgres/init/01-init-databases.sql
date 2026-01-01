-- Script para crear múltiples bases de datos
-- Se ejecuta automáticamente al iniciar PostgreSQL por primera vez

-- Crear bases de datos
CREATE DATABASE n8n_db;
CREATE DATABASE evolution_db;
CREATE DATABASE chatwoot_production;

-- Habilitar extensión pgvector en todas las DBs
\c main_db
CREATE EXTENSION IF NOT EXISTS vector;

\c n8n_db
CREATE EXTENSION IF NOT EXISTS vector;

\c evolution_db
CREATE EXTENSION IF NOT EXISTS vector;

\c chatwoot_production
CREATE EXTENSION IF NOT EXISTS vector;
