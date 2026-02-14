# Joos Soft Solutions - Website

## SEO Setup Anleitung

### 1. Bilder lokal hosten
Aktuell werden Bilder von `c.animaapp.com` geladen. Diese sollten lokal gehostet werden:

1. Laden Sie alle Bilder von den URLs herunter
2. Speichern Sie sie im Ordner `public/img/`
3. Ersetzen Sie alle URLs in den Komponenten durch lokale Pfade (z.B. `/img/icon.svg`)
4. Erstellen Sie ein `og-image.jpg` (1200x630px) für Social Media Sharing

### 2. EmailJS einrichten
Das Kontaktformular benötigt EmailJS:

1. Registrieren Sie sich auf [emailjs.com](https://www.emailjs.com/)
2. Erstellen Sie einen Email Service
3. Erstellen Sie ein Email Template
4. Ersetzen Sie in `src/sections/ContactSection/components/ContactForm.tsx`:
   - `YOUR_SERVICE_ID` mit Ihrer Service ID
   - `YOUR_TEMPLATE_ID` mit Ihrer Template ID
   - `YOUR_PUBLIC_KEY` mit Ihrem Public Key

### 3. Domain anpassen
Ersetzen Sie in allen Dateien `https://www.joos-soft-solutions.de` mit Ihrer tatsächlichen Domain.

### 4. Google Search Console
1. Verifizieren Sie Ihre Website in der Google Search Console
2. Reichen Sie die Sitemap ein: `https://ihre-domain.de/sitemap.xml`

### 5. Performance Optimierungen
- Konvertieren Sie Bilder zu WebP Format
- Aktivieren Sie Gzip/Brotli Kompression auf dem Server
- Nutzen Sie ein CDN für statische Assets

### 6. Langfristig: Server-Side Rendering
Für optimales SEO sollten Sie langfristig auf ein Framework mit SSR wechseln:
- Next.js (React)
- Astro (Static Site Generator)
- Remix (React)

## Deployment Checklist
- [ ] Alle Bilder lokal hosten
- [ ] EmailJS konfigurieren
- [ ] Domain URLs anpassen
- [ ] robots.txt und sitemap.xml hochladen
- [ ] Google Search Console einrichten
- [ ] Google Analytics / Matomo einrichten (optional)
- [ ] SSL Zertifikat aktivieren (HTTPS)
- [ ] Performance testen (PageSpeed Insights)
