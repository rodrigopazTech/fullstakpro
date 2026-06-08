CREATE DATABASE n8n_db;
CREATE DATABASE evolution_db;
CREATE DATABASE chatwoot_production;

\connect main_db;
CREATE EXTENSION IF NOT EXISTS vector;

\connect n8n_db;
CREATE EXTENSION IF NOT EXISTS vector;
