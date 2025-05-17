# Portfolio Website

A modern, responsive portfolio website showcasing my professional experience and projects.

## Live Demo

Visit the live website: [Portfolio Website](https://hadeer-elsaeed.github.io/portofolio)

## Project Structure

```
portfolio/
├── index.html        # Main HTML file
├── css/
│   └── style.css    # Custom styles
├── js/
│   ├── main.js      # Main JavaScript file
│   └── data.js      # Content data
└── images/          # Project and profile images
```

## Features

- Modern and responsive design
- Hot pink theme with smooth animations
- Professional experience showcase
  - Trufla Technology
  - Swira Designs
- Project portfolio
- Skills and technologies
- Contact information

## Technologies Used

- HTML5
- CSS3 (with animations)
- JavaScript (ES6+)
- Docker with Nginx for deployment

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/Hadeer-Elsaeed/portfolio.git
cd portfolio
```

2. Using Docker:
```bash
docker-compose up --build
```
The site will be available at `http://localhost`

3. Without Docker:
- Simply open `index.html` in your browser
- Or use a local server like Python's `http.server`:
  ```bash
  python -m http.server 8000
  ```
  Then visit `http://localhost:8000`

## Deployment

The website is containerized using Docker and served with Nginx:

1. The Nginx configuration handles:
   - Static file serving
   - Proper MIME types
   - Caching headers
   - Compression

2. To deploy to production:
   - Push changes to GitHub
   - Configure your hosting provider
   - Deploy the Docker container

## Contact

- GitHub: [Hadeer-Elsaeed](https://github.com/Hadeer-Elsaeed) 