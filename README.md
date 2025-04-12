# 📝 DillaSpell – Spelling Word Practice Sheet Generator

DillaSpell is a lightweight web app that lets teachers, parents, or students quickly turn a list of spelling words into a printable worksheet or downloadable PDF.

<p align="center">
  Example at: https://dilladev.github.io/dillaspell/ <br/><br/>
  <img src="https://github.com/user-attachments/assets/203f0949-4427-493d-861c-babbd3c9d33a" alt="DillaSpell screenshot" width="500" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/261d1d05-c49c-4f35-a55c-38c8f67d18f2" alt="DillaSpell printable page" width="500" />
</p>

You can:
- Paste or type a list of spelling words
- Automatically strip out numbering and formatting
- Export a clean PDF with handwriting lines for each word

## 🚀 Features

- Clean and responsive UI (built with Tailwind CSS)
- PDF export using `jsPDF`
- Ready for printing
- Runs as a Docker container

---

## 📦 Docker Deployment

DillaSpell can be deployed quickly using Docker Compose. Just copy this into a `docker-compose.yml` file:

```
services:
  fe:
    image: dilladev/dillaspell:1.0.0
    restart: always
    ports:
      - "3005:80"
    environment:
      - NODE_ENV=production
```

Then run:
```
docker-compose up -d
The app will be available at http://localhost:3005
```

## 🧪 Local Development
If you want to run the app locally for development:

```
# Clone the repo (if you haven't already)
git clone https://github.com/dilladev/dillaspell.git
cd dillaspell

# Install dependencies
npm install

# Run the app
npm run dev
```

## 🛠 Tech Stack
- React + TypeScript
- Tailwind CSS
- jsPDF
- Docker

## 📄 License
MIT License. Use freely, modify as needed.
