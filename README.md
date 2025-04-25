# 📦 Datenbankbasierte Webanwendung (MySQL + Angular)

Dies ist eine Webanwendung, die im Rahmen des Kurses **„Datenbankbasierte Webanwendung“** entwickelt wurde. Die Anwendung basiert auf einer MySQL-Datenbank im Backend und verwendet Angular für das Frontend.

---

## 📑 Projektübersicht

Ziel ist die Entwicklung einer voll funktionsfähigen datenbankgestützten Webanwendung mit CRUD-Funktionalitäten, Authentifizierung und sauberer Trennung zwischen Frontend und Backend.

---

## 🚧 Projektphasen

### 1. Anforderungsanalyse
- Definition der Zielgruppe und der Use Cases
- Erhebung funktionaler und nicht-funktionaler Anforderungen
- Erstellung eines Anforderungskatalogs

### 2. Konzeption & Architektur
- Entwurf des Datenmodells (ER-Diagramm, relationale Tabellenstruktur)
- Aufteilung in Frontend (Angular), Backend (z. B. Node.js/Spring), Datenbank (MySQL)
- Definition von REST-API-Endpunkten
- Sicherheitskonzept (z. B. Authentifizierung, Rollen)

### 3. Datenbankdesign (MySQL)
- Tabellenstruktur mit Primär- und Fremdschlüsseln
- Normalisierung der Datenbank
- SQL-Skripte zur Erstellung & Initialbefüllung
- Performance-Optimierung (Indexes, Views)

### 4. Backend-Implementierung
- Aufbau der REST-API
- CRUD-Logik für alle Ressourcen
- Verbindung zur MySQL-Datenbank
- Authentifizierungs- & Autorisierungssystem (JWT, Bcrypt)

### 5. Frontend-Implementierung (Angular)
- Aufbau der Angular-Komponentenstruktur
- Anbindung an die REST-API mit `HttpClient`
- Benutzeroberfläche mit Formularen & Validierung
- Authentifizierte Routen & Guards
- Responsives UI mit Angular Material/Bootstrap

### 6. Testphase
- Unit-Tests (Frontend & Backend)
- Integrationstests
- Datenbanktests (z. B. Constraints, Query-Tests)
- Manuelles UI-Testing

### 7. Deployment
- Build-Prozesse (Angular + Backend)
- Bereitstellung auf Webserver / Docker / lokal
- Konfiguration von Umgebungsvariablen & Sicherheitseinstellungen
- Optional: Hosting auf Plattformen wie Vercel, Firebase, Render, etc.

### 8. Dokumentation & Präsentation
- Projektdokumentation (PDF/Markdown)
- API-Dokumentation (OpenAPI/Postman)
- Anleitung zur lokalen Ausführung
- Präsentation/Demo für Stakeholder oder Bewertung

---

## ⚙️ Technologien

| Bereich    | Technologie       |
|-----------|-------------------|
| Frontend  | Angular            |
| Backend   | Node.js / Spring Boot *(je nach Projekt)* |
| Datenbank | MySQL              |
| Auth      | JWT / Bcrypt       |
| Tools     | Postman, Git, Docker, VS Code |

---

## 🛠️ Lokale Installation

```bash
# 1. Repo klonen
git clone https://github.com/DEINUSERNAME/dein-projekt.git

# 2. Frontend starten
cd frontend
npm install
ng serve

# 3. Backend starten
cd backend
npm install
npm start

# 4. MySQL-DB vorbereiten
# Importiere das SQL-Skript aus /database/init.sql
